import { Router } from "express";
import { getSpotsByProximity, searchSpots } from "../data/fishingSpots.js";
import { getWaterFeatures } from "../services/spotService.js";

const router = Router();

// Curated spots near coordinates
router.get("/", (req, res, next) => {
  try {
    const { lat, lon, radius = 100 } = req.query;
    if (!lat || !lon) {
      return res.status(400).json({ error: "lat and lon query parameters are required" });
    }
    const spots = getSpotsByProximity(Number(lat), Number(lon), Number(radius));
    res.json(spots);
  } catch (err) {
    next(err);
  }
});

// Search curated spots by name/state
router.get("/search", (req, res, next) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ error: "q query parameter is required" });
    }
    const spots = searchSpots(q);
    res.json(spots);
  } catch (err) {
    next(err);
  }
});

// OSM water features near coordinates
router.get("/water", async (req, res, next) => {
  try {
    const { lat, lon, radius = 10 } = req.query;
    if (!lat || !lon) {
      return res.status(400).json({ error: "lat and lon query parameters are required" });
    }
    const features = await getWaterFeatures(Number(lat), Number(lon), Number(radius));
    res.json(features);
  } catch (err) {
    next(err);
  }
});

export default router;
