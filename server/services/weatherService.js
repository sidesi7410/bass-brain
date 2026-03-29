const WEATHER_API_KEY = () => process.env.WEATHERAPI_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

export async function getCurrent(location) {
  const key = WEATHER_API_KEY();
  if (!key) throw Object.assign(new Error("WEATHERAPI_KEY not configured"), { status: 500 });

  const res = await fetch(`${BASE_URL}/current.json?key=${key}&q=${encodeURIComponent(location)}&aqi=no`);
  if (!res.ok) {
    const status = res.status === 400 ? 404 : 502;
    throw Object.assign(new Error("Could not find weather for that location"), { status });
  }
  const data = await res.json();

  // Try to get marine/water temp data
  let waterTemp = null;
  try {
    const marineRes = await fetch(`${BASE_URL}/marine.json?key=${key}&q=${encodeURIComponent(location)}&days=1`);
    if (marineRes.ok) {
      const marineData = await marineRes.json();
      waterTemp = marineData?.forecast?.forecastday?.[0]?.hour?.[0]?.water_temp_f || null;
    }
  } catch {
    // Marine data is optional
  }

  return {
    location: {
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
      lat: data.location.lat,
      lon: data.location.lon,
      localtime: data.location.localtime
    },
    current: {
      temp_f: data.current.temp_f,
      feelslike_f: data.current.feelslike_f,
      condition: data.current.condition.text,
      condition_icon: data.current.condition.icon,
      wind_mph: data.current.wind_mph,
      wind_dir: data.current.wind_dir,
      pressure_mb: data.current.pressure_mb,
      pressure_in: data.current.pressure_in,
      humidity: data.current.humidity,
      cloud: data.current.cloud,
      precip_in: data.current.precip_in,
      vis_miles: data.current.vis_miles,
      uv: data.current.uv,
      water_temp_f: waterTemp
    }
  };
}

function scoreFishingHour(hour, sunrise, sunset) {
  let score = 5; // baseline

  // Dawn/dusk bonus (best fishing times)
  const hourTime = parseInt(hour.time.split(" ")[1].split(":")[0]);
  const sunriseHour = parseInt(sunrise.split(":")[0]);
  const sunsetHour = parseInt(sunset.split(":")[0]);
  if (Math.abs(hourTime - sunriseHour) <= 1) score += 3;
  else if (Math.abs(hourTime - sunsetHour) <= 1) score += 3;
  else if (hourTime >= sunriseHour - 1 && hourTime <= sunriseHour + 2) score += 2;
  else if (hourTime >= sunsetHour - 2 && hourTime <= sunsetHour + 1) score += 2;

  // Wind: light wind is good, heavy wind is bad
  if (hour.wind_mph >= 5 && hour.wind_mph <= 12) score += 1;
  else if (hour.wind_mph > 20) score -= 2;

  // Cloud cover: 40-80% is ideal (overcast = better fishing)
  if (hour.cloud >= 40 && hour.cloud <= 80) score += 1;

  // No rain is slightly better, light rain can be good
  if (hour.precip_mm > 5) score -= 1;

  // Stable or slightly falling pressure is good
  // (We can't track changes within a single snapshot, but higher pressure generally = stable)
  if (hour.pressure_mb >= 1010 && hour.pressure_mb <= 1025) score += 1;

  // Night fishing is generally worse (score reduction)
  if (hourTime < sunriseHour - 1 || hourTime > sunsetHour + 1) score -= 2;

  return Math.max(1, Math.min(10, score));
}

function getBestFishingTimes(hours, sunrise, sunset) {
  const scored = hours.map(hour => {
    const time = hour.time.split(" ")[1];
    const score = scoreFishingHour(hour, sunrise, sunset);
    const reasons = [];
    const hourTime = parseInt(time.split(":")[0]);
    const sunriseHour = parseInt(sunrise.split(":")[0]);
    const sunsetHour = parseInt(sunset.split(":")[0]);

    if (Math.abs(hourTime - sunriseHour) <= 1) reasons.push("Low light (dawn)");
    if (Math.abs(hourTime - sunsetHour) <= 1) reasons.push("Low light (dusk)");
    if (hour.wind_mph >= 5 && hour.wind_mph <= 12) reasons.push("Light wind");
    if (hour.cloud >= 40 && hour.cloud <= 80) reasons.push("Overcast skies");
    if (hour.pressure_mb >= 1010 && hour.pressure_mb <= 1025) reasons.push("Stable pressure");

    return { time, score, reason: reasons.join(", ") || "Average conditions" };
  });

  return scored
    .filter(s => s.score >= 7)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
}

export async function getForecast(location, days = 3) {
  const key = WEATHER_API_KEY();
  if (!key) throw Object.assign(new Error("WEATHERAPI_KEY not configured"), { status: 500 });

  const res = await fetch(`${BASE_URL}/forecast.json?key=${key}&q=${encodeURIComponent(location)}&days=${days}&aqi=no`);
  if (!res.ok) {
    const status = res.status === 400 ? 404 : 502;
    throw Object.assign(new Error("Could not find forecast for that location"), { status });
  }
  const data = await res.json();

  const forecast = data.forecast.forecastday.map(day => {
    const sunrise = day.astro.sunrise.replace(" AM", "").replace(" PM", "");
    const sunset = day.astro.sunset.replace(" AM", "").replace(" PM", "");

    // Sample every 3 hours for the hours array
    const keyHours = day.hour.filter((_, i) => i % 3 === 0).map(h => ({
      time: h.time.split(" ")[1],
      temp_f: h.temp_f,
      condition: h.condition.text,
      condition_icon: h.condition.icon,
      wind_mph: h.wind_mph,
      pressure_mb: h.pressure_mb,
      cloud: h.cloud,
      precip_in: h.precip_in,
      humidity: h.humidity
    }));

    return {
      date: day.date,
      day: {
        maxtemp_f: day.day.maxtemp_f,
        mintemp_f: day.day.mintemp_f,
        avgtemp_f: day.day.avgtemp_f,
        condition: day.day.condition.text,
        condition_icon: day.day.condition.icon,
        maxwind_mph: day.day.maxwind_mph,
        totalprecip_in: day.day.totalprecip_in,
        avghumidity: day.day.avghumidity,
        uv: day.day.uv,
        daily_chance_of_rain: day.day.daily_chance_of_rain
      },
      astro: {
        sunrise: day.astro.sunrise,
        sunset: day.astro.sunset
      },
      bestFishingTimes: getBestFishingTimes(day.hour, sunrise, sunset),
      hours: keyHours
    };
  });

  return {
    location: {
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
      lat: data.location.lat,
      lon: data.location.lon,
      localtime: data.location.localtime
    },
    forecast
  };
}
