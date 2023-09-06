import salemd from "../assets/images/salemd.jpg";
import salesm from "../assets/images/salesm.jpg";
import { Link, useLoaderData } from "react-router-dom";
import { FeaturedProducsType } from "../types";
import { HeartIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const featured = useLoaderData() as FeaturedProducsType;

  return (
    <section className="w-full min-h-screen bg-gray-50">
      <div className="w-full h-64 sm:h-80 lg:h-96 bg-black/50">
        <picture>
          <source srcSet={salesm} media="(max-width: 768px)" />
          <source srcSet={salemd} />
          <img
            src={salemd}
            alt="sale image"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="inline-block my-10 uppercase font-bold text-xl md:text-2xl lg:text-3xl">
          Featured Products
        </h2>
        <article className="w-full mx-auto max-w-5xl justify-center lg:justify-between items-center flex gap-5 flex-wrap">
          {featured?.map((product) => {
            return (
              <article
                key={product._id}
                className="bg-white relative z-10 w-full max-w-xs rounded-lg shadow-lg overflow-hidden flex flex-col mx-5 sm:mx-0"
              >
                <Link to={`/product/${product.slug}`}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-60 object-cover w-full"
                  />
                </Link>
                <span className="absolute top-0 left-0 w-36 translate-y-6 -translate-x-8 -rotate-45 bg-black text-center text-sm text-white">
                  Featured
                </span>
                <div className="ml-5 my-5">
                  <Link
                    to={`/product/${product.slug}`}
                    className="font-semibold text-xl"
                  >
                    {product.name}
                  </Link>
                  <div className="gap-5 flex">
                    {product.sizes.map((size, s) => {
                      return <span key={s}>{size}</span>;
                    })}
                  </div>
                  <div>
                    <span className="text-3xl font-bold">${product.price}</span>
                    <span className="line-through ml-2 text-sm">
                      ${(product.price * 0.8).toFixed(2)}
                    </span>
                  </div>
                  <button className="absolute bottom-0 right-0 m-4 mr-5 z-50 hover:bg-gray-50 hover:text-black/80 p-1">
                    <HeartIcon className="w-8 h-8" />
                  </button>
                </div>
              </article>
            );
          })}
        </article>
        <Link
          to={"/shop"}
          className="inline-block my-10 uppercase font-bold text-xl md:text-2xl lg:text-3xl text-center"
        >
          Shop All &#10148;
        </Link>
      </div>
    </section>
  );
};

export default Home;
