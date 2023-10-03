import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/products/getProduct";
import { ProductsType } from "../types";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { HeartIcon } from "@heroicons/react/24/outline";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const Product = () => {
  useScrollToTop();
  const { slug } = useParams();
  const { data: product, isLoading } = useQuery<ProductsType>({
    queryKey: ["product", slug],
    queryFn: () => getProduct(slug as string),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full">
      <article className="w-full max-w-5xl lg:max-w-6xl mx-auto">
        <div className="w-full px-5 mt-2">
          <Breadcrumbs />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
            <div className="w-full">
              <img
                src={product?.imageUrl}
                alt={product?.name}
                className="w-full max-h-96 lg:max-h-[450px] object-cover"
              />
            </div>
            <article className="bg-white h-full flex flex-col justify-between">
              <div className="border-b pb-2">
                <h1 className="text-3xl md:text-4xl mb-1 font-extrabold">
                  {product?.name}
                </h1>
                <span>{product?.category.name}</span>
              </div>
              <div>
                <span className="text-3xl font-extrabold">
                  ${product?.price?.toFixed(2)}
                </span>
                {product?.isFeatured &&
                  product.price !== product.originalPrice && (
                    <span className="line-through ml-2">
                      ${product.originalPrice?.toFixed(2)}
                    </span>
                  )}
              </div>

              <p className="tracking-wide leading-tighter font-mono break-words my-5 md:m-0">
                {product?.description}
              </p>
              <div className="gap-2 flex flex-col">
                <div className="flex items-center gap-5 flex-wrap">
                  <p className="lg:text-lg">Select color:</p>
                  {product?.colors.map((color, c) => {
                    return (
                      <button
                        value={color}
                        key={c}
                        className="p-2.5 lg:p-3 rounded-full outline outline-2 hover:outline-[3px]"
                        style={{ background: color }}
                      ></button>
                    );
                  })}
                </div>
                <label className="text-lg" htmlFor="size">
                  Select size:
                </label>
                <select
                  className="w-full border border-black p-2 cursor-pointer lg:text-lg"
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
                <div className="flex items-center gap-3">
                  <button className="text-lg w-full py-2 uppercase font-semibold text-white bg-black hover:bg-gray-200 hover:text-black border border-black transition focus:text-black focus:bg-gray-200">
                    Add to cart
                  </button>
                  <button className="border transition border-black p-2 hover:bg-gray-200 focus:bg-gray-200">
                    <HeartIcon className="h-7 w-7" />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Product;
