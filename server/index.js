import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler.js";
import weatherRoutes from "./routes/weather.js";
import forecastRoutes from "./routes/forecast.js";
import recommendRoutes from "./routes/recommend.js";
import lureRoutes from "./routes/lures.js";
import spotRoutes from "./routes/spots.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/weather", weatherRoutes);
app.use("/api/forecast", forecastRoutes);
app.use("/api/recommend", recommendRoutes);
app.use("/api/lures", lureRoutes);
app.use("/api/spots", spotRoutes);

// Serve client build in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
  });
}

app.use(errorHandler);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Bass Brain server running on port ${PORT}`);
});
