import CartItem from "../components/CartItem/CartItem";
import { useCart } from "../store/cartStore";

const Cart = () => {
  const { items } = useCart();

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {items.length === 0 ? (
                <p>No items added to cart.</p>
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
  );
};

export default Cart;
