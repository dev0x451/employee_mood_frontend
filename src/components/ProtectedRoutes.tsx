import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { Navbar } from "@/components/Navbar/Navbar";

interface ProtectedRouteProps {
  loggedIn: boolean;
}
export const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({
  loggedIn,
}) => {
  return (
    <>
      <Navbar />
      {loggedIn ? <Outlet /> : <Navigate to="/sign-in" />}
    </>
  );
};
