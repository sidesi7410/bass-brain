import { Router } from "express";
import { getForecast } from "../services/weatherService.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const { location, days = 3 } = req.query;
    if (!location) {
      return res.status(400).json({ error: "location query parameter is required" });
    }
    const forecast = await getForecast(location, Math.min(Number(days), 3));
    res.json(forecast);
  } catch (err) {
    next(err);
  }
});

export default router;
