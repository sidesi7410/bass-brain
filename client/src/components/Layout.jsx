import { NavLink } from "react-router-dom";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-inner">
          <NavLink to="/" className="logo">
            <span className="logo-icon">🎣</span>
            <span className="logo-text">Bass Brain</span>
          </NavLink>
          <nav className="nav">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
              Home
            </NavLink>
            <NavLink to="/forecast" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Forecast
            </NavLink>
            <NavLink to="/catalog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Lure Catalog
            </NavLink>
            <NavLink to="/find-spot" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Find a Spot
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>Bass Brain — AI-powered fishing intelligence. Tight lines!</p>
      </footer>
    </div>
  );
}
