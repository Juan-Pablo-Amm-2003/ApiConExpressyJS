import express from "express";
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
import { validateCategory, validateID } from "../middleware/validators.js";

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", validateID, getCategoryById); // Esta ruta requiere un ID
router.post("/", validateCategory, createCategory);
router.put("/:id", validateID, validateCategory, updateCategory); // Esta ruta requiere un ID
router.delete("/:id", validateID, deleteCategory); // Esta ruta requiere un ID

export default router;
