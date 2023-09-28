import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { CategoryType } from "../../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../../api/category/deleteCategory";
const labels = ["#", "Name", "Date", "Actions"];
const Table = ({ category }: { category: CategoryType[] | undefined }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries(["category"]);
    },
  });

  const handleDelete = (id: string) => {
    mutate(id);
  };
  return (
    <div className="overflow-x-auto">
      <h3 className="font-bold sm:text-xl mt-2">Manage categories</h3>
      <span className="text-xs sm:text-sm">
        Here you can delete or edit categories
      </span>
      <div className="bg-white w-full overflow-x-auto block mt-2 min-w-[600px]">
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
            {category?.map((category, i) => (
              <tr key={category._id} className="hover:bg-slate-50">
                <td className="prod-table">{i + 1}</td>
                <td className="prod-table">{category.name}</td>
                <td className="prod-table">
                  {new Date(category.createdAt).toLocaleDateString()}
                </td>
                <td className="prod-table flex items-center justify-center">
                  <button className="hover:bg-slate-200 p-1">
                    <PencilSquareIcon className="w-4 sm:w-5 h-4 sm:h-5 " />
                  </button>
                  <button
                    onClick={() => handleDelete(category._id)}
                    className="hover:bg-slate-200 p-1"
                  >
                    <TrashIcon className="w-4 sm:w-5 h-4 sm:h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
