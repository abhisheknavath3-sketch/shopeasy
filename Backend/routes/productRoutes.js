import express from "express";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,

} from "../../Backend/controllers/productController.js";

const router = express.Router();

router.get("/getProducts", getProducts);
router.post("/addProduct", addProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);


export default router;
