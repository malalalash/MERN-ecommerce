import salemd from "../assets/images/salemd.jpg";
import salesm from "../assets/images/salesm.jpg";
import { Link, useLoaderData } from "react-router-dom";
import { ProducsType } from "../types";
import ProductCard from "../components/ProductCard/ProductCard";

const Home = () => {
  const featured = useLoaderData() as ProducsType[];

  return (
    <section className="w-full min-h-screen">
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
            return <ProductCard product={product} key={product._id} />;
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
