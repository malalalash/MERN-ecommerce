import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getFeatured } from "./api/products/getFeatured";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { AuthProvider } from "./context/authContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthLayout from "./layout/AuthLayout";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<RootLayout />}>
      <Route index={true} path="/" element={<Home />} loader={getFeatured} />
      <Route path="shop" element={<Shop />} />
      <Route path="about" element={<About />} />
      <Route path="shop/:slug" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route element={<PrivateRoute />}>
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Route>,
    <Route element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>,

    <Route path="*" element={<Navigate to="/" />} />,
  ])
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
