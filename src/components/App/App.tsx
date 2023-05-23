import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../Homepage/Homepage";
import { Guestpage } from "../Guestpage/Guestpage";

import styles from "./app.module.css";
import { ProtectedRoutes } from "@/components/ProtectedRoutes";
import { LoginPage } from "@/components/LoginPage/LoginPage";
import RegisterPage from "@/components/App/RegisterPage/RegisterPage";

export const App = () => {
  const [loggedIn] = useState(false);

  return (
    <main className={styles.page}>
      <Routes>
        <Route element={<ProtectedRoutes loggedIn={loggedIn} />}>
          <Route path="home" element={<Homepage />} />
          <Route path="guest" element={<Guestpage />} />
        </Route>
        <Route path="sign-in" element={<LoginPage />} />
        <Route path="sign-up" element={<RegisterPage />} />
      </Routes>
    </main>
  );
};
