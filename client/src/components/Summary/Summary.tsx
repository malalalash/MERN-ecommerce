import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useCart } from "../../store/cartStore";
const Summary = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { items } = useCart();

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shippingPrice = totalPrice >= 50 ? 0 : 10;

  return (
    <div className="flex flex-col gap-5 h-max sticky top-0">
      <div className="w-full bg-white h-max p-5">
        <div className="border-b border-gray-200 flex flex-col gap-6 pb-3">
          <h2 className="text-3xl font-bold">To Pay</h2>
          <div className="flex justify-between text-sm sm:text-base">
            <p>Value of products</p>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm sm:text-base">
            <p>Shipping</p>
            <span>${shippingPrice.toFixed(2)}</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm sm:text-base mt-3">
            <p className="font-bold">Total</p>
            <span className="font-bold">
              ${(totalPrice + shippingPrice).toFixed(2)}
            </span>
          </div>
          <div>
            <button className="p-2 bg-orange-500 text-white font-extrabold text-xs sm:text-sm my-5 w-full hover:bg-orange-600 transition-colors">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-5 flex flex-col">
        <div className="flex justify-between">
          <p className="text-sm sm:text-base">
            Add a promo code <span className="text-gray-500">(optional)</span>
          </p>
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <ChevronDownIcon
              className={`h-5 w-5 transition-all duration-[400ms] ${
                isExpanded ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
        <div
          className={`transition-all duration-[400ms] ${
            isExpanded ? "max-h-96 pt-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-xs mb-2">Enter promo code.</p>
          <input
            className="border border-gray-200 p-1 px-3 w-full hover:outline hover:outline-black outline-2 transition-transform focus:outline focus:outline-black"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
