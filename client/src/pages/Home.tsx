import salemd from "../assets/images/salemd.jpg";
import salesm from "../assets/images/salesm.jpg";
import { useLoaderData } from "react-router-dom";
import { FeaturedProducsType } from "../types";

const Home = () => {
  const featured = useLoaderData() as FeaturedProducsType;
  console.log(featured);
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
        <article className="w-full max-w-5xl justify-between items-center flex gap-5 flex-wrap">
          {featured.map((product) => {
            return (
              <article
                key={product._id}
                className="bg-white max-w-[240px] mx-5 sm:mx-0 flex flex-col items-start justify-start gap-3 p-5 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="w-full">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3>{product.name}</h3>
                <p className="truncate relative">{product.description}</p>
                <span>{product.price}</span>
              </article>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Home;
