import { DataTypes } from "sequelize";
import sequelize from "../config/dataBase.js";
import Category from "./Category.js"; // Asegúrate de que la ruta sea correcta

const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Category, // Asegúrate de que coincida con el nombre del modelo
        key: "id",
      },
    },
  },
  {
    timestamps: true, // Para que use createdAt y updatedAt
  }
);

Product.belongsTo(Category, { foreignKey: "category_id" }); // Establece la relación

export default Product;
