import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
} from "../controllers/category.js";

const router = Router();

router.post("/create", createCategory);
router.delete("/delete/:id", deleteCategory);
router.get("/all", getAllCategories);

export default router;
