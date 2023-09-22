import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../api/category/getCategories";
import { CategoryType } from "../../types";
const AddProduct = () => {
  const { data: category } = useQuery<CategoryType[] | undefined>({
    queryKey: ["category"],
    queryFn: () => getCategories(),
  });

  console.log(category);

  return (
    <div>
      <h2>Add new product</h2>
      <div className="bg-white">
        <form className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="productName">Name</label>
            <input
              className="bg-black/10"
              type="text"
              name="productName"
              id="productName"
              placeholder="Product name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="productPrice">Price</label>
            <input
              className="bg-black/10"
              type="number"
              name="productPrice"
              id="productPrice"
              placeholder="$9.99"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="productDesc">Description</label>
            <textarea
              name="productDesc"
              id="productDesc"
              className="resize-none bg-black/10"
              placeholder="Product description"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="productCategory">Category</label>
            <select name="productCategory" id="productCategory">
              {category?.map((category) => (
                <option key={category._id}>{category.name}</option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
