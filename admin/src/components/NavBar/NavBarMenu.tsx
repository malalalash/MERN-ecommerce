import { NavLink } from "react-router-dom";
import {
  ShoppingBagIcon,
  UserGroupIcon,
  PresentationChartBarIcon,
  PlusCircleIcon,
  CircleStackIcon,
  BanknotesIcon,
  Cog8ToothIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

const NavBarMenu = () => {
  return (
    <div className="min-h-full">
      <div className="p-2">
        <span className="nav-heading">Menu</span>
        <nav className="border-b pb-2">
          <ul className="flex flex-col w-full gap-y-4">
            <li className="list-item group">
              <NavLink className="nav-link" to="/">
                <PresentationChartBarIcon className="w-[24px] h-[24px]" />
                Dashboard
              </NavLink>
            </li>
            <li className="list-item group">
              <NavLink className="nav-link" to="/products">
                <ShoppingBagIcon className="w-[24px] h-[24px]" /> Products
              </NavLink>
            </li>
            <li className="list-item group">
              <NavLink className="nav-link" to="/add-product">
                <PlusCircleIcon className="w-[24px] h-[24px]" />
                Add product
              </NavLink>
            </li>
            <li className="list-item group">
              <NavLink className="nav-link" to="/customers">
                <UserGroupIcon className="w-[24px] h-[24px]" />
                Customers
              </NavLink>
            </li>
            <li className="list-item group">
              <NavLink className="nav-link" to="/orders">
                <CircleStackIcon className="w-[24px] h-[24px]" />
                Orders
              </NavLink>
            </li>
            <li className="list-item group">
              <NavLink className="nav-link" to="/transactions">
                <BanknotesIcon className="w-[24px] h-[24px]" />
                Transactions
              </NavLink>
            </li>
          </ul>
        </nav>
        <span className="nav-heading pt-2">Support</span>
        <ul className="flex flex-col w-full gap-y-4">
          <li className="group cursor-pointer transition hover:bg-gray-100 w-full rounded-lg">
            <span className="nav-link group-hover:text-blue-700">
              <Cog8ToothIcon className="w-[24px] h-[24px]" />
              Settings
            </span>
          </li>
          <li className="group cursor-pointer transition hover:bg-gray-100 w-full rounded-lg">
            <span className="nav-link group-hover:text-blue-700">
              <ShieldExclamationIcon className="w-[24px] h-[24px]" />
              Help
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarMenu;
