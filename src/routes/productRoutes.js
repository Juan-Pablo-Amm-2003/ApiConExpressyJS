import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import { validateProduct, validateID } from "../middleware/validators.js";



const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", validateID ,getProductById); // Remueve la validación de ID
router.post("/", validateProduct,createProduct); // Remueve la validación de producto
router.put("/:id", validateID, validateProduct,updateProduct); // Remueve la validación de ID y producto
router.delete("/:id", validateID,deleteProduct); // Remueve la validación de ID



export default router;
