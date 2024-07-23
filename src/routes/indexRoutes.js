import express from "express";
import categoryRoutes from "./categoryRoutes.js"; // Asegúrate de que esta ruta sea correcta
import productRoutes from "./productRoutes.js"; // Asegúrate de que esta ruta sea correcta

const router = express.Router();

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);

export default router;
