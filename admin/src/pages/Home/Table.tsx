import { EyeIcon } from "@heroicons/react/24/solid";
const arrayOfObjects = [
  {
    number: 1,
    product: "Widget A",
    date: "2023-09-21",
    price: 19.99,
    status: "Pending",
  },
  {
    number: 2,
    product: "Widget B",
    date: "2023-09-22",
    price: 29.99,
    status: "Not Delivered",
  },
  {
    number: 3,
    product: "Widget C",
    date: "2023-09-23",
    price: 14.99,
    status: "Delivered",
  },
  {
    number: 4,
    product: "Widget D",
    date: "2023-09-24",
    price: 24.99,
    status: "Pending",
  },
  {
    number: 5,
    product: "Widget E",
    date: "2023-09-25",
    price: 9.99,
    status: "Not Delivered",
  },
  {
    number: 6,
    product: "Widget F",
    date: "2023-09-26",
    price: 39.99,
    status: "Delivered",
  },
];
const Table = () => {
  const statusClass = (status: string) => {
    if (status === "Pending") return "bg-blue-100 text-blue-800";
    if (status === "Not Delivered") return "bg-red-100 text-red-800";
    return "bg-green-100 text-green-800";
  };

  return (
    <div className="w-full max-h-[350px] overflow-y-scroll p-5 border border-black/10 bg-white">
      <div className="w-full">
        <h5 className="text-lg font-semibold">Latest orders</h5>
        <div className="w-full overflow-x-auto block min-w-[600px]">
          <table className="w-full mt-2">
            <thead className="border-b-4 border-black/10 text-xs lg:text-base">
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center text-xs lg:text-base">
              {arrayOfObjects.map((object, index) => (
                <tr className="border-b hover:bg-slate-50" key={index}>
                  <td className="font-semibold p-2 md:p-3">{object.number}</td>
                  <td>{object.product}</td>
                  <td>{object.date}</td>
                  <td>${object.price}</td>
                  <td>
                    <span
                      className={`px-2 ${statusClass(
                        object.status
                      )} rounded-full md:text-sm`}
                    >
                      {object.status}
                    </span>
                  </td>
                  <td>
                    <button>
                      <EyeIcon className="inline-block w-6 h-6 text-green-700" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
