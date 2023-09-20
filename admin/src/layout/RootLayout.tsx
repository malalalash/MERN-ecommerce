import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { useMenu } from "../context/menuContext";
import Header from "../components/Header/Header";
const RootLayout = () => {
  const { isMenuOpen } = useMenu();
  return (
    <div className="flex flex-row w-full overflow-hidden min-h-screen bg-white">
      <aside
        className={`min-h-screen transform transition-all duration-300 z-50 max-h-screen bg-white -translate-x-full sm:translate-x-0 ${
          isMenuOpen ? "translate-x-0 absolute w-full" : "-translate-x-full"
        }`}
      >
        <NavBar />
      </aside>
      <main
        className={`w-full min-h-screen max-h-screen ${
          isMenuOpen ? "" : "absolute sm:relative"
        }`}
      >
        <Header />
        <section className="w-full min-h-screen bg-slate-100 p-5">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default RootLayout;
