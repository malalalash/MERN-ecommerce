import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../models/user.js";

export const authorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  const secret = process.env.JWT_SECRET as string;
  if (token) {
    try {
      const { id } = jwt.verify(token, secret) as {
        id: string;
      };
      if (id) {
        const user = await User.findById(id);
        if (user) {
          const userData = {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            isAdmin: user.isAdmin,
            avatar: user.avatar,
          };
          req.user = userData;
          return next();
        }
      }
    } catch (error) {
      console.error(error);
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  } else {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};
