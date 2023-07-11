import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { FormikValues } from "formik";
import styles from "./app.module.css";

import * as ApiAuth from "@/shared/api/ApiAuth";
import * as Api from "@/shared/api/Api";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setErrorMessage } from "@/store/reducers/alertError/alertErrorReducer";
import { setSuccessMessage } from "@/store/reducers/alertSuccess/alertSuccessReducer";
import {resetAllCurrentUserData, setAllCurrentUserData, selectUserInfo} from "@/store/reducers/currentUser/currentUserReducer";
import { addNotifications } from "@/store/reducers/notifications/notificationsReducer";
import { addConditions, selectButtonConditions, addButtonCondition, addBurnoutLevet } from "@/store/reducers/conditionsBurnout/conditionsBurnoutReducer";

import {
  ExpressDiagnoseResponse,
  jwtTypes,
  MyFormValues,
  TestInterface,
  SubmitArguments,
  UserInfo,
  WebSocketMessage, MeetingInfo
} from "@/types";

import { BASE_URL_WSS } from "@/shared/constants";
import { Routing } from "@/Routing";
import { AlertPopup } from "@/shared/ui/AlertPopup/AlertPopup";

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [resultOfPsychoTest, setResultOfPsychoTest] = useState<ExpressDiagnoseResponse>();
  const [expressTest, setExpressTest] = useState<TestInterface | null>(null);
  const [burnoutTest, setBurnoutTest] = useState<TestInterface | null>(null);
  const [allTestsResults, setallTestsResults] = useState<ExpressDiagnoseResponse[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [events, setEvents] = useState([]);

  const currentUserInfo = useAppSelector(selectUserInfo);
  const buttonCondition = useAppSelector(selectButtonConditions);
  const role = useAppSelector((state) => state.currentUserSlice.currentUser.role);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
        auth();
    }
  }, [loggedIn]);

  async function auth () {
    setIsLoading(true);
    try {
      const response = await ApiAuth.checkToken();
      if (response.status === 200) {
        setLoggedIn(true);
        ["/login", "/register"].includes(pathname)
          ? navigate("/")
          : navigate(pathname);
      }
      await getUserInfo();
    } catch (err: any) {
      if (err.status === 400) {
        console.log("400 - токен не передан или передан не в том формате");
        navigate("/login");
      } else if (err.status === 401) {
        console.log("401 - переданный токен некорректен");
      }
    }
  }

  async function getUserInfo() {
    if (loggedIn) {
      try {
        const response = await Api.getUser();
        dispatch(setAllCurrentUserData(response.data));
        console.log("currentUser", response.data.role);
      } catch (err: any) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
  }

  async function handleChangeUserInfo(
    userInfo: UserInfo,
    toDeletePhoto: string
  ) {
    try {
      const response = await Api.changeUserInfo(userInfo, toDeletePhoto);
      if (response) {
        dispatch(setSuccessMessage("Изменения сохранены"));
        getUserInfo();
      }
    } catch (err) {
      dispatch(setErrorMessage("Что-то пошло не так. Попробуйте еще раз."));
    }
  }

  async function handleLogin(values: MyFormValues) {
    try {
      const response = await ApiAuth.loginUser(values);
      if (response.data.access) {
        localStorage.setItem("jwt", response.data.access);
        //setLoggedIn(true);
      }
    } catch {
      dispatch(setErrorMessage("Неверный логин или пароль"));
    }
  }

  function handleSignOut () {
    setLoggedIn(false);
    dispatch(resetAllCurrentUserData());
    navigate("/login");
    localStorage.removeItem("jwt");
    localStorage.removeItem("refresh");
  }

  async function handleRegister(values: FormikValues, invite_code: string) {
    try {
      const response = await ApiAuth.registerUser(values, invite_code);
      if (response) {
        const email = response.data.email;
        const password = values.password;
        await handleLogin({ email, password });
      }
    } catch {
      dispatch(setErrorMessage("Что-то пошло не так. Попробуйте еще раз"));
    }
  }

  async function handleSendResetCode(email: string) {
    try {
      const response = await ApiAuth.sendResetCode(email);
      if (response) {
        dispatch(setSuccessMessage("Письмо отправлено на почту"));
      }
    } catch (err) {
      dispatch(setErrorMessage("Не удалось найти пользователя с таким e-mail"));
    }
  }

  async function handleSendInviteCode(email: string) {
    try {
      const response = await Api.sendInviteCode(email);
      if (response) {
        dispatch(setSuccessMessage("Приглашение отправлено!"));
      }
    } catch (err) {
      dispatch(setErrorMessage("Пользователь с таким e-mail уже существует"));
    }
  }

  async function handleResetPassword(values: FormikValues, resetCode: string) {
    try {
      const response = await ApiAuth.resetPassword(values, resetCode);
      if (response) {
        navigate("/login");
      }
    } catch (err) {
      dispatch(setErrorMessage("Недействительный ключ"));
    }
  }


  async function handleSendTestResult(result: SubmitArguments) {
    try {
      const response = await Api.sendTestResults(result);
      setResultOfPsychoTest(response.data);

      // отправка GET запроса с ID пройденного теста, чтобы сделать уведомление неактивным
      try {
        const res = await Api.checkTestNotificationIsActive(result.survey.toString());
        if (res.data.results) Api.makeEventNotificationUnactive(res.data.results[0].id);
      } catch (err: any) {
        console.log(err);
      }

    } catch (err: any) {
      console.log(err);
    }
    getAllTestsResult();
    handleEmployees();
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

  async function getTestsBurnoutQuestions() {
    try {
      const response = await Api.getTestQuestions("2");
      setBurnoutTest(response.data);
    } catch (err: any) {
      console.log(err);
    }
  }

  async function getAllUserConditions() {
    try {
      const response = await Api.getAllUserConditions();
      dispatch(addConditions(response.data.results));
    } catch (err: any) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (loggedIn) {
      getAllTestsResult();
      getTestsQuestions();
      getTestsBurnoutQuestions();
      getAllUserConditions()
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
  useEffect(() => {
    handleEmployees();
  }, [role]);
  //

  function openTestAlertPopup () {
    dispatch(
      setErrorMessage(
        `Для перехода на следующий шаг нужно ответить на все вопросы`
      )
    );
  }

  //запрос мероприятий для вкладки мероприятия
  async function fetchEvents() {
    try {
      if (role === "hr" || role === "chief" || role === "employee") {
        const response = await Api.getEvents();
        // console.log(response)
        setEvents(response.data.results);
      }
    } catch (err: any) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchEvents();
  }, [role]);
  //
  // отпрвка мероприятия
  // async function postEvent() {
  //   try {
  //     // if (role === "hr" || role === "chief") {
  //       const response = await Api.postEvent();
  //       // console.log(response)
  //       setEvents(response.data.results);
  //     // }
  //   } catch (err: any) {
  //     console.log(err);
  //   }
  // }

  async function handleAddMeetingInfo ({userId, formattedDate, comment, level}: MeetingInfo) {
    try {
      await Api.sendMeetingInfo(userId, formattedDate, comment, level);
    } catch (err: any) {
      console.log(err);
    }
  }

  async function handleSetUserBurnout() {
    if (currentUserInfo) {
      try {
        const response = await Api.getUserBurnoutsGraph(currentUserInfo.id);
        if (response) {
          dispatch(addBurnoutLevet(response.data))
        }
      } catch (err: any) {
        console.log(err);
      }
    }
  }

  async function handleButtonConditionClick() {
    if (buttonCondition) {
      try {
        const response = await Api.sendUserCondition(buttonCondition);
        if (response) {
          dispatch(addButtonCondition(buttonCondition))
        }
      } catch (err: any) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    handleButtonConditionClick()
  }, [buttonCondition])

   // получение уведомлений о тестах и мероприятиях с помощью WebSocket
   useEffect(() => {
    const socket = new WebSocket(`${BASE_URL_WSS}/notifications?2`);

    socket.onmessage = (event) => {
      const newEvent = JSON.parse(event.data) as WebSocketMessage;
      dispatch(addNotifications(newEvent))
    }
    return () => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.close();
      }};
  }, []);

  useEffect(() => {
    if (currentUserInfo.id !== 0) {
      handleSetUserBurnout()
    }
  }, [currentUserInfo])

  useEffect(() => {
    if (loggedIn) {
      getAllTestsResult();
      getTestsQuestions();
      getTestsBurnoutQuestions();
      getAllUserConditions()
    }
  }, [loggedIn]);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <main className={styles.page}>
      <AlertPopup />
      <Routing
        loggedIn={loggedIn}
        handleSignOut={handleSignOut}
        allTestsResults={allTestsResults}
        expressTest={expressTest}
        burnoutTest={burnoutTest}
        handleSendTestResult={handleSendTestResult}
        resultOfPsychoTest={resultOfPsychoTest}
        handleChangeUserInfo={handleChangeUserInfo}
        employees={employees}
        events={events}
        handleSendInviteCode={handleSendInviteCode}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
        handleSendResetCode={handleSendResetCode}
        handleResetPassword={handleResetPassword}
        openTestAlertPopup={openTestAlertPopup}
        takeNewEmployeesList={handleEmployees}
        handleAddMeetingInfo={handleAddMeetingInfo}
        fetchEvents={fetchEvents}
      />
    </main>
  );
};
