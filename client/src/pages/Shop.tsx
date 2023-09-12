import ProductCard from "../components/ProductCard/ProductCard";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useLoaderData } from "react-router-dom";
import { ProducsType } from "../types";
import { useState } from "react";
const Shop = () => {
  useScrollToTop();
  const all = useLoaderData() as ProducsType[];
  const [value, setValue] = useState(1000);
  const [sort, setSort] = useState("newest");

  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="inline-block my-10 uppercase font-bold text-xl md:text-2xl lg:text-3xl">
          All Products
        </h1>
        {all.length > 0 ? (
          <div className="w-full">
            <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row px-5 lg:px-0 items-center justify-between mb-10">
              <div className="flex items-start md:min-w-[300px] flex-col justify-start w-full md:w-auto">
                <label htmlFor="range">Price</label>
                <input
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
                  name="sort"
                  id="sort"
                  className="border p-2 border-gray-400 w-full"
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="newest">Newest</option>
                  <option value="featured">Featured</option>
                  <option value="asc">Price: Low to High</option>
                  <option value="desc">Price: High to Low</option>
                </select>
              </div>
            </div>
            <article className="w-full mb-10 mx-auto max-w-5xl justify-center lg:justify-between items-center flex gap-5 flex-wrap">
              {all?.map((product) => {
                return (
                  value > product.price && (
                    <ProductCard product={product} key={product._id} />
                  )
                );
              })}
            </article>
          </div>
        ) : (
          <h2>Sorry, Couldn't find any products</h2>
        )}
      </div>
    </section>
  );
};

export default Shop;
