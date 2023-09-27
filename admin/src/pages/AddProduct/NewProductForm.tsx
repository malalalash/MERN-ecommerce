import { colors, ColourType, sizes, SizeType } from "../../data/data";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { CategoryType, FormDataType } from "../../types";
import Select from "react-select";
import { addProduct } from "../../api/products/addProduct";
import NewCategory from "./NewCategory";

const NewProductForm = ({
  category,
}: {
  category: CategoryType[] | undefined;
}) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormDataType>();
  const onSubmit: SubmitHandler<FormDataType> = async (data) => {
    await addProduct(data);
    reset();
  };
  return (
    <>
      <div className="w-full items-center flex justify-between">
        <div>
          <h2 className="font-bold sm:text-xl">Basic information</h2>
          <span className="text-xs sm:text-sm">Fill all information below</span>
        </div>
        <div>
          <NewCategory />
        </div>
      </div>
      <div className="mt-1 text-sm sm:text-base">
        <form
          className="border relative border-black/10 bg-white p-5 grid grid-cols-1 lg:grid-cols-2"
          id="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-3 lg:mr-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="form-title">
                Name
              </label>
              <input
                className="form-value"
                type="text"
                id="name"
                placeholder="Product name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="form-error">This field is required</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="price" className="form-title">
                Price
              </label>
              <input
                className="form-value"
                type="number"
                id="price"
                placeholder="$9.99"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className="form-error">This field is required</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="category" className="form-title">
                Category
              </label>
              <select
                id="category"
                className="form-value"
                {...register("category", { required: true })}
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
              {errors.category && (
                <p className="form-error">Please select a category</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="form-title">
                Description
              </label>
              <textarea
                id="description"
                className="resize-none form-value"
                placeholder="Product description"
                rows={3}
                {...register("description", { required: true })}
              ></textarea>
              {errors.description && (
                <p className="form-error">This field is required</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:ml-6">
            <div className="flex flex-col">
              <label htmlFor="featured" className="form-title">
                Featured?
              </label>
              <select
                id="featured"
                className="form-value"
                {...register("isFeatured", { required: true })}
              >
                <option value="">Select...</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
              {errors.isFeatured && (
                <p className="form-error">This field is required</p>
              )}
            </div>
            <div>
              <fieldset className="flex flex-col gap-2">
                <legend className="form-title">Choose sizes</legend>
                <Controller
                  control={control}
                  name="sizes"
                  defaultValue={[]}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      isMulti
                      name="sizes"
                      options={sizes}
                      closeMenuOnSelect={false}
                      value={sizes.filter((el) => value.includes(el.value))}
                      onChange={(option: readonly SizeType[] | null) => {
                        option === null
                          ? onChange(null)
                          : onChange(option.map((el) => el.value));
                      }}
                    />
                  )}
                />
                {errors.sizes && (
                  <p className="form-error">Select at least one size</p>
                )}
              </fieldset>
            </div>
            <div>
              <fieldset className="flex flex-col gap-2">
                <legend className="form-title">Choose colors</legend>
                <Controller
                  control={control}
                  name="colors"
                  defaultValue={[]}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      isMulti
                      options={colors}
                      closeMenuOnSelect={false}
                      value={colors.filter((el) => value.includes(el.value))}
                      onChange={(option: readonly ColourType[] | null) => {
                        option === null
                          ? onChange(null)
                          : onChange(option.map((el) => el.value));
                      }}
                    />
                  )}
                />
                {errors.colors && (
                  <p className="form-error">Select at least one color</p>
                )}
              </fieldset>
            </div>
            <div className="flex flex-col">
              <label htmlFor="quantity" className="form-title">
                Quantity
              </label>
              <input
                defaultValue={1}
                type="number"
                id="quantity"
                placeholder="1"
                className="form-value"
                {...register("quantity", { required: true })}
              />
              {errors.quantity && (
                <p className="form-error">This field is required</p>
              )}
            </div>
          </div>
          <div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn-primary lg:max-w-[170px] mt-5"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewProductForm;
