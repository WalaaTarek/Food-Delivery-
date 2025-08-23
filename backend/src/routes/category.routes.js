import { Router } from "express";
import asyncHandler from "express-async-handler";
import Category from "../models/category.model.js";
import Item from "../models/items.model.js";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const categorys = await Category.find();
    res.status(200).json(categorys);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { category_name, description } = req.body;
    const exist = await Category.findOne({ category_name: category_name });
    if (exist) {
      return res.status(400).json({ message: "category already exist" });
    }
    const add = new Category({
      category_name,
      description,
    });
    const done = await add.save();
    res.status(201).json(done);
  })
);

router.get(
  "/getItem/:category",
  asyncHandler(async (req, res) => {
    const exist = await Category.findById(req.params.category);
    if (!exist) {
      return res.status(404).json({ message: "category not exist" });
    }
    const items = await Item.find({ category_id: req.params.category });
    res.status(200).json(items);
  })
);
export default router;
