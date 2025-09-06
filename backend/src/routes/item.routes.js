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
  "/search/:searchItem",
  asyncHandler(async (req, res) => {
    const { searchItem } = req.params;

    const isPrice = !isNaN(Number(searchItem));

    const q = {
      $or: [
        { item_name: { $regex: searchItem, $options: "i" } },
        { description: { $regex: searchItem, $options: "i" } },
        { ingredients: { $regex: searchItem, $options: "i" } },
      ],
    };

    if (isPrice) {
      q.$or.push({ price: Number(searchItem) });
    }

    const items = await Item.find(q).populate("category_id", "name");

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "no item found" });
    }

    res.status(200).json(items);
  })
);

router.get(
  "/filter",
  asyncHandler(async (req, res) => {
    const { minPrice, maxPrice, itemName } = req.query;
    const filter = {};
    if (minPrice) {
      filter.price = { $gte: Number(minPrice) };
    }
    if (maxPrice) {
      filter.price = { ...filter.price, $lte: Number(maxPrice) };
    }
    if (itemName) {
      filter.item_name = { $regex: itemName, $options: "i" };
    }
    const items = await Item.find(filter);
    if (!items || items.length === 0) {
      return res.status(400).json({ message: "no item exist" });
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

router.post(
  "/search/:searchItem",
  asyncHandler(async (req, res) => {
    const searchItem = req.params.searchItem;
    const result = await Item.aggregate([
      {
        $search: {
          index: "food_item",
          compound: {
            should: [
              {
                autocomplete: {
                  query: searchItem,
                  path: "item_name",
                  fuzzy: { maxEdits: 2 },
                },
                text: {
                  query: searchItem,
                  path: "description",
                  fuzzy: { maxEdits: 2 },
                },
                text: {
                  query: searchItem,
                  path: "ingredients",
                  fuzzy: { maxEdits: 2 },
                },
              },
            ],
          },
        },
      },
      { $limit: 10 },
    ]);
    res.status(200).json(result);
  })
);

router.post(
  "/filter/:price",
  asyncHandler(async (req, res) => {
    const price = req.params.price;
    const result = await Item.find({ price: { $lte: price } });
    res.status(200).json(result);
  })
);

export default router;
