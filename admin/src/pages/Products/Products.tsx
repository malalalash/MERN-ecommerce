import { useState, useEffect } from "react";
import { getAll } from "../../api/products/getAll";
import { ProductsType } from "../../types";
import Table from "./Table";

const Products = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);

  useEffect(() => {
    getAll("newest", 300).then((data) => {
      setProducts(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="flex flex-col gap-5 justify-center w-full overflow-auto">
      <Table products={products} />
    </div>
  );
};

export default Products;
