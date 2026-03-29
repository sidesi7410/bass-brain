import { useState, useEffect } from "react";
import "./LocationSearch.css";

const STORAGE_KEY = "bassbrain_recent_searches";

export default function LocationSearch({ onSearch, initialValue = "" }) {
  const [query, setQuery] = useState(initialValue);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      setRecent(stored);
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    saveRecent(trimmed);
    onSearch(trimmed);
  }

  function saveRecent(location) {
    const updated = [location, ...recent.filter(r => r.toLowerCase() !== location.toLowerCase())].slice(0, 5);
    setRecent(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  function handleRecentClick(location) {
    setQuery(location);
    saveRecent(location);
    onSearch(location);
  }

  return (
    <div className="location-search">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a city, zip code, or lake name..."
          className="search-input"
        />
        <button type="submit" className="search-button">Find Fish</button>
      </form>
      {recent.length > 0 && (
        <div className="recent-searches">
          <span className="recent-label">Recent:</span>
          {recent.map((loc) => (
            <button
              key={loc}
              className="recent-chip"
              onClick={() => handleRecentClick(loc)}
            >
              {loc}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
