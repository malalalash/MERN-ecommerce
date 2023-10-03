import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CategoryType } from "../../types";
import { addCategory } from "../../api/category/addCategory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const NewCategory = () => {
  const [openModal, setOpenModal] = useState(false);
  const queryClient = useQueryClient();
  const { mutate } = useMutation(addCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries(["category"]);
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryType>();

  const onSubmit: SubmitHandler<CategoryType> = (data) => {
    mutate(data);
    handleModal();
  };
  const handleModal = () => {
    setOpenModal(!openModal);
    reset();
  };

  return (
    <>
      <button
        onClick={handleModal}
        className="btn-primary text-sm p-1 md:text-base max-w-[100px] sm:max-w-[150px] truncate"
      >
        New category
      </button>

      {openModal && (
        <div className="fixed text-center px-5 flex items-center justify-center z-50 top-0 left-0 w-full min-h-screen bg-black/50">
          <div className="bg-white border border-slate-500 w-full max-w-xl p-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <label
                  htmlFor="category-name"
                  className="text-xl md:text-2xl font-semibold mb-2"
                >
                  Category name
                </label>
                <input
                  className="form-value max-w-sm w-full"
                  type="text"
                  id="category-name"
                  placeholder="Category name"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                    pattern: {
                      value: /^[a-zA-Z-]+$/,
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
              <div className="flex gap-2 items-center justify-center">
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
