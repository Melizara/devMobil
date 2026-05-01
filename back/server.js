import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./api/routes/productRoute.js";
import { errorHandler } from "./api/middlewares/errorhandler.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Middleware d'erreur
app.use(errorHandler);

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on 5000");
});
