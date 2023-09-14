import NavBarMenu from "./NavBarMenu";
import { useMenu } from "../../context/menuContext";
import { XMarkIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const { isMenuOpen, handleMenu } = useMenu();
  return (
    <div
      className={`p-4 border-r transform transition-all duration-300 w-full bg-white min-h-screen z-50 ${
        isMenuOpen
          ? "translate-x-0  absolute z-50"
          : "-translate-x-full sm:translate-x-0"
      }`}
    >
      <div className="flex items-center justify-between px-2">
        <span className="text-center block font-bold uppercase text-2xl">
          MERN E-commerce
        </span>
        {isMenuOpen && (
          <button onClick={handleMenu}>
            <XMarkIcon className="w-7 h-7" />
          </button>
        )}
      </div>
      <NavBarMenu />
    </div>
  );
};

export default NavBar;
