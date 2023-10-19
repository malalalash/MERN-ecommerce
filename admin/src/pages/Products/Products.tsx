import { getAll } from "../../api/products/getAll";
import { useQuery } from "@tanstack/react-query";
import Table from "./Table";

const Products = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAll("newest", 0),
  });

  return (
    <div className="flex flex-col gap-5 justify-center w-full overflow-auto">
      {products && <Table products={products} />}
    </div>
  );
};

export default Products;
