import "./LoadingSpinner.css";

const FISHING_TIPS = [
  "Bass tend to feed more aggressively during low-light periods...",
  "Falling barometric pressure often triggers a feeding frenzy...",
  "In stained water, try lures with more vibration and noise...",
  "Match your lure color to the water clarity for best results...",
  "Wind blowing into a bank pushes baitfish — bass follow...",
  "Slow down your retrieve in cold water — bass metabolism drops...",
  "Overcast skies mean bass roam more — cover water faster...",
  "Post-frontal bluebird skies? Go finesse and fish slow...",
];

export default function LoadingSpinner({ message = "Loading...", showTip = false }) {
  const tip = showTip ? FISHING_TIPS[Math.floor(Math.random() * FISHING_TIPS.length)] : null;

  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p className="loading-message">{message}</p>
      {tip && <p className="loading-tip">{tip}</p>}
    </div>
  );
}
