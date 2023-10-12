import { Router } from "express";
import { authorize } from "../middleware/authorization.js";
import { createUser, loginUser, logoutUser } from "../controllers/user.js";

const router = Router();

router.post("/create", createUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

router.post("/me", authorize, (req, res) => {
  return res.json(req.user);
});

router.delete("/delete/:id", (req, res) => {
  res.json({ message: "Delete user" });
});

router.put("/update/:id", (req, res) => {
  res.json({ message: "Update user" });
});

export default router;
