import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  category_name: {
    required: true,
    unique: true,
    type: String,
  },
  description: {
    type: String,
  },
  image: { type: String },
});
export default mongoose.model("Category", categorySchema);
