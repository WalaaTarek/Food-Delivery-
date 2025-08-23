import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: true,
    unique: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  ingredients: {
    type: [String],
  },
});
export default mongoose.model("Item", itemSchema);
