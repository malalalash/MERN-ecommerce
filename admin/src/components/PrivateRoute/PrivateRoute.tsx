import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";

const PrivateRoute = () => {
  const location = useLocation();
  const { user, authorize } = useAuth();

  useEffect(() => {
    authorize();
  }, [location.pathname]);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
