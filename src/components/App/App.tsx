import { useState } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import {Homepage} from '../Homepage/Homepage';
import {Navbar} from '../Navbar/Navbar';
import {Guestpage} from '../Guestpage/Guestpage';

import styles from './app.module.css';
import {ProtectedRoutes} from "@/components/ProtectedRoutes";
import LoginPage from "@/components/LoginPage/LoginPage";

export const App = () => {

  const [loggedIn] = useState(false);

  return (
    <main className={styles.page}>
      <Navbar/>
      <Routes>
        <Route element={<ProtectedRoutes loggedIn={loggedIn} />}>
          <Route path='home' element={<Homepage/>}/>
          <Route path='guest' element={<Guestpage/>}/>
        </Route>
        <Route path='sign-in' element={<LoginPage/>}/>
      </Routes>
    </main>
  )
}
