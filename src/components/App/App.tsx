import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Main } from "../../pages/main/Main";
import { Tests } from "../../pages/tests/Tests";
import { Test } from "../Test/Test";
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
import {
  ExpressDiagnoseResponse,
  jwtTypes,
  MyFormValues,
  TestInterface,
  TestResult,
  UserInfo,
} from "@/types";

import * as ApiAuth from "@/shared/api/ApiAuth";
import * as Api from "@/shared/api/Api";
import { useLocation } from "react-router";
import { Account } from "@/pages/account/Account";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  resetCurrentUser,
  resetCurrentUserAbout,
  resetCurrentUserAvatar,
  resetCurrentUserFirstName,
  resetCurrentUserLastName,
  resetCurrentUserPosition,
  setCurrentUser,
  setCurrentUserAbout,
  setCurrentUserAvatar,
  setCurrentUserFirstName,
  setCurrentUserLastName,
  setCurrentUserPosition,
} from "@/store/reducers/currentUser/currentUserReducer";

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [popupOpened, setPopupOpened] = useState(false); // попап с ошибкой авторизации
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [resultOfPsychoTest, setResultOfPsychoTest] =
    useState<ExpressDiagnoseResponse>();
  const [expressTest, setExpressTest] = useState<TestInterface | null>(null);
  const [allTestsResults, setallTestsResults] =
    useState<ExpressDiagnoseResponse[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const role = useAppSelector((state) => state.currentUserSlice.role);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    const refresh = localStorage.getItem("refresh");
    if (jwt && refresh) {
      const { exp }: jwtTypes = JSON.parse(
        window.atob(jwt.split(".")[1])
      ) as jwtTypes;
      const date = Date.now() / 1000;
      if (exp > date) {
        auth(jwt);
      } else {
        refreshToken(refresh);
        const newJwt = localStorage.getItem("jwt");
        if (newJwt) {
          auth(newJwt);
        }
      }
    }
  }, [loggedIn]);

  const refreshToken = async (token: string) => {
    try {
      const response = await ApiAuth.refreshToken(token);
      localStorage.setItem("jwt", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
    } catch (err: any) {
      console.log(err);
    }
  };

  const auth = async (jwt: string) => {
    setIsLoading(true);
    try {
      const response = await ApiAuth.checkToken(jwt);
      if (response.status === 200) {
        setLoggedIn(true);
        ["/login", "/register"].includes(pathname)
          ? navigate("/")
          : navigate(pathname);
      }
      getUserInfo();
    } catch (err: any) {
      if (err.status === 400) {
        console.log("400 - токен не передан или передан не в том формате");
        navigate("/login");
      } else if (err.status === 401) {
        console.log("401 - переданный токен некорректен");
      }
    }
  };

  async function getUserInfo() {
    if (loggedIn) {
      try {
        const response = await Api.getUser();
        dispatch(setCurrentUser(response.data.role));
        dispatch(setCurrentUserFirstName(response.data.first_name));
        dispatch(setCurrentUserLastName(response.data.last_name));
        dispatch(setCurrentUserPosition(response.data.position.name));
        dispatch(setCurrentUserAbout(response.data.about));
        dispatch(setCurrentUserAvatar(response.data.avatar));
        console.log("currentUser", response.data.role);
      } catch (err: any) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
  }

  async function handleChangeUserInfo(userInfo: UserInfo) {
    try {
      let response: any = "";
      if (userInfo.photoToSubmit) {
        response = await Api.changeUserInfo(userInfo);
      } else {
        response = await Api.changeUserInfoOnlyAbout(userInfo);
      }
      if (response) {
        setPopupOpened(true);
        setSuccess("Изменения сохранены");
        getUserInfo();
      }
    } catch (err) {
      setPopupOpened(true);
      setError("Что-то пошло не так. Попробуйте еще раз");
    }
  }

  async function handleLogin(values: MyFormValues) {
    try {
      const response = await ApiAuth.loginUser(values);
      if (response.data.access && response.data.refresh) {
        localStorage.setItem("jwt", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        setLoggedIn(true);
      }
    } catch {
      setPopupOpened(true);
      setError("Неверный логин или пароль");
    }
  }

  const handleSignOut = () => {
    setLoggedIn(false);
    dispatch(resetCurrentUser());
    dispatch(resetCurrentUserFirstName());
    dispatch(resetCurrentUserLastName());
    dispatch(resetCurrentUserPosition());
    dispatch(resetCurrentUserAbout());
    dispatch(resetCurrentUserAvatar());
    navigate("/login");
    localStorage.removeItem("jwt");
    localStorage.removeItem("refresh");
  };

  async function handleRegister(values: FormikValues, invite_code: string) {
    try {
      const response = await ApiAuth.registerUser(values, invite_code);
      if (response) {
        const email = response.data.email;
        const password = values.password;
        await handleLogin({ email, password });
      }
    } catch {
      setPopupOpened(true);
      setError("Что-то пошло не так. Попробуйте еще раз");
    }
  }

  async function handleSendResetCode(email: string) {
    try {
      const response = await ApiAuth.sendResetCode(email);
      if (response) {
        setPopupOpened(true);
        setSuccess("Письмо отправлено на почту");
        setError("");
      }
    } catch (err) {
      setPopupOpened(true);
      setError("Не удалось найти пользователя с таким e-mail");
    }
  }

  async function handleSendInviteCode(email: string) {
    try {
      const response = await Api.sendInviteCode(email);
      if (response) {
        setSuccess("Приглашение отправлено!");
        setError("");
      }
    } catch (err) {
      setPopupOpened(true);
      setError("Пользователь с таким e-mail уже существует");
    }
  }

  async function handleResetPassword(values: FormikValues, resetCode: string) {
    try {
      const response = await ApiAuth.resetPassword(values, resetCode);
      if (response) {
        navigate("/login");
      }
    } catch (err) {
      setPopupOpened(true);
      setError("Недействительный ключ");
    }
  }

  async function handleSendTestResult(result: TestResult) {
    try {
      const response = await Api.sendTestResults(result);
      setResultOfPsychoTest(response.data);
    } catch (err: any) {
      console.log(err);
    }
    getAllTestsResult();
  }

  async function getAllTestsResult() {
    try {
      const response = await Api.getAllTestsResults();
      setallTestsResults(response.data.results);
    } catch (err: any) {
      console.log(err);
    }
  }

  async function getTestsQuestions() {
    try {
      const response = await Api.getTestQuestions("1");
      setExpressTest(response.data);
    } catch (err: any) {
      console.log(err);
    }
  }

  // if (loggedIn) {
  // const [expressTest] = useRequest(() => Api.getTestQuestions("1"));
  // }

  useEffect(() => {
    if (loggedIn) {
      getAllTestsResult();
      getTestsQuestions();
    }
  }, [loggedIn]);

  async function handleEmployees() {
    try {
      if (role === "hr" || role === "chief") {
        const response = await Api.getUsers();
        setEmployees(response.data.results);
      }
    } catch (err: any) {
      console.log(err);
    }
  }
  // console.log(role);
  // useEffect(()=>{handleEmployees()},[]);
  // useEffect(()=>{handleEmployees()},[loggedIn]);
  useEffect(() => {
    handleEmployees();
  }, [role]);

  const closeErrorPopup = () => {
    setPopupOpened(false);
    resetMessages();
  };

  const resetMessages = () => {
    setError("");
    setSuccess("");
  };

  if (isLoading) {
    return <div></div>;
  }

  return (
    <main className={styles.page}>
      <Routes>
        <Route
          element={
            <ProtectedRoutes
              loggedIn={loggedIn}
              handleSignOut={handleSignOut}
            />
          }
        >
          <Route path="/" element={<Main />} />

          <Route
            path="tests"
            element={<Tests allTestsResults={allTestsResults} />}
          />

          <Route
            path="tests/:id"
            element={
              <Test
                test={expressTest}
                onSendTestResult={handleSendTestResult}
                resultOfPsychoTest={resultOfPsychoTest}
              />
            }
          />

          <Route path="advices" element={<Advices />} />

          <Route path="events" element={<Events />} />

          <Route path="bookmarks" element={<Bookmarks />} />

          <Route path="calendar" element={<Calendar />} />
          <Route
            path="account"
            element={
              <Account
                handleChangeUserInfo={handleChangeUserInfo}
                success={success}
                error={error}
                closeErrorPopup={closeErrorPopup}
                popupOpened={popupOpened}
              />
            }
          />
          <Route
            path="myteam"
            element={
              <Myteam
                success={success}
                error={error}
                closeErrorPopup={closeErrorPopup}
                popupOpened={popupOpened}
                resetMessages={resetMessages}
                handleSendInviteCode={handleSendInviteCode}
                employees={employees}
              />
            }
          />
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
        <Route
          path="password-reset"
          element={
            <RefreshPasswordPage
              handleSendResetCode={handleSendResetCode}
              handleResetPassword={handleResetPassword}
              success={success}
              error={error}
              closeErrorPopup={closeErrorPopup}
              popupOpened={popupOpened}
            />
          }
        />
      </Routes>
    </main>
  );
};
