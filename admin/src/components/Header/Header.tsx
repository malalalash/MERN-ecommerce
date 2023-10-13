import {
  Bars3Icon,
  MoonIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useMenu } from "../../context/menuContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleMenu } = useMenu();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const title =
    location.pathname === "/"
      ? "Dashboard"
      : location.pathname.split("/")[1].replace("-", " ");

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="border-b h-20">
      <div className="flex w-full h-full items-center justify-between mx-auto px-3 lg:ml-0">
        <div className="flex items-center">
          <button onClick={handleMenu} className="lg:hidden">
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
              src={user?.avatar}
              alt="profile image"
            />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <ChevronDownIcon className="w-5 h-5" />
            </button>
            {isMenuOpen && (
              <ul className="absolute z-50 border rounded top-20 right-4 bg-white p-2 flex flex-col gap-2 shadow">
                <li>
                  <button className="hover:bg-black/10 p-1 px-4 rounded-md w-full">
                    Profile
                  </button>
                </li>
                <li>
                  <button
                    className="hover:bg-black/10 p-1 px-4 rounded-md w-full"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
