// orders routes
import { Router } from "express";
import { createPaytmOrder, paytmCallback, createRazorpayOrder, verifyPayment, getAllOrders, getOrdersByCustomer, getOrderById, updateOrderPaymentStatus } from "../controllers/ordersController.js";

const router = Router();

// Razorpay Payment routes
router.post("/razorpay", createRazorpayOrder);
router.post("/razorpay/verify", verifyPayment);

// Paytm Payment routes
router.post("/paytm", createPaytmOrder);
router.post("/paytm/callback", paytmCallback); //handled in app.js

//Normal Order routes
// router.post("/", createOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.get("/customer/:customerId", getOrdersByCustomer);
router.put("/:id", updateOrderPaymentStatus);
// router.delete("/:id", deleteOrderById);

export default router;
