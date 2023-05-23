import { useState } from 'react'
import {
  Route,
  Routes,
} from 'react-router-dom';

import {Navbar} from '../Navbar/Navbar';
import { Main } from '../pages/main/Main';
import { Tests } from '../pages/tests/Tests';
import { Advices } from '../pages/advices/Advices';
import { Events } from '../pages/events/Events';
import { Bookmarks } from '../pages/bookmarks/Bookmarks';
import { Calendar } from '../pages/calendar/Calendar';

import {Homepage} from '../Homepage/Homepage';
import {Guestpage} from '../Guestpage/Guestpage';

import styles from './app.module.css';

export const App = () => {

  return (
    <main className={styles.page}>
      <Navbar/>
      <Routes>
        <Route path='main' element={<Main/>}/>

        <Route path='tests' element={<Tests/>}/>

        <Route path='advices' element={<Advices/>}/>

        <Route path='events' element={<Events/>}/>

        <Route path='bookmarks' element={<Bookmarks/>}/>

        <Route path='calendar' element={<Calendar/>}/>

        {/* Оставил два нижних роута для совместимости коммитов */}
        <Route path='home' element={<Homepage/>}/>

        <Route path='guest' element={<Guestpage/>}/>

      </Routes>
    </main>
  )
}
