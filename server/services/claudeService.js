import Anthropic from "@anthropic-ai/sdk";
import { lures } from "../data/lures.js";

let client;
function getClient() {
  if (!client) client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  return client;
}
const MODEL = "claude-haiku-4-5-20251001";
const MAX_TOKENS = 1500;

// Simple in-memory cache (30 min TTL)
const cache = new Map();
const CACHE_TTL = 30 * 60 * 1000;

function getCacheKey(location, temp, pressure, cloud) {
  // Round values to reduce cache misses for similar conditions
  const roundedTemp = Math.round(temp / 5) * 5;
  const roundedPressure = Math.round(pressure / 5) * 5;
  const roundedCloud = Math.round(cloud / 20) * 20;
  return `${location.toLowerCase().trim()}_${roundedTemp}_${roundedPressure}_${roundedCloud}`;
}

function buildSystemPrompt() {
  const catalogJson = JSON.stringify(
    lures.map(l => ({
      id: l.id,
      name: l.name,
      category: l.category,
      type: l.type,
      depthRange: l.depthRange,
      idealWaterTemp: l.idealWaterTemp,
      bestConditions: l.bestConditions
    }))
  );

  return `You are Bass Brain, an expert bass fishing guide and lure specialist. You analyze weather and water conditions to recommend the best bass fishing lures.

You have deep knowledge of:
- How barometric pressure changes affect bass behavior (rising = active, falling = sluggish, stable = predictable)
- How water temperature drives bass positioning (seasonal patterns, thermocline)
- How wind, cloud cover, and precipitation influence lure selection
- How light penetration affects color choice (bright conditions = natural colors, low light/muddy = bright/dark)
- Regional bass behavior patterns

AVAILABLE LURE CATALOG:
${catalogJson}

RULES:
1. Always recommend 3-5 lures ranked by expected effectiveness
2. Each recommendation MUST reference a lure from the catalog by its exact "id" field
3. Suggest specific colors and retrieval techniques
4. Explain WHY each lure suits the current conditions (tie to specific weather data points)
5. Include general fishing tips for the conditions
6. Assign a confidence level (high/medium/low) based on how strongly the conditions favor that lure

Respond ONLY in this exact JSON format (no markdown, no code fences):
{
  "recommendations": [
    {
      "rank": 1,
      "lure_id": "exact-catalog-id",
      "lure_name": "Full Lure Name",
      "color_suggestion": "Specific color(s)",
      "technique": "How to fish it",
      "confidence": "high|medium|low",
      "explanation": "2-3 sentences explaining why"
    }
  ],
  "general_tips": "2-3 sentences of general advice for these conditions"
}`;
}

function buildUserMessage({ location, current, forecast, preferences }) {
  let msg = `Current conditions for ${location}:
- Air Temperature: ${current.temp_f}°F (feels like ${current.feelslike_f}°F)
- Water Temperature: ${current.water_temp_f ? current.water_temp_f + "°F" : "unknown"}
- Condition: ${current.condition}
- Wind: ${current.wind_mph} mph from ${current.wind_dir}
- Barometric Pressure: ${current.pressure_in} inHg (${current.pressure_mb} mb)
- Cloud Cover: ${current.cloud}%
- Precipitation: ${current.precip_in} inches
- Humidity: ${current.humidity}%
- UV Index: ${current.uv}
- Visibility: ${current.vis_miles} miles`;

  if (forecast) {
    msg += `\n\nToday's forecast:
- High/Low: ${forecast.maxtemp_f}°F / ${forecast.mintemp_f}°F
- Max Wind: ${forecast.maxwind_mph} mph
- Rain Chance: ${forecast.daily_chance_of_rain}%
- Total Precip: ${forecast.totalprecip_in} inches`;
  }

  if (preferences) {
    msg += `\n\nAngler preferences:`;
    if (preferences.fishingStyle) msg += `\n- Fishing from: ${preferences.fishingStyle}`;
    if (preferences.targetSpecies) msg += `\n- Target species: ${preferences.targetSpecies}`;
  }

  msg += `\n\nRecommend the best lures from the catalog for these conditions.`;
  return msg;
}

export async function getRecommendations(weatherData) {
  const { location, current } = weatherData;

  // Check cache
  const cacheKey = getCacheKey(location, current.temp_f, current.pressure_mb, current.cloud);
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  const systemPrompt = buildSystemPrompt();
  const userMessage = buildUserMessage(weatherData);

  let responseText;
  try {
    const response = await getClient().messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }]
    });
    responseText = response.content[0].text;
  } catch (err) {
    throw Object.assign(new Error("Failed to get AI recommendations: " + err.message), { status: 502 });
  }

  // Parse JSON response — strip markdown fences if present
  function extractJson(text) {
    // Remove markdown code fences
    let cleaned = text.replace(/```json\s*/gi, "").replace(/```\s*/g, "").trim();
    // Try to find JSON object in the text
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start !== -1 && end !== -1) {
      cleaned = cleaned.slice(start, end + 1);
    }
    return JSON.parse(cleaned);
  }

  let parsed;
  try {
    parsed = extractJson(responseText);
  } catch {
    throw Object.assign(new Error("Failed to parse AI recommendation response"), { status: 502 });
  }

  const result = {
    location,
    conditions_summary: `${current.temp_f}°F, ${current.condition.toLowerCase()}, ${current.wind_mph}mph ${current.wind_dir} wind, pressure ${current.pressure_mb}mb, ${current.humidity}% humidity`,
    recommendations: parsed.recommendations,
    general_tips: parsed.general_tips,
    generated_at: new Date().toISOString()
  };

  // Cache result
  cache.set(cacheKey, { data: result, timestamp: Date.now() });

  return result;
}
