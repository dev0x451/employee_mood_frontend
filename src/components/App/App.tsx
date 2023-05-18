import { useState } from 'react'
import {
  Route,
  Routes,
} from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Navbar from '../Navbar/Navbar';
import Guestpage from '../Guestpage/Guestpage';

import styles from './app.module.css';

function App() {

  return (
    <main className={styles.page}>
      <Navbar/>
      <Routes>

        //это просто черновая заделка, естесственно навбар и хоумпейдж на одном роуте
        <Route path='home' element={<Homepage/>}/>

        <Route path='guest' element={<Guestpage/>}/>

      </Routes>

      {/* <Navbar/> */}
      {/* <Homepage/> */}
    </main>
  )
}

export default App
