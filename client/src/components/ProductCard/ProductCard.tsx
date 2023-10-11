import { HeartIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { ProductsType } from "../../types";

const ProductCard = ({ product }: { product: ProductsType }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log(product);

  return (
    <article
      key={product._id}
      className="bg-white relative z-10 w-full max-w-xs rounded-lg shadow-lg overflow-hidden flex flex-col mx-5 sm:mx-0"
    >
      <Link
        to={`${pathnames.length > 0 ? `/${pathnames[0]}` : "shop"}/${
          product.slug
        }`}
      >
        <img
          src={product.images[0].url}
          alt={product.name}
          className="h-60 object-cover w-full"
        />
      </Link>
      {product.isFeatured && (
        <span className="absolute top-0 left-0 w-36 translate-y-6 -translate-x-8 -rotate-45 bg-black text-center text-sm text-white">
          Featured
        </span>
      )}
      <div className="ml-5 my-5">
        <Link
          to={`${pathnames.length > 0 ? `/${pathnames[0]}` : "shop"}/${
            product.slug
          }`}
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
          <span className="text-3xl font-bold">
            ${product.price.toFixed(2)}
          </span>
          {product.isFeatured && product.price < product.originalPrice && (
            <span className="line-through ml-2 text-sm">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <button className="absolute bottom-0 right-0 m-4 mr-5 z-50 hover:bg-gray-50 hover:text-black/80 p-1">
          <HeartIcon className="w-8 h-8" />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
