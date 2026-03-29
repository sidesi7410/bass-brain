import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ForecastPage from "./pages/ForecastPage";
import CatalogPage from "./pages/CatalogPage";
import FindSpotPage from "./pages/FindSpotPage";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forecast" element={<ForecastPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/find-spot" element={<FindSpotPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
