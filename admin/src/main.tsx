import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { MenuProvider } from "./context/menuContext";
import Products from "./pages/Products/Products";
import AddProduct from "./pages/AddProduct/AddProduct";
import Customers from "./pages/Customers/Customers";
import Orders from "./pages/Orders/Orders";
import Transactions from "./pages/Transactions/Transactions";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<RootLayout />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path={"products"} element={<Products />} />
      <Route path={"add-product"} element={<AddProduct />} />
      <Route path={"customers"} element={<Customers />} />
      <Route path={"orders"} element={<Orders />} />
      <Route path={"transactions"} element={<Transactions />} />
      <Route path={"login"} element={<Login />} />
    </Route>,
  ])
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MenuProvider>
      <RouterProvider router={router} />
    </MenuProvider>
  </React.StrictMode>
);
