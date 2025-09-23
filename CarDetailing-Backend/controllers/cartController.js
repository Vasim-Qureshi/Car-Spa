import User from "../models/userModel.js";
import CartModel from "../models/cartModel.js";

export const addToCart = async (req, res) => {
    const { customerId, serviceId, quantity } = req.body;

    try {
        console.log(customerId, serviceId, quantity);
        
        let cartItems = await CartModel.findOne({ serviceId, customerId });

        if (cartItems) {
            // If cart exists, update it 
            cartItems.quantity += quantity;
            await cartItems.save();
        } else {
            // If cart doesn't exist, create a new one
            cartItems = await CartModel.create({ customerId, serviceId, quantity });
        }
        res.status(200).json({ message: "Service added to cart", cartItems });
    } catch (error) {
        res.status(500).json({ message: "Error adding to cart", error });
    }
};
