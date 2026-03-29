import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import ErrorBanner from "./ErrorBanner";
import "./RecommendationPanel.css";

function ConfidenceBadge({ level }) {
  const colors = { high: "confidence-high", medium: "confidence-medium", low: "confidence-low" };
  return <span className={`confidence-badge ${colors[level] || ""}`}>{level}</span>;
}

export default function RecommendationPanel({ recommendations, loading, error }) {
  if (loading) {
    return <LoadingSpinner message="Bass Brain is analyzing conditions..." showTip />;
  }

  if (error) {
    return <ErrorBanner message={error} />;
  }

  if (!recommendations) return null;

  return (
    <div className="recommendation-panel">
      <h2 className="rec-title">Recommended Lures</h2>
      <p className="rec-summary">{recommendations.conditions_summary}</p>

      <div className="rec-list">
        {recommendations.recommendations.map((rec) => (
          <div key={rec.rank} className="rec-card">
            <div className="rec-rank">#{rec.rank}</div>
            <div className="rec-content">
              <div className="rec-header">
                <Link to={`/catalog#${rec.lure_id}`} className="rec-lure-name">
                  {rec.lure_name}
                </Link>
                <ConfidenceBadge level={rec.confidence} />
              </div>
              <div className="rec-meta">
                <span className="rec-color">Color: {rec.color_suggestion}</span>
                <span className="rec-technique">Technique: {rec.technique}</span>
              </div>
              <p className="rec-explanation">{rec.explanation}</p>
            </div>
          </div>
        ))}
      </div>

      {recommendations.general_tips && (
        <div className="rec-tips">
          <strong>General Tips:</strong> {recommendations.general_tips}
        </div>
      )}
    </div>
  );
}
