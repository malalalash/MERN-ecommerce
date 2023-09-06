export type FeaturedProducsType = [
  {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    imageUrl: string;
    sizes: string[];
    colors: string[];
    slug: string;
    isFeatured: boolean;
    inStock: boolean;
    stockQuantity: number;
  }
];
