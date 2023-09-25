import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../api/category/getCategories";
import { CategoryType } from "../../types";
import Select from "react-select";
import { colors, sizes } from "../../data/data";
import { useState } from "react";

const AddProduct = () => {
  const [formDatas, setFormDatas] = useState({});
  const [sizesValues, setSizesValues] = useState([]);

  const { data: category } = useQuery<CategoryType[] | undefined>({
    queryKey: ["category"],
    queryFn: () => getCategories(),
  });

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData();

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    formData.append("sizes", JSON.stringify(sizesValues));

    setFormDatas(formDataObject);
    console.log(formDatas);
  };

  const handleSizeSelect = (e) => {
    setSizesValues(e.map((size) => size.value));
    console.log(sizesValues);
  };

  return (
    <div>
      <h2 className="font-bold text-xl">Basic information</h2>
      <span className="text-sm">Fill all information below</span>
      <div className="mt-1 text-sm sm:text-base">
        <form
          className="border border-black/10 bg-white p-5 grid grid-cols-1 lg:grid-cols-2"
          onSubmit={handleForm}
          id="form"
        >
          <div className="flex flex-col gap-3 lg:mr-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="form-title">
                Name
              </label>
              <input
                className="form-value"
                type="text"
                name="name"
                id="name"
                placeholder="Product name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price" className="form-title">
                Price
              </label>
              <input
                className="form-value"
                type="number"
                name="price"
                id="price"
                placeholder="$9.99"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="category" className="form-title">
                Category
              </label>
              <select name="category" id="category" className="form-value">
                {category?.map((category) => (
                  <option key={category._id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="form-title">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="resize-none form-value"
                placeholder="Product description"
                rows={3}
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:ml-6">
            <div className="flex flex-col">
              <label htmlFor="featured" className="form-title">
                Featured?
              </label>
              <select name="featured" id="featured" className="form-value">
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
            <div>
              <fieldset className="flex flex-col gap-2">
                <legend className="form-title">Choose sizes</legend>
                <Select
                  isMulti={true}
                  options={sizes}
                  closeMenuOnSelect={false}
                  onChange={handleSizeSelect}
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="flex flex-col gap-2">
                <legend className="form-title">Choose colors</legend>
                <Select
                  isMulti={true}
                  name="colors"
                  options={colors}
                  id="colors"
                  closeMenuOnSelect={false}
                />
              </fieldset>
            </div>
            <div className="flex flex-col">
              <label htmlFor="quantity" className="form-title">
                Quantity
              </label>
              <input
                defaultValue={1}
                type="number"
                name="quantity"
                id="quantity"
                placeholder="1"
                className="form-value"
              />
            </div>
          </div>
          <div>
            <button className="bg-blue-400 p-2 px-4 w-full mt-5 hover:text-white hover:bg-blue-500 text-gray-50 transition rounded lg:max-w-[170px]">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
