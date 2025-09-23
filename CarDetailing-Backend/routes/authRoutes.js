//auth routes
import { Router } from "express";
// import { loginUser, sendOtp, verifyOtp, logoutUser } from "../controllers/authController.js";
import { registerCustomer } from "../controllers/customersController.js";

const router = Router();

router.post("/signup/customer", registerCustomer);
// router.post("/login/", loginUser);
// router.post("/forgot-password", sendOtp);
// router.post("/verify-otp", verifyOtp);
// router.post("/logout", logoutUser);

export default router;
