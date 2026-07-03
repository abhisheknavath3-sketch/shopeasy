import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { isAdmin } from "../middleware/auth.js";
import User from "../../Backend/models/User.js";
import Product from "../../Backend/models/Product.js";
import Order from "../../Backend/models/Order.js";

const router = express.Router();


router.get("/stats", verifyToken, isAdmin, async (req, res) => {
  const users = await User.countDocuments();
  const products = await Product.countDocuments();
  const orders = await Order.countDocuments();

  res.json({ users, products, orders });
});


router.put(
  "/make-admin/:id",
  verifyToken,
  isAdmin,
  async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { role: "admin" },
        { new: true }
      );

      res.json(user);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);


router.get("/users", verifyToken, isAdmin, async (req, res) => {
  const users = await User.find();
  res.json(users);
});



router.delete("/user/:id", verifyToken, isAdmin, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});



router.get(
  "/orders",
  verifyToken,
  isAdmin,
  async (req, res) => {
    try {
      const orders = await Order.find()
        .populate("user", "username email")
        .sort({ createdAt: -1 });

      res.json(orders);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

router.put(
  "/orders/:id",
  verifyToken,
  isAdmin,
  async (req, res) => {
    try {
      const order = await Order.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status,
        },
        { new: true }
      );

      res.json(order);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

router.delete(
  "/products/:id",
  verifyToken,
  isAdmin,
  async (req, res) => {
    try {
      await Product.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message: "Product Deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

router.put(
  "/products/:id",
  verifyToken,
  isAdmin,
  async (req, res) => {
    try {
      const product =
        await Product.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );

      res.json(product);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);



export default router;