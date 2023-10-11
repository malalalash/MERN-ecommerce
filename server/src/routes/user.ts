import { createUser, loginUser } from "../controllers/user.js";
import { Router } from "express";

const router = Router();

router.post("/create", createUser);

router.post("/login", loginUser);

router.delete("/delete/:id", (req, res) => {
  res.json({ message: "Delete user" });
});

router.put("/update/:id", (req, res) => {
  res.json({ message: "Update user" });
});

export default router;
