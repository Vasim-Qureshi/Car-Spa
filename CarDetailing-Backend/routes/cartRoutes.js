// cart routes
import { Router } from "express";
import {addToCart} from "../controllers/cartController.js";
// import { getCart, updateCartQuantityById, removeCartItemById, getCartItems, removeFromCart } from "../controllers/cartController.js";

const router = Router();

router.post("/add", addToCart);
// router.get("/:id", getCart);
// router.patch("/:id", updateCartQuantityById);
// router.delete("/:id", removeCartItemById);

// router.get("/", getCartItems);
// router.delete("/", removeFromCart);

export default router;
