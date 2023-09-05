import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getFeaturedProducts,
} from "../controllers/product.js";

const router = Router();

router.post("/product", createProduct);
router.delete("/product/:id", deleteProduct);
router.get("/product/featured", getFeaturedProducts);
export default router;
