import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CategoryType } from "../../types";
import { addCategory } from "../../api/category/addCategory";
const NewCategory = () => {
  const [openModal, setOpenModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryType>();

  const onSubmit: SubmitHandler<CategoryType> = async (data) => {
    await addCategory(data);
    handleModal();
  };
  console.log(errors);
  const handleModal = () => {
    setOpenModal(!openModal);
    reset();
  };

  return (
    <>
      <button
        onClick={handleModal}
        className="btn-primary text-sm p-1 md:text-base"
      >
        New category
      </button>

      {openModal && (
        <div className="fixed px-5 flex items-center justify-center z-50 top-0 left-0 w-full min-h-screen bg-black/50">
          <div className="bg-white border border-slate-500 w-full max-w-xl p-3">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Add new category
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="category-name" className="text-sm md:text-base">
                  Category name
                </label>
                <input
                  className="form-value"
                  type="text"
                  id="category-name"
                  placeholder="Category name"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "Only letters are allowed",
                    },
                  })}
                />
                {errors.name && (
                  <p className="form-error">
                    {errors.name.message
                      ? errors.name.message
                      : "This field is required"}
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                <button className="btn-primary max-w-[150px]" type="submit">
                  Add
                </button>
                <button
                  className="btn-error max-w-[150px]"
                  onClick={handleModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewCategory;
