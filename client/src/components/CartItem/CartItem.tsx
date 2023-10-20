import { TrashIcon } from "@heroicons/react/24/solid";
import { CartItemProps } from "../../types";
import { useCart } from "../../store/cartStore";

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const { removeItem, items, changeQuantity } = useCart();
  const qty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(data);
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <img
          src={data.images[0].url}
          alt={data.name}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 justify-between flex flex-1 flex-col sm:ml-6 gap-2">
        <div className="absolute z-10 right-0 top-0">
          <button
            onClick={() => {
              removeItem(data._id);
            }}
          >
            <TrashIcon className="h-4 w-4 sm:h-6 sm:w-6 text-gray-400 hover:text-red-600" />
          </button>
        </div>
        <div className="text-gray-600 text-sm sm:text-base">
          <p>{data.name}</p>
          <p>{data.category.name}</p>
          <p>Color: {data.color}</p>
          <p>Size: {data.size}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <select
            defaultValue={data.quantity}
            className="cursor-pointer border hover:outline hover:outline-1 border-black p-1 px-4 pr-5 max-w-[80px] sm:max-w-max"
            onChange={(e) => changeQuantity(Number(e.target.value), data._id)}
          >
            {qty.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <div className="sm:place-self-end">
            <span className="text-black font-bold">
              ${(data.price * data.quantity).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
