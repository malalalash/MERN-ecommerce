import {
  Bars3Icon,
  MoonIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useMenu } from "../../context/menuContext";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { handleMenu } = useMenu();
  const location = useLocation();
  const title =
    location.pathname === "/"
      ? "Dashboard"
      : location.pathname.slice(1).replace(/-/g, " ");

  return (
    <header className="border-b h-20">
      <div className="flex w-full h-full items-center justify-between mx-auto px-3 lg:ml-0">
        <div className="flex items-center">
          <button onClick={handleMenu} className="md:hidden">
            <Bars3Icon className="w-7 h-7" />
          </button>
          <h1 className="capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold p-2 m-2">
            {title}
          </h1>
        </div>
        <div className="flex gap-2">
          <div className="items-center gap-4 justify-center pr-2 hidden sm:flex">
            <div className="border rounded-full p-2">
              <MoonIcon className="w-[24px] h-[24px]" />
            </div>
            <div className="border relative rounded-full p-2">
              <BellIcon className="w-[24px] h-[24px]" />
            </div>
          </div>
          <div className="md:border-l px-4 flex items-center gap-1">
            <img
              className="rounded-full w-12 h-12 object-center object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="profile image"
            />
            <button>
              <ChevronDownIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
