import { Sequelize } from "sequelize";
import sequelize from "../config/dataBase.js";
import Category from "./category.js";
import Product from "./product.js";

// Definir relaciones entre modelos
Product.belongsTo(Category, { foreignKey: "category_id" });
Category.hasMany(Product, { foreignKey: "category_id" });

// Exportar los modelos y la instancia de Sequelize
const db = {
  sequelize,
  Sequelize,
  Category,
  Product,
};

export default db;
