import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  user_id: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: "User", 
     required: true
     },
  item_id: {
     type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
       required: true
     },
  quantity: { 
    type: Number, 
    default: 1,
     min: 1
     },
},
 {
     timestamps: true
     });

export default mongoose.model("CartItem", cartItemSchema);
