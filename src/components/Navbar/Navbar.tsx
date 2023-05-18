import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

function Navbar() {

  return (
      <aside className={styles.aside}>
        <NavLink className={({ isActive, isPending }) => isPending ? `${styles.pendinglink}` : isActive ? `${styles.activelink}` : `${styles.link}`}
          to='/home'>Homepage
        </NavLink>
        <NavLink className={({ isActive, isPending }) => isPending ? `${styles.pendinglink}` : isActive ? `${styles.activelink}` : `${styles.link}`}
          to='/guest'>Guestpage
        </NavLink>
      </aside>
  )
}

export default Navbar
