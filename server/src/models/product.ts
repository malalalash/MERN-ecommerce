import mongoose from "mongoose";
import { slugify } from "../utils/slugify.js";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    sizes: {
      type: [String],
      required: true,
    },
    colors: {
      type: [String],
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    stockQuantity: {
      type: Number,
    },
  },
  { timestamps: true }
);

ProductSchema.pre("save", function (next) {
  const product = this;
  product.name = product.name.trim();
  product.slug = slugify(product.name);
  next();
});

export default mongoose.model("Product", ProductSchema);
