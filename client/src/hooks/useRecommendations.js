import { useState, useEffect } from "react";
import { fetchRecommendations } from "../api/client";

export function useRecommendations(location, weather, preferences) {
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location || !weather) {
      setRecommendations(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchRecommendations({
      location,
      current: weather.current,
      preferences
    })
      .then(data => {
        if (!cancelled) setRecommendations(data);
      })
      .catch(err => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [location, weather]);

  return { recommendations, loading, error };
}
