import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  label: String, 
  city: String,
  street: String,
  building: String,
  notes: String
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  phone: String,
  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer"
  },
  addresses: [addressSchema]
}, { timestamps: true });

export default mongoose.model("User", userSchema);
