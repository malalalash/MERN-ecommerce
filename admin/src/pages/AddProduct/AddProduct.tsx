import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../api/category/getCategories";
import { CategoryType } from "../../types";
import { FormDataType } from "../../types";
import { colors, sizes } from "../../data/data";
import { addProduct } from "../../api/products/addProduct";
import Select from "react-select";

const AddProduct = () => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [newProductData, setNewProductData] = useState<FormDataType>({
    name: "",
    price: 0,
    description: "",
    category: "",
    sizes: [],
    colors: [],
    isFeatured: false,
    quantity: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  const { data: category } = useQuery<CategoryType[] | undefined>({
    queryKey: ["category"],
    queryFn: () => getCategories(),
  });

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true);
      e.preventDefault();
      const formData = {
        ...newProductData,
        sizes: selectedSizes,
        colors: selectedColors,
      };
      const data = await addProduct(formData);
      if (data.status === 400) {
        setError(true);
        setLoading(false);
      }
      setNewProductData({
        name: "",
        price: 0,
        description: "",
        category: "",
        sizes: [],
        colors: [],
        isFeatured: false,
        quantity: 0,
      });
      setSelectedSizes([]);
      setSelectedColors([]);
      setLoading(false);
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setNewProductData({
      ...newProductData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2 className="font-bold text-xl">Basic information</h2>
      <span className="text-sm">Fill all information below</span>
      <div className="mt-1 text-sm sm:text-base">
        <form
          className="border relative border-black/10 bg-white p-5 grid grid-cols-1 lg:grid-cols-2"
          onSubmit={handleForm}
          id="form"
        >
          <div className="flex flex-col gap-3 lg:mr-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="form-title">
                Name
              </label>
              <input
                required
                className="form-value"
                type="text"
                name="name"
                id="name"
                placeholder="Product name"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price" className="form-title">
                Price
              </label>
              <input
                required
                className="form-value"
                type="number"
                name="price"
                id="price"
                placeholder="$9.99"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="category" className="form-title">
                Category
              </label>
              <select
                required
                name="category"
                id="category"
                className="form-value"
                onChange={handleChange}
              >
                <option value="" className="hidden">
                  Select...
                </option>
                {category?.map((category) => (
                  <option key={category._id} value={category._id}>
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
                required
                name="description"
                id="description"
                className="resize-none form-value"
                placeholder="Product description"
                rows={3}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:ml-6">
            <div className="flex flex-col">
              <label htmlFor="featured" className="form-title">
                Featured?
              </label>
              <select
                required
                name="featured"
                id="featured"
                className="form-value"
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
            <div>
              <fieldset className="flex flex-col gap-2">
                <legend className="form-title">Choose sizes</legend>
                <Select
                  required
                  isMulti={true}
                  options={sizes}
                  closeMenuOnSelect={false}
                  id="sizes"
                  name="sizes"
                  onChange={(e) =>
                    setSelectedSizes(e.map((item) => item.value))
                  }
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="flex flex-col gap-2">
                <legend className="form-title">Choose colors</legend>
                <Select
                  required
                  isMulti={true}
                  options={colors}
                  id="colors"
                  closeMenuOnSelect={false}
                  onChange={(e) =>
                    setSelectedColors(e.map((item) => item.value))
                  }
                />
              </fieldset>
            </div>
            <div className="flex flex-col">
              <label htmlFor="quantity" className="form-title">
                Quantity
              </label>
              <input
                required
                defaultValue={1}
                type="number"
                name="quantity"
                id="quantity"
                placeholder="1"
                className="form-value"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              disabled={loading}
              className="bg-blue-400 p-2 px-4 w-full mt-5 hover:text-white hover:bg-blue-500 text-gray-50 transition rounded lg:max-w-[170px]"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
