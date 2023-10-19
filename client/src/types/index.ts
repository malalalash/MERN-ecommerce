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
  images: {
    url: string;
    public_string: string;
    _id: string;
  }[];
  sizes: string[];
  colors: string[];
  slug: string;
  isFeatured: boolean;
  inStock: boolean;
  stockQuantity: number;
  createdAt: string;
  updatedAt: string;
};

export interface RangeInputProps {
  isRefetching: boolean;
  setPrice: (price: number) => void;
}

type CartItem = {
  name: string;
  _id: string;
  price: number;
  size: string;
  color: string;
  stockQuantity: number;
  category: {
    _id: string;
    name: string;
  };
  images: {
    url: string;
    public_string: string;
    _id: string;
  }[];
};

export interface CartStoreI {
  items: CartItem[];
  addItem: (data: CartItem) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export type CartItemProps = {
  data: CartItem;
};
