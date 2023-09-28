import { updateCategory } from "../../api/category/updateCategory";
import { CategoryModalProps } from "../../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
const CategoryModal: React.FC<CategoryModalProps> = ({

  categoryId,
  setCategoryId,
  setOpenModal,
  handleDelete,
  isEditing,
  setIsEditing,
}) => {
  const [newCategoryName, setNewCategoryName] = useState("");

  const queryClient = useQueryClient();
  const { mutate } = useMutation(updateCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries(["category"]);
      setIsEditing(false);
      setOpenModal(false);
      setCategoryId("");
 
    },
  });

  const handleUpdate = (id: string, name: string) => {
    mutate({ id, name });
  };
  return (
    <div className="w-full px-5 flex items-center justify-center h-full fixed bg-black/50 top-0 left-0 z-50">
      <div className="bg-white border border-slate-500 w-full max-w-xl p-3">
        {isEditing ? (
          <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(categoryId, newCategoryName);
              }}
            >
              <div className="w-full flex flex-col items-center justify-center gap-2">
                <label
                  htmlFor="name"
                  className="text-xl md:text-2xl font-semibold mb-2 text-center"
                >
                  Edit ategory name
                </label>
                <input
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  type="text"
                  className="w-full max-w-xs form-value"
                />
              </div>
              <div className="flex items-center justify-center gap-2 mt-4 pb-2">
                <button type="submit" className="btn-primary max-w-[100px] p-1">
                  Apply
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setOpenModal(false);
                    setCategoryId("");
                    
                  }}
                  className="btn-error max-w-[100px] p-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 text-center">
              Are you sure you want to delete this category?
            </h4>
            <h5 className="text-sm md:text-base text-center text-red-500">
              This action will delete products associated with this category!
            </h5>
            <div className="flex items-center justify-center gap-2 mt-4">
              <button
                onClick={() => handleDelete(categoryId)}
                className="btn-error max-w-[100px] p-1"
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setCategoryId("");
                  setOpenModal(false);
                }}
                className="btn-primary max-w-[100px] p-1"
              >
                No
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryModal;
