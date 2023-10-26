import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
const AuthLayout = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-12 md:h-16 flex items-center px-5 md:px-10 lg:px-16">
        <header>
          <Link
            to={"/"}
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold"
          >
            MERN store
          </Link>
        </header>
      </div>
      <main className="flex items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
