import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  createOrder,
  getOrders,
  getMyOrders,
} from "../../Backend/controllers/orderController.js";
const router = express.Router();

router.post("/createOrder", verifyToken, createOrder);
router.get("/getOrders", getOrders);
router.get("/my-orders", verifyToken, getMyOrders);

export default router;