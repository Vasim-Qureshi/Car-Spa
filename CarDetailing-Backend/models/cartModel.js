import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: true
    },
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
      min: 1
    }
  },
  {
    timestamps: true
  }
);

const CartModel = mongoose.model("CartItem", cartItemSchema);

export default CartModel;
