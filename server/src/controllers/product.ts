import { Request, Response } from "express";
import Product from "../models/product.js";
import mongoose from "mongoose";
import { slugify } from "../utils/slugify.js";
import {
  uploadImages,
  resizeImage,
  deleteImages,
} from "../utils/cloudinary.js";
export const createProduct = async (req: Request, res: Response) => {
  type ImageType = {
    url: string;
    public_string: string;
  };

  try {
    const {
      name,
      price,
      description,
      category,
      isFeatured,
      imagesUrls,
      sizes,
      colors,
      quantity,
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
    let imageUrl: ImageType[] = [];
    if (imagesUrls) {
      const response = await uploadImages(imagesUrls);
      const resizedImages = await Promise.all(
        response!.map((image) => resizeImage(image.public_id, 750, 750))
      );

      const publicIds = response!.map((image) => image.public_id);

      imageUrl = resizedImages.map((url, i) => {
        return {
          url,
          public_string: publicIds[i],
        };
      });
    }

    const product = await Product.create({
      name,
      price,
      description,
      category,
      isFeatured,
      images: imageUrl,
      sizes,
      colors,
      stockQuantity: quantity,
    });
    return res.status(201).json(product);
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
    const { public_string }: { public_string: string[] } = req.body;
    if (public_string) {
      await deleteImages(public_string);
    }
    await Product.findByIdAndDelete(id);
    return res.status(200).json({ message: "Product deleted" });
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
    const { identifier } = req.params;
    let query;

    if (mongoose.Types.ObjectId.isValid(identifier)) {
      query = { _id: identifier };
    } else {
      query = { slug: identifier };
    }

    const product = await Product.findOne(query)
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

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      name,
      price,
      description,
      category,
      isFeatured,
      images,
      sizes,
      colors,
      inStock,
    } = req.body;

    if (
      !name ||
      !price ||
      !description ||
      !category ||
      !isFeatured ||
      !inStock ||
      sizes.length === 0 ||
      colors.length === 0
    ) {
      return res.status(400).json({
        message: "All fields are required",
        status: 400,
      });
    }
    const updatedProduct = await Product.findByIdAndUpdate(id, {
      name,
      price,
      description,
      category,
      isFeatured,
      images,
      sizes,
      colors,
      inStock,
      slug: slugify(name),
    });
    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const deleteImageFromProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { public_string, image_id } = req.body;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    if (public_string) {
      const arr: string[] = [];
      arr.push(public_string);
      await deleteImages(arr);
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, {
      $pull: {
        images: {
          _id: image_id,
        },
      },
    });

    await product?.save();
    return res.status(200).json({
      updatedProduct,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error,
    });
  }
};
