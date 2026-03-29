import { Router } from "express";
import { lures, getLureById } from "../data/lures.js";

const router = Router();

router.get("/", (req, res) => {
  res.json(lures);
});

router.get("/:id", (req, res) => {
  const lure = getLureById(req.params.id);
  if (!lure) {
    return res.status(404).json({ error: "Lure not found" });
  }
  res.json(lure);
});

export default router;
