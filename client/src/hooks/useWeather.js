import { useState, useEffect } from "react";
import { fetchWeather } from "../api/client";

export function useWeather(location) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location) {
      setWeather(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchWeather(location)
      .then(data => {
        if (!cancelled) setWeather(data);
      })
      .catch(err => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [location]);

  return { weather, loading, error };
}
