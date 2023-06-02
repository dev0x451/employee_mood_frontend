import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { Header } from "./Header/Header";

interface ProtectedRouteProps {
  loggedIn: boolean;
  handleSignOut: () => void;
}
export const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({
  loggedIn,
  handleSignOut,
}) => {
  return loggedIn ? (
    <>
      {" "}
      <Header handleSignOut={handleSignOut} /> <Outlet />{" "}
    </>
  ) : (
    <Navigate to="/login" />
  );
};
