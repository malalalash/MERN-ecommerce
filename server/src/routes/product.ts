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
import { authorize } from "../middleware/authorization.js";
const router = Router();

router.post("/product", authorize, createProduct);
router.delete("/product/:id", authorize, deleteProduct);
router.get("/product/featured", getFeaturedProducts);
router.get("/product/:identifier", getProduct);
router.get("/products", getAll);
router.put("/product/:id", authorize, updateProduct);
router.delete("/product/image/:id", authorize, deleteImageFromProduct);
export default router;
