import { Link } from "react-router-dom";
import flower from "../../assets/jeff-lowery-9wF7Bm8s5jQ-unsplash (1).jpg";

const arrayOfProducts = [
  {
    id: 1,
    img: flower,
    productName: "Product 1",
    shortDescription: "High-quality widget",
    price: 19.99,
  },
  {
    id: 2,
    img: flower,
    productName: "Product 2",
    shortDescription: "Compact and efficient",
    price: 29.99,
  },
  {
    id: 3,
    img: flower,
    productName: "Product 3",
    shortDescription: "Durable and stylish",
    price: 14.99,
  },
  {
    id: 4,
    img: flower,
    productName: "Product 4",
    shortDescription: "Sleek design",
    price: 39.99,
  },
  {
    id: 5,
    img: flower,
    productName: "Product 5",
    shortDescription: "Versatile and reliable",
    price: 24.99,
  },
  {
    id: 6,
    img: flower,
    productName: "Product 6",
    shortDescription: "Eco-friendly",
    price: 49.99,
  },
];

const TopSelling = () => {
  return (
    <div className="w-full bg-white p-5 overflow-y-scroll max-h-[350px] border border-black/10">
      <h5 className="text-lg">Top selling products</h5>
      <div className="flex flex-col gap-5 mt-3">
        {arrayOfProducts.map((product) => (
          <div key={product.id} className="flex justify-between items-center">
            <div className="flex gap-3">
              <img
                className="w-14 h-14 md:w-16 md:h-16"
                src={product.img}
                alt={product.productName}
              />
              <div>
                <Link
                  className="text-blue-600 hover:text-blue-800 text-sm md:text-base"
                  to={product.productName}
                >
                  {product.productName}
                </Link>
                <p className="text-xs font-semibold truncate max-w-[100px] sm:max-w-[300px]">
                  {product.shortDescription}
                </p>
                <span className="text-sm md:text-base">${product.price}</span>
              </div>
            </div>
            <button className="border transition hover:bg-blue-800 hover:shadow hover:text-white border-blue-800 text-blue-700 text-xs md:text-sm p-1 px-2 rounded-full mr-5">
              View details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
