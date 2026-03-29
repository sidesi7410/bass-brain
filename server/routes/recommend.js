import { Router } from "express";
import { getRecommendations } from "../services/claudeService.js";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const { location, current, forecast, preferences } = req.body;
    if (!location || !current) {
      return res.status(400).json({ error: "location and current weather data are required" });
    }
    const recommendations = await getRecommendations({ location, current, forecast, preferences });
    res.json(recommendations);
  } catch (err) {
    next(err);
  }
});

export default router;
