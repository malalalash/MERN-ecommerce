import { Request, Response } from "express";
import Product from "../models/product.js";
export const createProduct = async (req: Request, res: Response) => {
  try {
    const {
      name,
      price,
      description,
      category,
      isFeatured,
      imageUrl,
      sizes,
      colors,
    } = req.body;

    if (
      !name ||
      !price ||
      !description ||
      !category ||
      sizes.length === 0 ||
      colors.length === 0
    ) {
      return res.status(400).json({
        message: "All fields are required",
        status: 400,
      });
    }
    const product = await Product.create({
      name,
      price,
      description,
      category,
      isFeatured,
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
    const products = await Product.find({ isFeatured: true })
      .limit(20)
      .populate("category", "name")
      .exec();
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

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { slug, id } = req.params;
    const product = await Product.findOne({ slug, id })
      .populate("category", "name")
      .exec();
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) - 1 || 0;
    const limit = Number(req.query.limit) || 20;
    const price = Number(req.query.price) || 300;
    const search = req.query.search || "";
    let sort = req.query.sort || "newest";
    let filter: boolean | undefined = undefined;
    let sortBy = {};

    if (sort === "newest") {
      sortBy = { createdAt: -1 };
    } else if (sort === "asc") {
      sortBy = { price: 1 };
    } else if (sort === "desc") {
      sortBy = { price: -1 };
    } else {
      filter = true;
    }

    const query = filter
      ? {
          name: { $regex: search, $options: "i" },
          isFeatured: filter,
        }
      : { name: { $regex: search, $options: "i" } };

    const products = await Product.find(query)
      .where("price")
      .lte(price)
      .populate("category", "name")
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);
    if (!products) {
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
