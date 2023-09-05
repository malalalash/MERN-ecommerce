import salemd from "../assets/images/salemd.jpg";
import salesm from "../assets/images/salesm.jpg";

const Home = () => {
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
    </section>
  );
};

export default Home;
