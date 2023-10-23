import CartItem from "../components/CartItem/CartItem";
import Summary from "../components/Summary/Summary";
import { useCart } from "../store/cartStore";

const Cart = () => {
  const { items } = useCart();
  const totalItems = items
    .map((item) => item.quantity)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="px-4 py-6 sm:px-6 lg:px-8 bg-gray-100 grid lg:grid-cols-3 gap-5">
          <div className="bg-white max-w-3xl p-5 lg:col-span-2 min-w-full">
            <h1 className="text-3xl font-bold text-black">
              Cart ({totalItems}
              prod.)
            </h1>
            <div>
              <div>
                {items.length === 0 ? (
                  <p className="font-bold mt-8">No items added to cart.</p>
                ) : (
                  <ul>
                    {items.map((item) => (
                      <CartItem key={item._id} data={item} />
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          {items.length > 0 && <Summary />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
