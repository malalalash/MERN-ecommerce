import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { sizes, SizeType, colors, ColourType } from "../../data/data";
import { FormDataType } from "../../types";
import { UpdateProductProps } from "../../types";
import Select from "react-select";
import { updateProduct } from "../../api/products/updateProduct";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteImage } from "../../api/products/deleteImage";

const UpdateProductForm: React.FC<UpdateProductProps> = ({
  product,
  category,
  productId,
}) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormDataType>();

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormDataType> = async (data) => {
    await updateProduct(data, productId!);
    queryClient.invalidateQueries(["product", productId]);
    reset();
    navigate("/products");
  };

  const handleDeleteImage = async (
    id: string,
    image_id: string,
    public_string: string
  ) => {
    await deleteImage(id, image_id, public_string);
    queryClient.invalidateQueries(["product", productId]);
  };

  return (
    <>
      <h2 className="font-bold sm:text-xl mb-2">Edit Product</h2>
      <form
        className="border relative border-black/10 bg-white p-5 grid grid-cols-1 md:grid-cols-2 md:gap-5"
        id="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="name" className="form-title">
              Name
            </label>
            <input
              defaultValue={product?.name}
              className="form-value"
              type="text"
              id="name"
              placeholder="Product name"
              {...register("name")}
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
              defaultValue={product?.price}
              className="form-value"
              type="number"
              id="price"
              placeholder="$9.99"
              step={"0.01"}
              {...register("price")}
              aria-invalid={errors.price ? "true" : "false"}
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
              defaultValue={product?.category._id}
              id="category"
              className="form-value"
              {...register("category")}
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
              defaultValue={product?.description}
              id="description"
              className="resize-none form-value"
              placeholder="Product description"
              rows={3}
              {...register("description")}
            ></textarea>
            {errors.description && (
              <p className="form-error">This field is required</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="featured" className="form-title">
              Featured?
            </label>
            <select
              defaultValue={product?.isFeatured === true ? "true" : "false"}
              id="featured"
              className="form-value"
              {...register("isFeatured")}
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
                defaultValue={product.sizes.map((size) => size)}
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
                defaultValue={product.colors.map((color) => color)}
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
            <label htmlFor="stock" className="form-title">
              In stock?
            </label>
            <select
              id="stock"
              defaultValue={product.inStock === true ? "true" : "false"}
              className="form-value"
              {...register("inStock")}
            >
              <option value="" hidden>
                Select...
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn-primary w-full md:mt-0"
            >
              Update
            </button>
          </div>
        </div>
        {product.images &&
          product.images.map((image, i) => (
            <div
              key={i}
              className="w-full flex flex-row justify-between items-center border p-2 border-dashed rounded-xl border-gray-400 mt-3 md:mt-0"
            >
              <div className="flex items-center gap-5">
                <div className="w-[80px] h-[80px] overflow-hidden">
                  <img src={image.url} className="object-cover w-full h-full" />
                </div>
                <div>Image {i + 1}</div>
              </div>
              <button
                onClick={() =>
                  handleDeleteImage(
                    product._id,
                    product.images[i]._id,
                    product.images[i].public_string
                  )
                }
                type="button"
                className="p-2"
              >
                <TrashIcon className="w-5 sm:w-6 h-5 sm:h-6 text-red-600 hover:text-red-700" />
              </button>
            </div>
          ))}
      </form>
    </>
  );
};

export default UpdateProductForm;
