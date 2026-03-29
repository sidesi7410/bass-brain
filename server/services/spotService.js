const OVERPASS_URL = "https://overpass-api.de/api/interpreter";

export async function getWaterFeatures(lat, lon, radiusKm = 10) {
  // Convert radius to meters for Overpass
  const radiusM = radiusKm * 1000;

  // Query for lakes, reservoirs, and rivers within the bounding area
  const query = `
    [out:json][timeout:15];
    (
      way["natural"="water"]["water"~"lake|reservoir|oxbow|pond"](around:${radiusM},${lat},${lon});
      relation["natural"="water"]["water"~"lake|reservoir"](around:${radiusM},${lat},${lon});
      way["waterway"="river"](around:${radiusM},${lat},${lon});
      way["waterway"="stream"]["width"](around:${radiusM},${lat},${lon});
    );
    out center tags;
  `;

  try {
    const res = await fetch(OVERPASS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `data=${encodeURIComponent(query)}`
    });

    if (!res.ok) {
      throw new Error(`Overpass API returned ${res.status}`);
    }

    const data = await res.json();

    return data.elements
      .filter(el => el.tags?.name) // Only named features
      .map(el => ({
        id: `osm-${el.id}`,
        name: el.tags.name,
        type: el.tags.water || el.tags.waterway || "water",
        lat: el.center?.lat || el.lat,
        lon: el.center?.lon || el.lon,
        source: "osm",
        tags: {
          fishing: el.tags.fishing || null,
          sport: el.tags.sport || null,
          access: el.tags.access || null
        }
      }))
      .filter(f => f.lat && f.lon); // Must have coordinates
  } catch (err) {
    console.error("Overpass API error:", err.message);
    return []; // Fail gracefully - OSM data is supplementary
  }
}
