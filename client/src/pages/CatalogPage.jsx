import { useState } from "react";
import { lures, CATEGORIES } from "../data/lures";
import "./CatalogPage.css";

function LureDetail({ lure, onClose }) {
  return (
    <div className="lure-detail-overlay" onClick={onClose}>
      <div className="lure-detail" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose}>X</button>
        <div className="detail-header">
          <h2>{lure.name}</h2>
          <span className="detail-brand">{lure.brand}</span>
        </div>
        <span className="category-badge">{lure.type}</span>

        <p className="detail-description">{lure.description}</p>

        <div className="detail-specs">
          <div className="spec">
            <span className="spec-label">Depth Range</span>
            <span className="spec-value">{lure.depthRange.min}-{lure.depthRange.max} ft</span>
          </div>
          <div className="spec">
            <span className="spec-label">Ideal Water Temp</span>
            <span className="spec-value">{lure.idealWaterTemp.min}-{lure.idealWaterTemp.max}°F</span>
          </div>
          <div className="spec">
            <span className="spec-label">Weight</span>
            <span className="spec-value">{lure.weight}</span>
          </div>
        </div>

        <div className="detail-section">
          <h3>Colors</h3>
          <div className="tag-list">
            {lure.colors.map((c) => <span key={c} className="tag">{c}</span>)}
          </div>
        </div>

        <div className="detail-section">
          <h3>Techniques</h3>
          <div className="tag-list">
            {lure.techniques.map((t) => <span key={t} className="tag tag-technique">{t}</span>)}
          </div>
        </div>

        <div className="detail-section">
          <h3>Best Conditions</h3>
          <div className="conditions-grid">
            <div>
              <span className="cond-label">Water Clarity:</span>
              {lure.bestConditions.waterClarity.join(", ")}
            </div>
            <div>
              <span className="cond-label">Weather:</span>
              {lure.bestConditions.weather.join(", ")}
            </div>
            <div>
              <span className="cond-label">Season:</span>
              {lure.bestConditions.season.join(", ")}
            </div>
            <div>
              <span className="cond-label">Bass Activity:</span>
              {lure.bestConditions.activity.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CatalogPage() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedLure, setSelectedLure] = useState(null);

  const filtered = lures.filter((lure) => {
    const matchCat = category === "all" || lure.category === category;
    const matchSearch = !search ||
      lure.name.toLowerCase().includes(search.toLowerCase()) ||
      lure.brand.toLowerCase().includes(search.toLowerCase()) ||
      lure.type.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="catalog-page">
      <h1 className="page-title">Lure Catalog</h1>
      <p className="page-subtitle">Browse bass lures and learn when to use each one.</p>

      <div className="catalog-filters">
        <input
          type="text"
          placeholder="Search lures..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="catalog-search"
        />
        <div className="category-chips">
          <button
            className={`cat-chip ${category === "all" ? "active" : ""}`}
            onClick={() => setCategory("all")}
          >
            All ({lures.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = lures.filter(l => l.category === cat.value).length;
            return (
              <button
                key={cat.value}
                className={`cat-chip ${category === cat.value ? "active" : ""}`}
                onClick={() => setCategory(cat.value)}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      <div className="lure-grid">
        {filtered.map((lure) => (
          <div
            key={lure.id}
            id={lure.id}
            className="lure-card"
            onClick={() => setSelectedLure(lure)}
          >
            <div className="lure-card-color" data-category={lure.category}></div>
            <div className="lure-card-body">
              <span className="lure-category">{lure.type}</span>
              <h3 className="lure-name">{lure.name}</h3>
              <p className="lure-brand">{lure.brand}</p>
              <p className="lure-desc">{lure.description}</p>
              <div className="lure-stats">
                <span>{lure.depthRange.min}-{lure.depthRange.max} ft</span>
                <span>{lure.idealWaterTemp.min}-{lure.idealWaterTemp.max}°F</span>
                <span>{lure.weight}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="no-results">No lures match your filters.</p>
      )}

      {selectedLure && (
        <LureDetail lure={selectedLure} onClose={() => setSelectedLure(null)} />
      )}
    </div>
  );
}
