import { Request, Response } from "express";
import Category from "../models/category.js";
import Product from "../models/product.js";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Category name is required",
      });
    }
    const newCategory = await Category.create({ name });
    return res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "Category id is required",
      });
    }
    const deleteCategory = await Category.findByIdAndDelete(id);
    const deleteProducts = await Product.deleteMany({ category: id });
    return res.status(200).json({
      message: "Category deleted",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!id || !name) {
      return res.status(400).json({
        message: "Category id and name are required",
      });
    }
    const updateCategory = await Category.findByIdAndUpdate(id, { name });
    return res.status(200).json({
      message: "Category updated",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error,
    });
  }
};
