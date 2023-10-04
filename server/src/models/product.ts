import mongoose from "mongoose";
import { slugify } from "../utils/slugify.js";
const { ObjectId } = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    originalPrice: {
      type: Number,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: ObjectId,
      required: true,
      ref: "Category",
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        public_string: {
          type: String,
          required: true,
        },
      },
    ],
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
  product.slug = slugify(product.name);
  product.originalPrice = product.price;
  next();
});

export default mongoose.model("Product", ProductSchema);
