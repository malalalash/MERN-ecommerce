import { Router } from "express";
import productRoutes from "./product.js";

const router = Router();

router.use("/", productRoutes);

export default router;
