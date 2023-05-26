import { Navigate, Outlet } from "react-router-dom";
import React from "react";

interface ProtectedRouteProps {
  loggedIn: boolean;
}
export const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({
  loggedIn,
}) => {
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};
