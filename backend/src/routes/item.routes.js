import { Router } from "express";
import asyncHandler from "express-async-handler";
import Category from "../models/category.model.js";
import Item from "../models/items.model.js";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const items = await Item.find();
    if (!items) {
      return res.status(400).json({ message: "not item exist" });
    }
    res.status(200).json(items);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(400).json({ message: "the item with id.. not exist" });
    }
    res.status(200).json(item);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { item_name, category_id, price, description, images, ingredients } =
      req.body;
    const existCategory = await Category.findById(category_id);
    if (!existCategory) {
      return res
        .status(400)
        .json({ message: "category not found , go to add it" });
    }
    const existItem = await Item.findOne({ item_name });
    if (existItem) {
      return res.status(400).json({ message: "item already exist" });
    }
    const addItem = new Item({
      item_name,
      category_id,
      price,
      description,
      images,
      ingredients,
    });
    const add = await addItem.save();
    res.status(201).json(add);
  })
);
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const exist = await Item.findById(req.params.id);
    if (!exist) {
      return res.status(400).json({ message: "item not exist to delete" });
    }
    const del = await Item.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "item deleted from menu" });
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const exist = await Item.findById(req.params.id);
    if (!exist) {
      return res.status(400).json({ message: "item not exist to update" });
    }
    const { item_name, category_id, price, description, images, ingredients } =
      req.body;
    const update = await Item.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          item_name,
          category_id,
          price,
          description,
          images,
          ingredients,
        },
      },
      { new: true }
    );
    res.status(200).json(update);
  })
);
export default router;
