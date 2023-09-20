import {
  CurrencyDollarIcon,
  UserIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Boxes = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
        <div className="box">
          <div className="flex items-center gap-3 ml-2">
            <CurrencyDollarIcon className="icon bg-blue-400/20 text-blue-700" />
            <div className="flex flex-col">
              <span className="title">Total sales</span>
              <span className="value">$1234</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="flex items-center gap-3 ml-2">
            <UserIcon className="icon bg-green-400/20 text-green-800" />
            <div className="flex flex-col">
              <span className="title">Total customers</span>
              <span className="value">13</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="flex items-center gap-3 ml-2">
            <ShoppingBagIcon className="icon bg-yellow-400/20 text-yellow-800" />
            <div className="flex flex-col">
              <span className="title">Total orders</span>
              <span className="value">145</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="flex items-center gap-3 ml-2">
            <ShoppingCartIcon className="icon bg-red-400/40 text-red-600" />
            <div className="flex flex-col">
              <span className="title">New products</span>
              <span className="value">10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
