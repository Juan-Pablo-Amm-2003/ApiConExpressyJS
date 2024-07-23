import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/dataBase.js";
import router from "./routes/indexRoutes.js"; // Asegúrate de que esta ruta sea correcta

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Usar las rutas
app.use("/api", router);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
sequelize.sync({ alter: true }) // Usa alter en lugar de force para mantener datos existentes
  .then(() => {
    console.log("Sincronización de la base de datos completada");
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });
startServer();
