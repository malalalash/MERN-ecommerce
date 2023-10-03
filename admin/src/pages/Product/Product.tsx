import { useParams, useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../api/products/getProduct";
import { ProductsType, CategoryType } from "../../types";
import UpdateProductForm from "./UpdateProductForm";

const Product = () => {
  const { productId } = useParams();
  const category = useLoaderData() as CategoryType[];

  const { data: product } = useQuery<ProductsType>({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId!),
    enabled: !!productId,
  });

  return (
    <>
      {category && product && (
        <UpdateProductForm
          product={product}
          category={category}
          productId={productId}
        />
      )}
    </>
  );
};

export default Product;
