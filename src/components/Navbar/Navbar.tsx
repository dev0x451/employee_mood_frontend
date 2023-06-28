import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { useAppSelector } from "@/store/hooks";
import { selectRole } from "@/store/reducers/currentUser/currentUserReducer";
import { selectNotifications } from "@/store/reducers/notifications/notificationsReducer";
import cn from "classnames";

import {
  homeIcon,
  advicesIcon,
  eventsIcon,
  bookmarkIcon,
  questionIcon,
  myTeamIcon
} from "@/assets";

export const Navbar = () => {
  const [isChief, setIsChief] = useState(false);
  const [testsNumber, setTestsNumber] = useState(0);
  const [eventsNumber, setEventsNumber] = useState(0);

  const user = useAppSelector(selectRole);
  const notifications = useAppSelector(selectNotifications);

  const notificationClassname = cn(styles.logoContainer, styles.notification )

  const linkClassName = (isActive: boolean) => {
    if (isActive) {
      return `${styles.commonLink} ${styles.activeLink}`;
    } else return `${styles.commonLink} ${styles.inactiveLink}`;
  };

  useEffect (() => {
    setIsChief(user !== 'employee')
  }, [user])

  useEffect(() => {
    let evt = 0;
    let tst = 0;
    notifications?.forEach(notification => {
      if (notification.incident_type === 'Событие') evt++;
      if (notification.incident_type === 'Опрос') tst++;
    })
    setEventsNumber(evt);
    setTestsNumber(tst);
  }, [notifications])

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
          {(testsNumber > 0) ?
            <div className={notificationClassname}>
              {testsNumber}
            </div>
          : null}
        </NavLink>
        <NavLink
          className={({ isActive }) => linkClassName(isActive)}
          to="/useful"
        >
          <div className={styles.logoContainer}>
            {advicesIcon}
          </div>
          Полезное
        </NavLink>
        <NavLink
          className={({ isActive }) => linkClassName(isActive)}
          to="/events"
        >
          <div className={styles.logoContainer}>
            {eventsIcon}
          </div>
          Мероприятия
          {(eventsNumber > 0) ?
            <div className={notificationClassname}>
              {eventsNumber}
            </div>
          : null}
        </NavLink>
        <NavLink
          className={({ isActive }) => linkClassName(isActive)}
          to="/bookmarks"
        >
          <div className={styles.logoContainer}>
            {bookmarkIcon}
          </div>
          Сохранённое
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
