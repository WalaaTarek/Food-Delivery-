import { Router } from "express";
import asyncHandler from "express-async-handler";
import CartItem from "../models/cart.model.js";
import Item from "../models/items.model.js";
import authMiddleware from "../middlewares/auth.js";

const router = Router();

router.post(
  "/",
  authMiddleware,
  asyncHandler(async (req, res) => {
    const { item_id, quantity } = req.body;

    const item = await Item.findById(item_id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    let cartItem = await CartItem.findOne({ user_id: req.user.id, item_id });
    if (cartItem) {
      cartItem.quantity += quantity || 1;
      await cartItem.save();
    } else {
      cartItem = await CartItem.create({
        user_id: req.user.id,
        item_id,
        quantity: quantity || 1,
      });
    }

    res.status(201).json(cartItem);
  })
);

router.get(
  "/",
  authMiddleware,
  asyncHandler(async (req, res) => {
    const items = await CartItem.find({ user_id: req.user.id })
      .populate("item_id", "item_name price category_id");
    res.status(200).json(items);
  })
);

router.delete(
  "/:id",
  authMiddleware,
  asyncHandler(async (req, res) => {
    const exist = await CartItem.findOne({ _id: req.params.id, user_id: req.user.id });
    if (!exist) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    await exist.deleteOne();
    res.json({ message: "Removed from cart" });
  })
);

export default router;
