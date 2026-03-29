import { useSearchParams } from "react-router-dom";
import LocationSearch from "../components/LocationSearch";
import WeatherCard from "../components/WeatherCard";
import RecommendationPanel from "../components/RecommendationPanel";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorBanner from "../components/ErrorBanner";
import { useWeather } from "../hooks/useWeather";
import { useRecommendations } from "../hooks/useRecommendations";
import "./HomePage.css";

export default function HomePage() {
  const [params, setParams] = useSearchParams();
  const location = params.get("location") || "";

  const { weather, loading: weatherLoading, error: weatherError } = useWeather(location);
  const { recommendations, loading: recLoading, error: recError } = useRecommendations(
    location,
    weather
  );

  function handleSearch(loc) {
    setParams({ location: loc });
  }

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">What Should I Throw?</h1>
        <p className="hero-subtitle">
          Enter your fishing location and let Bass Brain analyze the weather to recommend the perfect lures.
        </p>
      </div>

      <LocationSearch onSearch={handleSearch} initialValue={location} />

      {weatherError && <ErrorBanner message={weatherError} />}

      {weatherLoading && <LoadingSpinner message="Fetching weather data..." />}

      {weather && !weatherLoading && (
        <div className="results-grid">
          <div className="weather-section">
            <WeatherCard weather={weather} />
          </div>
          <div className="rec-section">
            <RecommendationPanel
              recommendations={recommendations}
              loading={recLoading}
              error={recError}
            />
          </div>
        </div>
      )}
    </div>
  );
}
