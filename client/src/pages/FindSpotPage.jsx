import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FishingMap from "../components/FishingMap";
import { useFishingSpots } from "../hooks/useFishingSpots";
import { searchSpots } from "../api/client";
import "./FindSpotPage.css";

export default function FindSpotPage() {
  const navigate = useNavigate();
  const { curatedSpots, waterFeatures, loading, loadWaterFeatures } = useFishingSpots();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [flyTo, setFlyTo] = useState(null);

  const handleMoveEnd = useCallback((lat, lon, zoom) => {
    loadWaterFeatures(lat, lon, zoom);
  }, [loadWaterFeatures]);

  function handleGetLurePicks(lat, lon, name) {
    navigate(`/?location=${lat},${lon}`);
  }

  async function handleSearch(e) {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;

    try {
      const results = await searchSpots(q);
      setSearchResults(results);
      if (results.length > 0) {
        setFlyTo([results[0].lat, results[0].lon]);
      }
    } catch {
      setSearchResults([]);
    }
  }

  function handleLocateMe() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setFlyTo([pos.coords.latitude, pos.coords.longitude]);
      },
      () => {} // fail silently
    );
  }

  return (
    <div className="find-spot-page">
      <div className="spot-header">
        <h1 className="page-title">Find a Fishing Spot</h1>
        <div className="spot-controls">
          <form onSubmit={handleSearch} className="spot-search-form">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by lake name or state..."
              className="spot-search-input"
            />
            <button type="submit" className="spot-search-btn">Search</button>
          </form>
          <button className="locate-btn" onClick={handleLocateMe} title="Use my location">
            My Location
          </button>
        </div>
        {loading && <span className="loading-indicator">Loading water features...</span>}
        {searchResults && searchResults.length === 0 && (
          <p className="no-spots">No spots found for "{searchQuery}"</p>
        )}
      </div>

      <div className="map-container">
        <FishingMap
          curatedSpots={curatedSpots}
          waterFeatures={waterFeatures}
          onMoveEnd={handleMoveEnd}
          onGetLurePicks={handleGetLurePicks}
          flyTo={flyTo}
        />
      </div>

      <div className="map-legend">
        <span className="legend-item"><span className="legend-icon">🎣</span> Featured bass fishing spot</span>
        <span className="legend-item"><span className="legend-icon">💧</span> Water feature (zoom in to see)</span>
      </div>
    </div>
  );
}
