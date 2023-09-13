import ProductCard from "../components/ProductCard/ProductCard";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { ProductsType } from "../types";
import { useState } from "react";
import { getAll } from "../api/products/getAll";
import { useQuery } from "@tanstack/react-query";
const Shop = () => {
  useScrollToTop();
  const [value, setValue] = useState(1000);
  const [sort, setSort] = useState("newest");

  const {
    data: products,
    isRefetching,
    status,
  } = useQuery<ProductsType[]>({
    queryKey: ["products", sort],
    queryFn: () => getAll(sort),
    keepPreviousData: true,
  });

  console.log(status);

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
            <div className="flex items-start md:min-w-[300px] flex-col justify-start w-full md:w-auto">
              <label htmlFor="range">Price</label>
              <input
                disabled={isRefetching}
                className="w-full accent-neutral-800"
                value={value}
                id="range"
                type="range"
                min={0}
                max={1000}
                onChange={(e) => setValue(parseInt(e.target.value))}
              />
              <span>$0 - ${value}</span>
            </div>
            <div className="flex gap-3 md:min-w-[300px] items-center w-full mt-5 md:mt-0 md:w-auto">
              <label htmlFor="sort" className="w-20">
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
          <article
            className={`w-full mb-10 mx-auto max-w-5xl justify-center lg:justify-between items-center flex gap-5 flex-wrap ${
              isRefetching ? "pointer-events-none opacity-50" : ""
            }`}
          >
            {products?.map((product) => {
              return (
                value > product.price && (
                  <ProductCard product={product} key={product._id} />
                )
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Shop;
