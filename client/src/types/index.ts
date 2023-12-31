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
  quantity: number;
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
  changeQuantity: (quantity: number, id: string) => void;
}

export type CartItemProps = {
  data: CartItem;
};

export type UserFormType = {
  email: string;
  password: string;
};

export type UserType = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  avatar: string;
};

export type UserContextType = {
  user: UserType;
  login: (data: UserFormType) => Promise<void>;
  logout: () => Promise<void>;
  authorize: () => Promise<void>;
};
