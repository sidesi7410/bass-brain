import dotenv from "dotenv";
import path from "path";
import fs from "fs";
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
const PORT = parseInt(process.env.PORT, 10) || 3001;

app.use(cors());
app.use(express.json());

// Health check (before all other routes)
app.get("/health", (req, res) => res.json({ status: "ok" }));

// API routes
app.use("/api/weather", weatherRoutes);
app.use("/api/forecast", forecastRoutes);
app.use("/api/recommend", recommendRoutes);
app.use("/api/lures", lureRoutes);
app.use("/api/spots", spotRoutes);

// Serve client build if dist exists
const distPath = path.resolve(__dirname, "../client/dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

app.use(errorHandler);

// SPA fallback
if (fs.existsSync(distPath)) {
  app.use((req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Bass Brain server running on http://0.0.0.0:${PORT}`);
  console.log(`dist exists: ${fs.existsSync(distPath)}`);
});

server.on("error", (err) => {
  console.error("Server error:", err);
});
