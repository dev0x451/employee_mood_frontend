import { Navigate, Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

interface ProtectedRouteProps {
  loggedIn: boolean;
  handleSignOut: () => void;
}
export const ProtectedRoutes = ({ loggedIn, handleSignOut}: ProtectedRouteProps) => {

  return loggedIn ? (
      <>
        {" "}
        <Header handleSignOut={handleSignOut} /> <Outlet />{" "}
      </>
    ) : (
      <Navigate to="/login" />
    )
};
