import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from "../controllers/category.js";

const router = Router();

router.post("/create", createCategory);
router.delete("/delete/:id", deleteCategory);
router.get("/all", getAllCategories);
router.put("/update/:id", updateCategory);

export default router;
