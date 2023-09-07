import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/products/getProduct";
import { ProducsType } from "../types";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { HeartIcon } from "@heroicons/react/24/outline";
const Product = () => {
  useScrollToTop();
  const { slug } = useParams();
  const { data: product, isLoading } = useQuery<ProducsType>({
    queryKey: ["product", slug],
    queryFn: () => getProduct(slug as string),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="w-full">
      <article className="w-full max-w-4xl lg:max-w-6xl mx-auto">
        <div className="mx-5 pt-5 flex flex-col items-center justify-center lg:flex-row gap-5 lg:items-start ">
          <div className="max-w-md w-full">
            <img
              src={product?.imageUrl}
              alt={product?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white shadow p-5 mb-5 max-w-md lg:max-w-xl w-full lg:p-0 lg:shadow-none">
            <div className="border-b pb-2">
              <h1 className="text-2xl font-extrabold mb-1">{product?.name}</h1>
              <span>{product?.category}</span>
            </div>
            <p className="my-3 tracking-wide leading-tighter font-mono">
              {product?.description}
            </p>
            <span className="text-2xl font-extrabold">
              ${product?.price?.toFixed(2)}
            </span>

            <div className="flex items-center gap-5 mt-2">
              <p className="lg:text-lg">Select color:</p>
              {product?.colors.map((color, c) => {
                return (
                  <button
                    value={color}
                    key={c}
                    className="p-2.5 lg:p-3 rounded-full hover:outline outline-2"
                    style={{ background: color }}
                  ></button>
                );
              })}
            </div>
            <div className="flex items-center gap-3 my-2">
              <label htmlFor="quantity" className="lg:text-lg">
                Quantity:
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                defaultValue={1}
                min={1}
                max={10}
                className="border border-black"
              />
            </div>
            <label className="text-lg" htmlFor="size">
              Select size:
            </label>
            <select
              className="w-full border border-black p-2 mt-2 cursor-pointer lg:text-lg"
              name="size"
              id="size"
            >
              {product?.sizes.map((size, s) => {
                return (
                  <option key={s} className="lg:text-lg">
                    {size}
                  </option>
                );
              })}
            </select>
            <div className="flex items-center gap-3 mt-2">
              <button className="text-lg w-full py-2 uppercase font-semibold text-white bg-black hover:bg-gray-200 hover:text-black border border-black transition focus:text-black focus:bg-gray-200">
                Add to cart
              </button>
              <button className="border transition border-black p-2 hover:bg-gray-200 focus:bg-gray-200">
                <HeartIcon className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Product;
