import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Main } from "../../pages/main/Main";
import { Tests } from "../../pages/tests/Tests";
import { Advices } from "../../pages/advices/Advices";
import { Events } from "../../pages/events/Events";
import { Bookmarks } from "../../pages/bookmarks/Bookmarks";
import { Calendar } from "../../pages/calendar/Calendar";
import styles from "./app.module.css";
import { ProtectedRoutes } from "@/components/ProtectedRoutes";
import { LoginPage } from "@/pages/login/LoginPage";
import { RegisterPage } from "@/pages/register/RegisterPage";
import { RefreshPasswordPage } from "@/pages/refreshpassword/RefreshPasswordPage";

export const App = () => {
  const [loggedIn] = useState(true);

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
        </Route>
        <Route path="sign-in" element={<LoginPage />} />
        <Route path="sign-up" element={<RegisterPage />} />
        <Route path="refresh-password" element={<RefreshPasswordPage />} />
      </Routes>
    </main>
  );
};
