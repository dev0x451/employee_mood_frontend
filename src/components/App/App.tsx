import { useState } from 'react'
import {
  Route,
  Routes,
} from 'react-router-dom';

import { Main } from '../pages/main/Main';
import { Tests } from '../pages/tests/Tests';
import { Advices } from '../pages/advices/Advices';
import { Events } from '../pages/events/Events';
import { Bookmarks } from '../pages/bookmarks/Bookmarks';
import { Calendar } from '../pages/calendar/Calendar';
import {Homepage} from '../Homepage/Homepage';
import {Guestpage} from '../Guestpage/Guestpage';
import styles from "./app.module.css";
import { ProtectedRoutes } from "@/components/ProtectedRoutes";
import { LoginPage } from "@/components/LoginPage/LoginPage";
import { RegisterPage } from "@/components/RegisterPage/RegisterPage";
import { RefreshPasswordPage } from "@/components/RefreshPasswordPage/RefreshPasswordPage";

export const App = () => {
  const [loggedIn] = useState(false);

  return (
    <main className={styles.page}>
      <Routes>
        <Route element={<ProtectedRoutes loggedIn={loggedIn} />}>
         <Route path='main' element={<Main/>}/>

         <Route path='tests' element={<Tests/>}/>

         <Route path='advices' element={<Advices/>}/>

         <Route path='events' element={<Events/>}/>

         <Route path='bookmarks' element={<Bookmarks/>}/>

         <Route path='calendar' element={<Calendar/>}/>

          {/* Оставил два нижних роута для совместимости коммитов */}
          <Route path='home' element={<Homepage/>}/>

          <Route path='guest' element={<Guestpage/>}/>
        </Route>
        <Route path="sign-in" element={<LoginPage />} />
        <Route path="sign-up" element={<RegisterPage />} />
        <Route path="refresh-password" element={<RefreshPasswordPage />} />
      </Routes>
    </main>
  );
};
