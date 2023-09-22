import { ProductsType } from "../../types";

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
  return (
    <>
      <div>
        <label htmlFor="search" className="sr-only"></label>
        <input
          placeholder="Search"
          type="text"
          name="search"
          id="search"
          className="p-2 min-w-[300px] border border-black/10 w-full sm:w-auto"
        />
      </div>
      <div className="bg-white w-full overflow-x-auto block min-w-[700px] md:min-w-[900px]">
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
                <tr key={product._id} className="hover:bg-slate-50">
                  <td className="prod-table">{i + 1}</td>
                  <td className="prod-table">{product.name}</td>
                  <td className="prod-table">${product.price}</td>
                  <td className="prod-table">{product.category.name}</td>
                  <td className="prod-table">
                    {product.isFeatured ? "Yes" : "No"}
                  </td>
                  <td className="prod-table flex items-center justify-center gap-1">
                    {product.sizes.map((size, i) => (
                      <span key={i}>{size}</span>
                    ))}
                  </td>
                  <td className="prod-table space-x-1">
                    {product.colors.map((color, i) => (
                      <span
                        key={i}
                        style={{ backgroundColor: color }}
                        className="sm:p-2 p-1 inline-block rounded-full"
                      ></span>
                    ))}
                  </td>
                  <td className="prod-table">
                    {product.inStock ? "Yes" : "No"}
                  </td>
                  <td className="prod-table">
                    <div className="flex items-center justify-center gap-2">
                      <span>Edit</span>
                      <span>Delete</span>
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
