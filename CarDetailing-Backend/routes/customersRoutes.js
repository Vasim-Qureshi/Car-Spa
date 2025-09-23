// customer routes
import { Router } from "express";
// import { getAllCustomers, getCustomerById, updateCustomerById, deleteCustomerById } from "../controllers/customersController.js";
import { updateCustomerById, getCustomerById } from "../controllers/customersController.js";

const router = Router();

// router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);
router.put("/:id", updateCustomerById);
// router.delete("/:id", deleteCustomerById);

export default router;
