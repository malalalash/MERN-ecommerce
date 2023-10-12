import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { MenuProvider } from "./context/menuContext";
import Products from "./pages/Products/Products";
import AddProduct from "./pages/AddProduct/AddProduct";
import Customers from "./pages/Customers/Customers";
import Orders from "./pages/Orders/Orders";
import Transactions from "./pages/Transactions/Transactions";
import Product from "./pages/Product/Product";
import { getCategories } from "./api/category/getCategories";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./context/authContext";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<PrivateRoute />}>
      <Route path="/" element={<RootLayout />}>
        <Route index={true} path="/" element={<Home />} />
        <Route path={"products"} element={<Products />} />
        <Route
          path={"products/:productId"}
          element={<Product />}
          loader={getCategories}
        />
        <Route path={"add-product"} element={<AddProduct />} />
        <Route path={"customers"} element={<Customers />} />
        <Route path={"orders"} element={<Orders />} />
        <Route path={"transactions"} element={<Transactions />} />
      </Route>
    </Route>,
    <Route path={"login"} element={<Login />} />,
  ])
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MenuProvider>
          <RouterProvider router={router} />
        </MenuProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
