import { Request, Response } from "express";
import mongoose from "mongoose";
import Product from "../models/product.js";
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description, category, imageUrl, sizes, colors } =
      req.body;
    const product = await Product.create({
      name,
      price,
      description,
      category,
      imageUrl,
      sizes,
      colors,
    });
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const getFeaturedProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({ isFeatured: true }).limit(6);
    if (products.length === 0) {
      return res.status(404).json({
        message: "Products not found",
      });
    }
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error,
    });
  }
};
