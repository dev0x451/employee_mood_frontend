import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { useAppSelector } from "@/store/hooks";
import { selectRole } from "@/store/reducers/currentUser/currentUserReducer";
import cn from "classnames";

import {
  homeIcon,
  calendarIcon,
  advicesIcon,
  eventsIcon,
  bookmarkIcon,
  questionIcon,

  myTeamIcon

} from "@/assets";

export const Navbar = () => {
  const [isChief, setIsChief] = useState(false)
  const user = useAppSelector(selectRole);

  const notificationClassname = cn(styles.logoContainer, styles.notification )

  const linkClassName = (isActive: boolean) => {
    if (isActive) {
      return `${styles.commonLink} ${styles.activeLink}`;
    } else return `${styles.commonLink} ${styles.inactiveLink}`;
  };

  useEffect (() => {
    setIsChief(user !== 'employee')
  }, [user])

  return (
    <aside className={styles.aside}>
      <div className={styles.navLinks}>
        <NavLink className={({ isActive }) => linkClassName(isActive)} to="/">
          <div className={styles.logoContainer}>
            {homeIcon}
          </div>
          Главная
        </NavLink>
        <NavLink
          className={({ isActive }) => linkClassName(isActive)}
          to="/tests"
        >
          <div className={styles.logoContainer}>
            {questionIcon}
          </div>
          Тесты
          <div className={notificationClassname}>
            {3}
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) => linkClassName(isActive)}
          to="/advices"
        >
          <div className={styles.logoContainer}>
            {advicesIcon}
          </div>
          Советы
        </NavLink>
        <NavLink
          className={({ isActive }) => linkClassName(isActive)}
          to="/events"
        >
          <div className={styles.logoContainer}>
            {eventsIcon}
          </div>
          Мероприятия
        </NavLink>
        <NavLink
          className={({ isActive }) => linkClassName(isActive)}
          to="/bookmarks"
        >
          <div className={styles.logoContainer}>
            {bookmarkIcon}
          </div>
          Закладки
        </NavLink>
        <NavLink
          className={({ isActive }) => linkClassName(isActive)}
          to="/calendar"
        >
          <div className={styles.logoContainer}>
            {calendarIcon}
          </div>
         Календарь
        </NavLink>

        {isChief && (
          <NavLink
            className={({ isActive }) => linkClassName(isActive)}
            to="/myteam"
          >
            <div className={styles.logoContainer}>
              {myTeamIcon}
            </div>
            Моя команда
          </NavLink>
        )}
      </div>
    </aside>
  );
};
