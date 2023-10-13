import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from "../controllers/category.js";
import { authorize } from "../middleware/authorization.js";

const router = Router();

router.post("/create", authorize, createCategory);
router.delete("/delete/:id", authorize, deleteCategory);
router.get("/all", getAllCategories);
router.put("/update/:id", authorize, updateCategory);

export default router;
