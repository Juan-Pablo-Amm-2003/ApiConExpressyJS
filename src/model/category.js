import { DataTypes, Model } from "sequelize";
import sequelize from "../config/dataBase.js";

class Category extends Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true, // Permitir valores nulos inicialmente
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Category",
    tableName: "categories",
    timestamps: true, // Usa los campos created_at y updated_at
    createdAt: "created_at", // Mapea el campo created_at
    updatedAt: "updated_at", // Mapea el campo updated_at
  }
);

(async () => {
  try {
    // Sincroniza el modelo con la base de datos
    await sequelize.sync({ alter: true });

    // Actualiza las filas existentes para que tengan valores válidos
    await Category.update(
      { created_at: sequelize.fn("NOW"), updated_at: sequelize.fn("NOW") },
      { where: { created_at: null } }
    );

    // Modifica la columna para que no permita valores nulos
    await sequelize.query(`
      ALTER TABLE categories 
      MODIFY created_at DATETIME NOT NULL,
      MODIFY updated_at DATETIME NOT NULL
    `);

    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing the database:", error);
  }
})();

export default Category;
