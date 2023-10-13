import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";

const PrivateRoute = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { user, authorize } = useAuth();

  useEffect(() => {
    authorize().then(() => {
      setLoading(false);
    });
  }, [location.pathname]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
