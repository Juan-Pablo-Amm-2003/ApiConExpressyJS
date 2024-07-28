import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/dataBase.js";
import router from "./routes/indexRoutes.js";
import errorHandler from "./middleware/error.js";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware configuration
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);
app.use(express.json());
app.use(morgan("combined"));
app.use("/api", router);
app.use(errorHandler);

const startServer = async () => {
  try {
    // Verify database connection
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    // Synchronize the database
    await sequelize.sync({ alter: true });
    console.log("Database synchronized successfully.");

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Unable to start the server:", error);
  }
};

// Log database details
console.log(`Database Name: ${process.env.DB_NAME || "Not Defined"}`);
console.log(`Database User: ${process.env.DB_USER || "Not Defined"}`);

startServer();
