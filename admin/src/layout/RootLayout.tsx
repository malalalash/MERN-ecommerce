import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { useMenu } from "../context/menuContext";
const RootLayout = () => {
  const { isMenuOpen } = useMenu();
  return (
    <div className="flex flex-row w-full overflow-hidden min-h-screen bg-white">
      <aside
        className={`min-h-screen transform transition-all duration-300 z-50 max-h-screen bg-white ${
          isMenuOpen ? "" : "-translate-x-full sm:translate-x-0"
        }`}
      >
        <NavBar />
      </aside>
      <main
        className={`w-full min-h-screen max-h-screen ${
          isMenuOpen ? "" : "absolute z-40 sm:relative"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
