import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "@/components/ProtectedRoutes.js";
import { Main } from "@/pages/main/Main.js";
import { Tests } from "@/pages/tests/Tests.js";
import { Test } from "@/components/Test/Test.js";
import { BurnoutTest } from "./components/BurnoutTest/BurnoutTest";
import { Advices } from "@/pages/advices/Advices.js";
import { Events } from "@/pages/events/Events.js";
import { Bookmarks } from "@/pages/bookmarks/Bookmarks.js";
import { Pagenotfound } from "./pages/pagenotfound/Pagenotfound";
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
  burnoutTest: any;
  handleSendTestResult: any;
  resultOfPsychoTest: any;
  handleChangeUserInfo: any;
  success: any;
  error: any;
  employees: any;
  handleSendInviteCode: any;
  handleLogin: any;
  handleRegister: any;
  handleSendResetCode: any;
  handleResetPassword: any;
  resetMessages: any;
  showAvatarError: any;
  openTestAlertPopup: any;
}
export const Routing: React.FC<Props> = ({
  loggedIn,
  handleSignOut,
  allTestsResults,
  expressTest,
  burnoutTest,
  handleSendTestResult,
  resultOfPsychoTest,
  handleChangeUserInfo,
  success,
  error,
  employees,
  handleSendInviteCode,
  handleLogin,
  handleRegister,
  handleSendResetCode,
  handleResetPassword,
  resetMessages,
  showAvatarError,
  openTestAlertPopup,
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
          path="tests/express"
          element={
            <Test
              test={expressTest}
              onSendTestResult={handleSendTestResult}
              resultOfPsychoTest={resultOfPsychoTest}
              openTestAlertPopup={openTestAlertPopup}
            />
          }
        />

        <Route
          path="tests/burnout"
          element={
            <BurnoutTest
              test={burnoutTest}
              onSendTestResult={handleSendTestResult}
              resultOfPsychoTest={resultOfPsychoTest}
              openTestAlertPopup={openTestAlertPopup}
            />
          }
        />

        <Route path="advices" element={<Advices />} />

        <Route path="events" element={<Events />} />

        <Route path="bookmarks" element={<Bookmarks />} />

        <Route
          path="account"
          element={
            <Account
              handleChangeUserInfo={handleChangeUserInfo}
              error={error}
              showAvatarError={showAvatarError}
            />
          }
        />
        <Route
          path="myteam"
          element={
            <Myteam
              resetMessages={resetMessages}
              success={success}
              handleSendInviteCode={handleSendInviteCode}
              employees={employees}
            />
          }
        />

        <Route path="*" element={<Pagenotfound />} />
      </Route>
      <Route path="login" element={<LoginPage handleLogin={handleLogin} />} />
      <Route
        path="register"
        element={<RegisterPage handleRegister={handleRegister} />}
      />
      <Route
        path="password-reset"
        element={
          <RefreshPasswordPage
            handleSendResetCode={handleSendResetCode}
            handleResetPassword={handleResetPassword}
          />
        }
      />
    </Routes>
  );
};
