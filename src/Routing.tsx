import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "@/components/ProtectedRoutes.js";
import { Main } from "@/pages/main/Main.js";
import { Tests } from "@/pages/tests/Tests.js";
import { Test } from "@/components/Test/Test.js";
import { Advices } from "@/pages/advices/Advices.js";
import { Events } from "@/pages/events/Events.js";
import { Bookmarks } from "@/pages/bookmarks/Bookmarks.js";
import { Calendar } from "@/pages/calendar/Calendar.js";
import { Account } from "@/pages/account/Account.js";
import { Myteam } from "@/components/Myteam/Myteam.js";
import { LoginPage } from "@/pages/login/LoginPage.js";
import { RegisterPage } from "@/pages/register/RegisterPage.js";
import { RefreshPasswordPage } from "@/pages/refreshpassword/RefreshPasswordPage.js";
import React from "react";

interface Props {
  loggedIn: any;
  handleSignOut: any;
  allTestsResults: any;
  expressTest: any;
  handleSendTestResult: any;
  resultOfPsychoTest: any;
  handleChangeUserInfo: any;
  success: any;
  error: any;
  closeErrorPopup: any;
  popupOpened: any;
  resetMessages: any;
  employees: any;
  handleSendInviteCode: any;
  handleLogin: any;
  handleRegister: any;
  handleSendResetCode: any;
  handleResetPassword: any;
}
export const Routing: React.FC<Props> = ({
  loggedIn,
  handleSignOut,
  allTestsResults,
  expressTest,
  handleSendTestResult,
  resultOfPsychoTest,
  handleChangeUserInfo,
  success,
  error,
  closeErrorPopup,
  popupOpened,
  resetMessages,
  employees,
  handleSendInviteCode,
  handleLogin,
  handleRegister,
  handleSendResetCode,
  handleResetPassword,
}) => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoutes loggedIn={loggedIn} handleSignOut={handleSignOut} />
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
  );
};
