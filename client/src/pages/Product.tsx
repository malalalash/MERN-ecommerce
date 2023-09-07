import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/products/getProduct";
import { ProducsType } from "../types";
const Product = () => {
  const { slug } = useParams();
  const { data: product, isLoading } = useQuery<ProducsType>(
    ["product", slug],
    () => getProduct(slug!),
    {
      enabled: !!slug,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="w-full">
      <article className="w-full max-w-4xl lg:max-w-6xl mx-auto">
        <div className="mx-5 pt-5 flex flex-col items-center justify-center lg:flex-row gap-5 lg:items-start">
          <div className="max-w-md w-full">
            <img
              src={product?.imageUrl}
              alt={product?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white  max-w-md lg:max-w-xl w-full  rounded-sm">
            <div className="border-b">
              <div className="mb-2">
                <h1 className="text-2xl font-extrabold mb-1">
                  {product?.name}
                </h1>
                <span>{product?.category}</span>
              </div>
            </div>
            <p className="my-3 tracking-wide leading-tighter font-mono">
              {product?.description}asdasdasdasdasdasd{product?.description}
              asdasdasdasdasdasd{product?.description}asdasdasdasdasdasd
              {product?.description}asdasdasdasdasdasd{product?.description}
              asdasdasdasdasdasd
            </p>
            <span className="text-2xl font-extrabold">
              ${product?.price?.toFixed(2)}
            </span>
            <div className="flex items-center gap-3 mt-2">
              <label className="text-lg" htmlFor="size">Select size</label>
              <select
                className="border border-black cursor-pointer text-lg"
                name="size"
                id="size"
              >
                {product?.sizes.map((size, s) => {
                  return <option key={s} className="text-lg">{size}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Product;
