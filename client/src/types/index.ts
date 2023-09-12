export type ProducsType = {
  _id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  category: string;
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
