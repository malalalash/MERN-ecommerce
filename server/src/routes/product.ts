import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAll,
  getFeaturedProducts,
  getProduct,
  updateProduct,
} from "../controllers/product.js";

const router = Router();

router.post("/product", createProduct);
router.delete("/product/:id", deleteProduct);
router.get("/product/featured", getFeaturedProducts);
router.get("/product/:identifier", getProduct);
router.get("/products", getAll);
router.put("/product/:id", updateProduct);
export default router;
