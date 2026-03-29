import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import LocationSearch from "../components/LocationSearch";
import RecommendationPanel from "../components/RecommendationPanel";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorBanner from "../components/ErrorBanner";
import { useForecast } from "../hooks/useForecast";
import { fetchRecommendations } from "../api/client";
import "./ForecastPage.css";

function ForecastDayCard({ day, location, isSelected, onSelect }) {
  const date = new Date(day.date + "T12:00:00");
  const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
  const monthDay = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return (
    <div className={`forecast-day-card ${isSelected ? "selected" : ""}`} onClick={onSelect}>
      <div className="forecast-day-header">
        <span className="forecast-day-name">{dayName}</span>
        <span className="forecast-day-date">{monthDay}</span>
      </div>
      <img
        src={`https:${day.day.condition_icon}`}
        alt={day.day.condition}
        className="forecast-icon"
      />
      <div className="forecast-temps">
        <span className="temp-high">{Math.round(day.day.maxtemp_f)}°</span>
        <span className="temp-low">{Math.round(day.day.mintemp_f)}°</span>
      </div>
      <p className="forecast-condition">{day.day.condition}</p>
      <div className="forecast-meta">
        <span>Wind: {day.day.maxwind_mph} mph</span>
        <span>Rain: {day.day.daily_chance_of_rain}%</span>
      </div>
      {day.bestFishingTimes.length > 0 && (
        <div className="best-times">
          {day.bestFishingTimes.slice(0, 2).map((bt) => (
            <span key={bt.time} className="time-badge" title={bt.reason}>
              {bt.time} ({bt.score}/10)
            </span>
          ))}
        </div>
      )}
      <button className="get-picks-btn" onClick={(e) => { e.stopPropagation(); onSelect(); }}>
        Get Lure Picks
      </button>
    </div>
  );
}

export default function ForecastPage() {
  const [params, setParams] = useSearchParams();
  const location = params.get("location") || "";
  const { forecast, loading, error } = useForecast(location);
  const [selectedDay, setSelectedDay] = useState(null);
  const [dayRecs, setDayRecs] = useState(null);
  const [dayRecsLoading, setDayRecsLoading] = useState(false);
  const [dayRecsError, setDayRecsError] = useState(null);

  function handleSearch(loc) {
    setParams({ location: loc });
    setSelectedDay(null);
    setDayRecs(null);
  }

  async function handleSelectDay(dayIndex) {
    setSelectedDay(dayIndex);
    setDayRecs(null);
    setDayRecsLoading(true);
    setDayRecsError(null);

    const day = forecast.forecast[dayIndex];
    try {
      const recs = await fetchRecommendations({
        location: `${forecast.location.name}, ${forecast.location.region}`,
        current: {
          temp_f: day.day.avgtemp_f,
          feelslike_f: day.day.avgtemp_f,
          condition: day.day.condition,
          wind_mph: day.day.maxwind_mph,
          wind_dir: "variable",
          pressure_mb: day.hours[0]?.pressure_mb || 1015,
          pressure_in: ((day.hours[0]?.pressure_mb || 1015) * 0.02953).toFixed(2),
          humidity: day.day.avghumidity,
          cloud: day.hours[3]?.cloud || 50,
          precip_in: day.day.totalprecip_in,
          vis_miles: 10,
          uv: day.day.uv,
          water_temp_f: null
        },
        forecast: day.day
      });
      setDayRecs(recs);
    } catch (err) {
      setDayRecsError(err.message);
    } finally {
      setDayRecsLoading(false);
    }
  }

  return (
    <div className="forecast-page">
      <h1 className="page-title">3-Day Fishing Forecast</h1>
      <p className="page-subtitle">Plan your trip with weather forecasts and best fishing times.</p>

      <LocationSearch onSearch={handleSearch} initialValue={location} />

      {error && <ErrorBanner message={error} />}
      {loading && <LoadingSpinner message="Loading forecast..." />}

      {forecast && !loading && (
        <>
          <h2 className="forecast-location">
            {forecast.location.name}, {forecast.location.region}
          </h2>
          <div className="forecast-timeline">
            {forecast.forecast.map((day, i) => (
              <ForecastDayCard
                key={day.date}
                day={day}
                location={location}
                isSelected={selectedDay === i}
                onSelect={() => handleSelectDay(i)}
              />
            ))}
          </div>

          {selectedDay !== null && (
            <div className="day-recommendations">
              <RecommendationPanel
                recommendations={dayRecs}
                loading={dayRecsLoading}
                error={dayRecsError}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
