import { Link } from "react-router-dom";
import { ProductsType } from "../../types";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { deleteProduct } from "../../api/products/deleteProduct";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
const labels = [
  "#",
  "Product",
  "Price",
  "Category",
  "Featured",
  "Sizes",
  "Colors",
  "In stock",
  "Actions",
];

const Table = ({ products }: { products: ProductsType[] }) => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const handleDelete = async (id: string, public_string: string[]) => {
    setLoading(true);
    await deleteProduct(id, public_string);
    queryClient.invalidateQueries(["products"]);
    setLoading(false);
  };
  return (
    <>
      <div className="max-w-xs">
        <label htmlFor="search" className="sr-only"></label>
        <input
          placeholder="Search"
          type="text"
          name="search"
          id="search"
          className="p-2 min-w-[300px] border border-black/10 w-full sm:w-auto"
        />
      </div>
      <div className="bg-white w-full min-w-[800px]">
        <table className="w-full border border-black/10">
          <thead className="border text-center text-xs sm:text-sm">
            <tr>
              {labels.map((label, i) => (
                <th key={i} className="p-2 py-4 font-normal">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center text-xs sm:text-sm">
            {products?.map((product, i) => {
              return (
                <tr key={product?._id} className="hover:bg-slate-50">
                  <td className="prod-table">{i + 1}</td>
                  <td className="prod-table">{product?.name}</td>
                  <td className="prod-table">${product?.price}</td>
                  <td className="prod-table">{product?.category.name}</td>
                  <td className="prod-table">
                    {product?.isFeatured ? "Yes" : "No"}
                  </td>
                  <td className="prod-table flex items-center justify-center gap-1">
                    {product?.sizes.map((size, i) => (
                      <span key={i}>{size}</span>
                    ))}
                  </td>
                  <td className="prod-table space-x-1">
                    {product?.colors.map((color, i) => (
                      <span
                        key={i}
                        style={{ backgroundColor: color }}
                        className="sm:p-2 border border-black p-1 inline-block rounded-full"
                      ></span>
                    ))}
                  </td>
                  <td className="prod-table">
                    {product?.inStock ? "Yes" : "No"}
                  </td>
                  <td className="prod-table">
                    <div className="flex items-center justify-center gap-2">
                      <Link to={"/products/" + product._id}>
                        <PencilSquareIcon className="inline-block text-green-700 hover:text-green-800 w-4 h-4 sm:w-5 sm:h-5" />
                      </Link>
                      <button
                        disabled={loading}
                        onClick={() =>
                          handleDelete(
                            product._id,
                            product.images.map((image) => image.public_string)
                          )
                        }
                      >
                        {loading ? (
                          <Spinner />
                        ) : (
                          <TrashIcon className="inline-block text-red-600 hover:text-red-800 w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
