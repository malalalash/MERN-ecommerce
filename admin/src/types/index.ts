export type ProductsType = {
  _id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  category: {
    _id: string;
    name: string;
  };
  imageUrl: string;
  sizes: string[];
  colors: string[];
  slug: string;
  isFeatured: boolean;
  inStock: boolean;
  stockQuantity: number;
  createdAt: string;
  updatedAt: string;
};

export type CategoryType = {
  _id: string;
  name: string;
  createdAt: string;
};

export type FormDataType = {
  name: string;
  price: number;
  description: string;
  category: string;
  sizes: string[];
  colors: string[];
  isFeatured: boolean;
  quantity: number;
};
