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
import Login from "./pages/Login";
import { MenuProvider } from "./context/menuContext";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<RootLayout />}>
      <Route index={true} path="/" element={<Home />} />
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
