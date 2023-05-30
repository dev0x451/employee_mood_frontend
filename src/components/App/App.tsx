import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Main } from "../../pages/main/Main";
import { Tests } from "../../pages/tests/Tests";
import { Advices } from "../../pages/advices/Advices";
import { Events } from "../../pages/events/Events";
import { Bookmarks } from "../../pages/bookmarks/Bookmarks";
import { Calendar } from "../../pages/calendar/Calendar";
import { Myteam } from "../Myteam/Myteam";
import { FormikValues } from "formik";

import styles from "./app.module.css";
import { ProtectedRoutes } from "@/components/ProtectedRoutes";
import { RegisterPage } from "@/pages/register/RegisterPage";
import { RefreshPasswordPage } from "@/pages/refreshpassword/RefreshPasswordPage";
import { LoginPage } from "@/pages/login/LoginPage";
import { MyFormValues } from "@/types";
import * as ApiAuth from "@/shared/api/ApiAuth";
import * as Api from "@/shared/api/Api";
import { useLocation } from "react-router";

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [popupOpened, setPopupOpened] = useState(false); // попап с ошибкой авторизации
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(currentUser);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth(jwt);
    }
    getUserInfo();
  }, [loggedIn]);

  const auth = async (jwt: string) => {
    try {
      const response = await ApiAuth.checkToken(jwt);
      if (response.statusText === "OK") {
        setLoggedIn(true);
        ["/login", "/register"].includes(pathname)
          ? navigate("/")
          : navigate(pathname);
      }
    } catch (err: any) {
      if (err.status === 400) {
        console.log("400 - токен не передан или передан не в том формате");
      } else if (err.status === 401) {
        console.log("401 - переданный токен некорректен");
      }
    }
  };

  async function getUserInfo() {
    if (loggedIn) {
      const response = await Api.getUser();
      try {
        setCurrentUser(response.data);
      } catch (err: any) {
        console.log(err);
      }
    }
  }

  async function handleLogin(values: MyFormValues) {
    try {
      const response = await ApiAuth.loginUser(values);
      if (response.data.access) {
        localStorage.setItem("jwt", response.data.access);
        setLoggedIn(true);
      }
    } catch {
      setPopupOpened(true);
      setError("Неверный логин или пароль");
    }
  }

  async function handleRegister(
    values: FormikValues,
    invite_code: string | null
  ) {
    try {
      const response = await ApiAuth.registerUser(values, invite_code);
      if (response) {
        const email = response.data.email;
        const password = values.password;
        await handleLogin({ email, password });
      }
    } catch {
      setPopupOpened(true);
      setError("Что-то пошло не так. Попробуйте еще раз.");
    }
  }

  const closeErrorPopup = () => {
    setPopupOpened(false);
  };

  return (
    <main className={styles.page}>
      <Routes>
        <Route element={<ProtectedRoutes loggedIn={loggedIn} />}>
          <Route path="/" element={<Main />} />

          <Route path="tests" element={<Tests />} />

          <Route path="advices" element={<Advices />} />

          <Route path="events" element={<Events />} />

          <Route path="bookmarks" element={<Bookmarks />} />

          <Route path="calendar" element={<Calendar />} />

          <Route path="myteam" element={<Myteam />} />
        </Route>
        <Route
          path="login"
          element={
            <LoginPage
              handleLogin={handleLogin}
              closeErrorPopup={closeErrorPopup}
              popupOpened={popupOpened}
              error={error}
            />
          }
        />
        <Route
          path="register"
          element={
            <RegisterPage
              handleRegister={handleRegister}
              closeErrorPopup={closeErrorPopup}
              popupOpened={popupOpened}
              registerError={error}
            />
          }
        />
        <Route path="password-reset" element={<RefreshPasswordPage />} />
      </Routes>
    </main>
  );
};
