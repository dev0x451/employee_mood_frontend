import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { Header } from "./Header/Header";

interface ProtectedRouteProps {
  loggedIn: boolean;
}
export const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({
  loggedIn,
}) => {
  return (
    <>
      <Header/>
      {loggedIn ? <Outlet /> : <Navigate to="/login" />}
    </>
    );
};
