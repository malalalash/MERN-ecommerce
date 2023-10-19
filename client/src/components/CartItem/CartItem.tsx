import { TrashIcon } from "@heroicons/react/24/solid";
import { CartItemProps } from "../../types";
import { useCart } from "../../store/cartStore";

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const { removeItem } = useCart();
  
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <img
          src={data.images[0].url}
          alt={data.name}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <button onClick={() => removeItem(data._id)}>
            <TrashIcon className="w-5 sm:w-6 h-5 sm:h-6 text-red-600" />
          </button>
        </div>
        <div className="relative pr-9 smL:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex flex-col text-sm">
            <p>{data.category.name}</p>
            <p>Size: {data.size}</p>
            <p>Color: {data.color}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
