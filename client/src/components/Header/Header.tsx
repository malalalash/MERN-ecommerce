import {
  Bars3Icon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import Social from "../Social/Social";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  useClickOutside(isOpen, setIsOpen, "#mobile-menu");

  return (
    <header className="border-b shadow">
      <div className="w-full h-8 text-center bg-black text-white uppercase flex items-center justify-center font-extrabold text-sm md:text-base">
        Free shipping for orders above $50
      </div>
      <div className="w-full p-3 flex md:mx-auto bg-white max-w-4xl justify-between items-center">
        <button className="text-lg mt-1 md:hidden" onClick={toggleMenu}>
          <Bars3Icon className="h-7 w-7" />
        </button>
        <Link
          to={"/"}
          className="flex-2 xl:-translate-x-20 ml-10 md:ml-0 text-2xl md:text-3xl lg:text-4xl font-extrabold"
        >
          MERN store
        </Link>
        {isOpen && (
          <div className="w-full min-h-screen fixed top-0 left-0 md:hidden bg-black/40 z-50"></div>
        )}
        <nav
          id="mobile-menu"
          className={`absolute z-50 md:relative bg-white top-0 left-0 min-h-screen w-[70%] md:top-auto md:left-auto md:min-h-0 md:w-auto transform transition-all duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:duration-0 md:transform-none md:transition-none`}
        >
          <div className="md:hidden flex items-center justify-end border-b mx-5">
            <button className="w-6 h-6 m-3 mt-5" onClick={toggleMenu}>
              <XMarkIcon />
            </button>
          </div>
          <ul
            className={`flex md:mr-24 lg:mr-36 font-semibold flex-col items-start uppercase tracking-widest justify-start gap-4 md:flex-row md:items-center md:p-0 md:m-0 border-b m-5 pb-5 md:border-none ${
              isOpen ? "" : "hidden md:flex"
            }`}
          >
            <NavLink onClick={toggleMenu} to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavLink onClick={toggleMenu} to={"/shop"} className="nav-link">
              Shop
            </NavLink>
            <NavLink onClick={toggleMenu} to={"/about"} className="nav-link">
              About
            </NavLink>
          </ul>
          <div className="md:hidden ml-5">
            <Social />
          </div>
        </nav>
        <ul className="flex items-center justify-between gap-2 mt-1">
          <li className="nav-link pt-1">
            <button>
              <ShoppingCartIcon className="w-6 h-6" />
            </button>
          </li>
          <li className="nav-link pt-1">
            <button>
              <UserIcon className="w-6 h-6" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
