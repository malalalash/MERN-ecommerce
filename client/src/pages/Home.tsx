import salemd from "../assets/images/salemd.jpg";
import salesm from "../assets/images/salesm.jpg";
import { useLoaderData } from "react-router-dom";
import { FeaturedProducsType } from "../types";

const Home = () => {
  const featured = useLoaderData() as FeaturedProducsType;
  console.log(featured);
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
      <div className="w-full max-w-4xl mx-auto flex items-center justify-center flex-col">
        <h1 className="inline-block my-10 uppercase font-bold text-xl md:text-2xl lg:text-3xl">
          Featured Products
        </h1>
        <article className="w-full flex gap-5 flex-wrap justify-between">
          {featured.map((product) => {
            return <article>{product.name}</article>;
          })}
        </article>
      </div>
    </section>
  );
};

export default Home;
