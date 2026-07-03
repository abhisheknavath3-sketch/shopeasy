import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  createOrder,
  getOrders,
  getMyOrders,
} from "../controllers/orderController.js";
const router = express.Router();

router.post("/", verifyToken, createOrder);
router.get("/", getOrders);
router.get("/my-orders", verifyToken, getMyOrders);

export default router;