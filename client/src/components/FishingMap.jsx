import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./FishingMap.css";

// Fix default marker icons in bundled environments
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const curatedIcon = new L.DivIcon({
  className: "curated-marker",
  html: '<div class="marker-pin curated">🎣</div>',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const osmIcon = new L.DivIcon({
  className: "osm-marker",
  html: '<div class="marker-pin osm">💧</div>',
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

function MapEvents({ onMoveEnd }) {
  useMapEvents({
    moveend: (e) => {
      const map = e.target;
      const center = map.getCenter();
      onMoveEnd(center.lat, center.lng, map.getZoom());
    },
  });
  return null;
}

function FlyToLocation({ center }) {
  const map = useMap();
  const prevCenter = useRef(center);

  useEffect(() => {
    if (center && (center[0] !== prevCenter.current?.[0] || center[1] !== prevCenter.current?.[1])) {
      map.flyTo(center, 12, { duration: 1.5 });
      prevCenter.current = center;
    }
  }, [center, map]);

  return null;
}

export default function FishingMap({
  curatedSpots,
  waterFeatures,
  onMoveEnd,
  onGetLurePicks,
  flyTo,
}) {
  const defaultCenter = [39.8283, -98.5795]; // Center of US
  const defaultZoom = 5;

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      className="fishing-map"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapEvents onMoveEnd={onMoveEnd} />
      {flyTo && <FlyToLocation center={flyTo} />}

      {/* Curated fishing spots */}
      {curatedSpots.map((spot) => (
        <Marker key={spot.id} position={[spot.lat, spot.lon]} icon={curatedIcon}>
          <Popup className="spot-popup" maxWidth={300}>
            <div className="popup-content">
              <h3>{spot.name}</h3>
              <span className="popup-badge">{spot.type} — {spot.state}</span>
              <p className="popup-species">
                <strong>Species:</strong> {spot.species.join(", ")}
              </p>
              <p className="popup-notes">{spot.notes}</p>
              {spot.distance !== undefined && (
                <p className="popup-distance">{spot.distance} miles away</p>
              )}
              <button
                className="popup-btn"
                onClick={() => onGetLurePicks(spot.lat, spot.lon, spot.name)}
              >
                Get Lure Picks
              </button>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* OSM water features */}
      {waterFeatures.map((feature) => (
        <Marker key={feature.id} position={[feature.lat, feature.lon]} icon={osmIcon}>
          <Popup className="spot-popup" maxWidth={280}>
            <div className="popup-content">
              <h3>{feature.name}</h3>
              <span className="popup-badge osm-badge">{feature.type}</span>
              <button
                className="popup-btn"
                onClick={() => onGetLurePicks(feature.lat, feature.lon, feature.name)}
              >
                Get Lure Picks
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
