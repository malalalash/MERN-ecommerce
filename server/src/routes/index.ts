import { Router } from "express";
import productRoutes from "./product.js";
import categoryRoutes from "./category.js";

const router = Router();

router.use("/", productRoutes);
router.use("/category", categoryRoutes);

export default router;
