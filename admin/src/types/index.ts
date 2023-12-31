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
  images: [
    {
      _id: string;
      url: string;
      public_string: string;
    }
  ];
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
  inStock: boolean;
  image: string[];
};

export type CategoryModalProps = {
  categoryId: string;
  setCategoryId: React.Dispatch<React.SetStateAction<string>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: (id: string) => void;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UpdateProductProps = {
  product: ProductsType;
  category: CategoryType[];
  productId: string | undefined;
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

export type MenuContextType = {
  isMenuOpen: boolean;
  handleMenu: () => void;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
