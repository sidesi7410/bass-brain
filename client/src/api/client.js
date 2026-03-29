const BASE = "/api";

async function request(url, options = {}) {
  const res = await fetch(`${BASE}${url}`, {
    headers: { "Content-Type": "application/json" },
    ...options
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `Request failed with status ${res.status}`);
  }
  return res.json();
}

export function fetchWeather(location) {
  return request(`/weather?location=${encodeURIComponent(location)}`);
}

export function fetchForecast(location, days = 3) {
  return request(`/forecast?location=${encodeURIComponent(location)}&days=${days}`);
}

export function fetchRecommendations(body) {
  return request("/recommend", {
    method: "POST",
    body: JSON.stringify(body)
  });
}

export function fetchLures() {
  return request("/lures");
}

export function fetchSpots(lat, lon, radius = 100) {
  return request(`/spots?lat=${lat}&lon=${lon}&radius=${radius}`);
}

export function searchSpots(query) {
  return request(`/spots/search?q=${encodeURIComponent(query)}`);
}

export function fetchWaterFeatures(lat, lon, radius = 10) {
  return request(`/spots/water?lat=${lat}&lon=${lon}&radius=${radius}`);
}
