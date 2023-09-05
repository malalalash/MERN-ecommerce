import {
  Bars3Icon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import fb from "../../assets/svg/fb.svg";
import ins from "../../assets/svg/ins.svg";
import link from "../../assets/svg/link.svg";
import yt from "../../assets/svg/yt.svg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest("#mobile-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="border-b shadow">
      <div className="w-full h-8 text-center bg-black text-white uppercase flex items-center justify-center font-extrabold text-sm md:text-base">
        Free shipping for orders above $50
      </div>
      <div className="w-full p-3 flex md:mx-auto bg-white max-w-4xl justify-between items-center">
        <button className="text-lg mt-1 md:hidden" onClick={toggleMenu}>
          <Bars3Icon className="h-7 w-7" />
        </button>
        <h1 className="flex-2 xl:-translate-x-20 ml-10 md:ml-0 text-2xl md:text-3xl lg:text-4xl font-extrabold">
          MERN store
        </h1>
        {isOpen && (
          <div className="w-full min-h-screen fixed top-0 left-0 md:hidden bg-black/40"></div>
        )}
        <nav
          id="mobile-menu"
          className={`absolute md:relative bg-white top-0 left-0 min-h-screen w-[70%] md:top-auto md:left-auto md:min-h-0 md:w-auto transform transition-all duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:duration-0 md:transform-none md:transition-none`}
        >
          <div className="md:hidden flex items-center justify-end border-b mx-5">
            <button className="w-6 h-6 m-3 mt-5" onClick={toggleMenu}>
              <XMarkIcon />
            </button>
          </div>
          <ul className="flex md:mr-24 lg:mr-32 font-semibold flex-col items-start uppercase tracking-widest justify-start gap-4 md:flex-row md:items-center md:p-0 md:m-0 border-b m-5 pb-5 md:border-none">
            <li className="nav-link">Home</li>
            <li className="nav-link">Shop</li>
            <li className="nav-link">About</li>
          </ul>
          <ul className="md:hidden flex-wrap gap-3 mx-auto flex flex-row items-center justify-center p-5">
            <li className="w-12 cursor-pointer h-12 border p-2 rounded-full bg-white">
              <img
                src={fb}
                alt="facebook logo"
                className="w-full object-cover"
              />
            </li>
            <li className="w-12 cursor-pointer h-12 border p-2 rounded-full bg-white">
              <img
                src={ins}
                alt="instagram logo"
                className="w-full object-cover"
              />
            </li>
            <li className="w-12 cursor-pointer h-12 border p-2 rounded-full bg-white">
              <img
                src={yt}
                alt="youtube logo"
                className="w-full object-cover"
              />
            </li>
            <li className="w-12 cursor-pointer h-12 border p-2 rounded-full bg-white">
              <img
                src={link}
                alt="linkedin logo"
                className="w-full object-cover"
              />
            </li>
          </ul>
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
