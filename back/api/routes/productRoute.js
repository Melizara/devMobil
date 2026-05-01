import express from "express";
import { getProducts, getProduct, addProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:numproduit", getProduct);
router.post("/", addProduct);
router.put("/:numproduit", updateProduct);
router.delete("/:numproduit", deleteProduct);

export default router;
