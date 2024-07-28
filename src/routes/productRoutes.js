import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById); // Remueve la validación de ID
router.post("/", createProduct); // Remueve la validación de producto
router.put("/:id", updateProduct); // Remueve la validación de ID y producto
router.delete("/:id", deleteProduct); // Remueve la validación de ID



export default router;
