import { Router } from "express";
import Order from "../models/order.model.js";
import AsyncHandler from "express-async-handler";

const router = Router();

// GET api/order/
router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const orders = await Order.find();
    if (!orders)
      return res.status(404).json({ message: "There are no current orders" });
    res.status(200).json(orders);
  })
);

// GET api/order/:id
router.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (!order)
      return res.status(404).json({ message: "Order does not exist." });
    res.status(200).json(order);
  })
);

// POST api/order/
router.post(
  "/",
  AsyncHandler(async (req, res) => {
    const addOrder = new Order(req.body);
    const addedOrder = await addOrder.save();
    return res.status(201).json(addedOrder);
  })
);

// DELETE api/order:id
router.delete(
  "/:id",
  AsyncHandler(async (req, res) => {
    const order = Order.findById(req.params.id);
    if (!order)
      return res.status(400).json({ message: "Order does not exist." });
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Order has been deleted successfully!" });
  })
);

// PUT api/order:id
router.put(
  "/:id",
  AsyncHandler(async (req, res) => {
    const order = Order.findById(req.params.id);
    if (!order)
      return res.status(400).json({ message: "Order does not exist." });
    const { user, status, items, totalPrice } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          user,
          status,
          items,
          totalPrice,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  })
);

export default router;
