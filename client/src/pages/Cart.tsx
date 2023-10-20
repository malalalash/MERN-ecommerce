import CartItem from "../components/CartItem/CartItem";
import { useCart } from "../store/cartStore";

const Cart = () => {
  const { items } = useCart();

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="px-4 py-6 sm:px-6 lg:px-8 bg-gray-50 mt-6">
          <div className="bg-white max-w-3xl p-5">
            <h1 className="text-3xl font-bold text-black">
              Cart ({items.length} prod.)
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
        </div>
      </div>
    </div>
  );
};

export default Cart;
