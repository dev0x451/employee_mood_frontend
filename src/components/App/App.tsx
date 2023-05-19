import { useState } from 'react'
import {
  Route,
  Routes,
} from 'react-router-dom';
import {Homepage} from '../Homepage/Homepage';
import {Navbar} from '../Navbar/Navbar';
import {Guestpage} from '../Guestpage/Guestpage';

import styles from './app.module.css';

export const App = () => {

  return (
    <main className={styles.page}>
      <Navbar/>
      <Routes>

        <Route path='home' element={<Homepage/>}/>

        <Route path='guest' element={<Guestpage/>}/>

      </Routes>
    </main>
  )
}
