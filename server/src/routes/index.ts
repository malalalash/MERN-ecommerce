import { Router } from "express";
import productRoutes from "./product.js";
import categoryRoutes from "./category.js";
import userRoutes from "./user.js";

const router = Router();

router.use("/", productRoutes);
router.use("/category", categoryRoutes);
router.use("/user", userRoutes);

export default router;
