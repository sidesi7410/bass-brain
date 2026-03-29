import "./ErrorBanner.css";

export default function ErrorBanner({ message, onDismiss }) {
  return (
    <div className="error-banner">
      <p>{message}</p>
      {onDismiss && <button className="error-dismiss" onClick={onDismiss}>Dismiss</button>}
    </div>
  );
}
