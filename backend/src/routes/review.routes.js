import { Router } from "express";
import asyncHandler from "express-async-handler";
import Review from "../models/review.model.js";
import Item from "../models/items.model.js";
import authMiddleware from "../middlewares/auth.js";

const router = Router();

router.post(
  "/",
  authMiddleware,
  asyncHandler(async (req, res) => {
    const { item_id, rating, comment } = req.body;

    const item = await Item.findById(item_id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    const exist = await Review.findOne({ user_id: req.user.id, item_id });
    if (exist) {
      return res.status(400).json({ message: "You already reviewed this item" });
    }

    const review = await Review.create({
      user_id: req.user.id,
      item_id,
      rating,
      comment,
    });

    res.status(201).json(review);
  })
);

router.get(
  "/:item_id",
  asyncHandler(async (req, res) => {
    const reviews = await Review.find({ item_id: req.params.item_id })
      .populate("user_id", "name email");

    res.status(200).json(reviews);
  })
);

export default router;
