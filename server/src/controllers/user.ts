import { Request, Response } from "express";
import bcrypt from "bcrypt";
import validator from "validator";
import User from "../models/user.js";
import generateToken from "../utils/generateToken.js";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;

    if (!username || !email || !password || !firstName || !lastName) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (!validator.default.isEmail(email)) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    if (!validator.default.isAlphanumeric(username)) {
      return res.status(400).json({
        message: "Username must be alphanumeric",
      });
    }

    if (!validator.default.isAlphanumeric(firstName)) {
      return res.status(400).json({
        message: "First name must be alphanumeric",
      });
    }

    if (!validator.default.isAlphanumeric(lastName)) {
      return res.status(400).json({
        message: "Last name must be alphanumeric",
      });
    }

    if (!validator.default.isStrongPassword(password)) {
      return res.status(400).json({
        message: "Password is not strong enough",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    const payload = {
      id: newUser._id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      isAdmin: newUser.isAdmin,
      avatar: newUser.avatar,
    };

    generateToken(res, payload);
    return res.status(201).json({
      user: payload,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const isUser = await User.findOne({ email });

    if (!isUser) {
      return res.status(404).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, isUser.password);

    if (isMatch) {
      const payload = {
        id: isUser._id,
        email: isUser.email,
        firstName: isUser.firstName,
        lastName: isUser.lastName,
        isAdmin: isUser.isAdmin,
        avatar: isUser.avatar,
      };
      generateToken(res, payload);
      return res.status(200).json({
        user: payload,
      });
    } else {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};
