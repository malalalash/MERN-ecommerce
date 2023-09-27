import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../api/category/getCategories";
import { CategoryType } from "../../types";
import NewProductForm from "./NewProductForm";

const AddProduct = () => {
  const { data: category } = useQuery<CategoryType[] | undefined>({
    queryKey: ["category"],
    queryFn: () => getCategories(),
  });

  return (
    <NewProductForm category={category} />
  );
};

export default AddProduct;
