import { Link } from "react-router-dom";
import Social from "../Social/Social";

const Footer = () => {
  return (
    <footer className="w-full bottom-0 bg-black text-white py-10">
      <div className="flex flex-col md:flex-row gap-10 justify-around mx-10">
        <div>
          <h3 className="text-xl pb-2">Follow Us</h3>
          <Social />
        </div>
        <div>
          <h4 className="text-xl pb-2">Links</h4>
          <ul className="flex flex-col">
            <li className="hover:text-gray-300">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl pb-2">Newsletter</h5>
          <form className="flex flex-col">
            <label className="pb-2" htmlFor="email">
              Sign up for our newsletter
            </label>
            <div className="group max-w-fit">
              <input
                id="email"
                type="email"
                required
                placeholder="enter your email..."
                className="border p-2 group-hover:bg-black text-black group-hover:text-white transition"
              />
              <button className="border p-2 group-hover:bg-white group-hover:text-black transition">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
