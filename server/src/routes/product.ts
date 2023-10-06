import { Router } from "express";
import {
  createProduct,
  deleteImageFromProduct,
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
router.delete("/product/image/:id", deleteImageFromProduct);
export default router;
