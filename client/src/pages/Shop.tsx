import ProductCard from "../components/ProductCard/ProductCard";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { ProductsType } from "../types";
import { useState } from "react";
import { getAll } from "../api/products/getAll";
import { useQuery } from "@tanstack/react-query";
import RangeInput from "../components/RangeInput/RangeInput";

const Shop = () => {
  useScrollToTop();
  const [sort, setSort] = useState("newest");
  const [price, setPrice] = useState(300);

  const { data: products, isRefetching } = useQuery<ProductsType[]>({
    queryKey: ["products", sort, price],
    queryFn: () => getAll(sort, price),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);
  };

  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="inline-block my-10 uppercase font-bold text-xl md:text-2xl lg:text-3xl">
          All Products
        </h1>
        <div className="w-full">
          <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row px-5 lg:px-0 items-center justify-between mb-10">
            <RangeInput isRefetching={isRefetching} setPrice={setPrice} />
            <div className="flex gap-1 md:min-w-[300px] items-center w-full mt-5 md:mt-0 md:w-auto">
              <label htmlFor="sort" className="w-20 font-semibold">
                Sort by
              </label>
              <select
                disabled={isRefetching}
                name="sort"
                id="sort"
                className="border p-2 border-gray-400 w-full"
                onChange={handleChange}
              >
                <option value="newest">Newest</option>
                <option value="featured">Featured</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
          </div>
          {products!.length > 0 ? (
            <article
              className={`w-full mb-10 mx-auto max-w-5xl justify-center lg:justify-between items-center flex gap-5 flex-wrap ${
                isRefetching ? "pointer-events-none opacity-50" : ""
              }`}
            >
              {products?.map((product) => {
                return <ProductCard product={product} key={product._id} />;
              })}
            </article>
          ) : (
            <h2 className="text-2xl mt-20 text-center">
              Couldn't find any products
            </h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default Shop;
