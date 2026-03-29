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

// Serve client build if dist exists
import fs from "fs";
const distPath = path.resolve(__dirname, "../client/dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use(errorHandler);

// SPA fallback — serve index.html for non-API routes
if (fs.existsSync(distPath)) {
  app.use((req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

app.listen(PORT, "0.0.0.0", async () => {
  const distPath = path.resolve(__dirname, "../client/dist");
  const fs = await import("fs");
  console.log(`Bass Brain server running on port ${PORT}`);
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`Serving static from: ${distPath}`);
  console.log(`dist exists: ${fs.existsSync(distPath)}`);
  if (fs.existsSync(distPath)) {
    console.log(`dist contents: ${fs.readdirSync(distPath).join(", ")}`);
  }
});
