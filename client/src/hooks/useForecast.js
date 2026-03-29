import { useState, useEffect } from "react";
import { fetchForecast } from "../api/client";

export function useForecast(location, days = 3) {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location) {
      setForecast(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchForecast(location, days)
      .then(data => {
        if (!cancelled) setForecast(data);
      })
      .catch(err => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [location, days]);

  return { forecast, loading, error };
}
