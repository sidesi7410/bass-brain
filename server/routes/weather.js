import { Router } from "express";
import { getCurrent } from "../services/weatherService.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const { location } = req.query;
    if (!location) {
      return res.status(400).json({ error: "location query parameter is required" });
    }
    const weather = await getCurrent(location);
    res.json(weather);
  } catch (err) {
    next(err);
  }
});

export default router;
