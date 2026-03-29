import { useState, useEffect, useRef, useCallback } from "react";
import { fetchSpots, fetchWaterFeatures } from "../api/client";

export function useFishingSpots() {
  const [curatedSpots, setCuratedSpots] = useState([]);
  const [waterFeatures, setWaterFeatures] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef(null);

  // Load all curated spots on mount
  useEffect(() => {
    fetchSpots(39.8283, -98.5795, 5000) // center of US, huge radius = get all
      .then(setCuratedSpots)
      .catch(() => {}); // fail silently
  }, []);

  // Load water features for a given map viewport (debounced)
  const loadWaterFeatures = useCallback((lat, lon, zoom) => {
    if (zoom < 10) {
      setWaterFeatures([]);
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        // Rough radius from zoom level
        const radiusKm = Math.max(2, Math.round(200 / Math.pow(2, zoom - 8)));
        const features = await fetchWaterFeatures(lat, lon, radiusKm);
        setWaterFeatures(features);
      } catch {
        setWaterFeatures([]);
      } finally {
        setLoading(false);
      }
    }, 500);
  }, []);

  return { curatedSpots, waterFeatures, loading, loadWaterFeatures };
}
