import "./WeatherCard.css";

export default function WeatherCard({ weather }) {
  const { location, current } = weather;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <div>
          <h3 className="weather-location">{location.name}, {location.region}</h3>
          <p className="weather-time">{location.localtime}</p>
        </div>
        <div className="weather-temp-group">
          <img
            src={`https:${current.condition_icon}`}
            alt={current.condition}
            className="weather-icon"
          />
          <span className="weather-temp">{Math.round(current.temp_f)}°F</span>
        </div>
      </div>

      <p className="weather-condition">{current.condition}</p>

      <div className="weather-details">
        <div className="weather-detail">
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">{Math.round(current.feelslike_f)}°F</span>
        </div>
        <div className="weather-detail">
          <span className="detail-label">Wind</span>
          <span className="detail-value">{current.wind_mph} mph {current.wind_dir}</span>
        </div>
        <div className="weather-detail">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{current.pressure_in} inHg</span>
        </div>
        <div className="weather-detail">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{current.humidity}%</span>
        </div>
        <div className="weather-detail">
          <span className="detail-label">Cloud Cover</span>
          <span className="detail-value">{current.cloud}%</span>
        </div>
        <div className="weather-detail">
          <span className="detail-label">UV Index</span>
          <span className="detail-value">{current.uv}</span>
        </div>
        {current.water_temp_f && (
          <div className="weather-detail water-temp">
            <span className="detail-label">Water Temp</span>
            <span className="detail-value">{Math.round(current.water_temp_f)}°F</span>
          </div>
        )}
        <div className="weather-detail">
          <span className="detail-label">Precipitation</span>
          <span className="detail-value">{current.precip_in} in</span>
        </div>
      </div>
    </div>
  );
}
