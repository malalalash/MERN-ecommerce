import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAll,
  getFeaturedProducts,
  getProduct,
} from "../controllers/product.js";

const router = Router();

router.post("/product", createProduct);
router.delete("/product/:id", deleteProduct);
router.get("/product/featured", getFeaturedProducts);
router.get("/product/:slug", getProduct);
router.get("/products", getAll);
export default router;
