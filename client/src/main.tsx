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
import Home from "./pages/Home";
import Product from "./pages/Product";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<RootLayout />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
    </Route>,
  ])
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
