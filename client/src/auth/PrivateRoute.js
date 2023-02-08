import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContect";

function PrivateRoute() {
  const auth = localStorage.getItem("role");
  return auth ? <Outlet /> : <Navigate to="/signup" />;
}
// const PrivateRoute = ({ allowedRoles }) => {
//   const { auth } = useContext(AuthContext);
//   const locations = useLocation();
//   return allowedRoles.find((role) => auth.role.includes(role)) ? (
//     <Outlet />
//   ) : auth?.name ? (
//     <Navigate to="/unauthorized" state={{ from: locations }} replace />
//   ) : (
//     <Navigate to="/signup" state={{ from: locations }} replace />
//   );
// };

export default PrivateRoute;
