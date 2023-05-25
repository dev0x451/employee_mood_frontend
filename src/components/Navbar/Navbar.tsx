import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { useAppSelector } from '@/store/hooks';
import { selectConstructor } from '@/store/reducers/constructor/constructorReducer';

import {
  homeIcon,
  calendarIcon,
  advicesIcon,
  eventsIcon,
  bookmarkIcon,
  questionIcon,
  teamIcon
} from "@/assets";

export const Navbar = () => {

  const isChief = useAppSelector(selectConstructor);

  const linkClassName = (isActive: boolean) => {
    if (isActive) {
      return `${styles.commonLink} ${styles.activeLink}`;
    } else return `${styles.commonLink} ${styles.inactiveLink}`;
  };

  return (
    <aside className={styles.aside}>
      <NavLink className={({ isActive }) => linkClassName(isActive)} to="/">
        <div className={styles.border}>
          {homeIcon}
        </div>
        Главная
      </NavLink>
      <NavLink
        className={({ isActive }) => linkClassName(isActive)}
        to="/tests"
      >
        <div className={styles.border}>
          {questionIcon}
        </div>
        Тесты
      </NavLink>
      <NavLink
        className={({ isActive }) => linkClassName(isActive)}
        to="/advices"
      >
        <div className={styles.border}>
          {advicesIcon}
        </div>
        Советы
      </NavLink>
      <NavLink
        className={({ isActive }) => linkClassName(isActive)}
        to="/events"
      >
        <div className={styles.border}>
          {eventsIcon}
        </div>
        Мероприятия
      </NavLink>
      <NavLink
        className={({ isActive }) => linkClassName(isActive)}
        to="/bookmarks"
      >
        <div className={styles.border}>
          {bookmarkIcon}
        </div>
        Закладки
      </NavLink>
      <NavLink
        className={({ isActive }) => linkClassName(isActive)}
        to="/calendar"
      >
        <div className={styles.border}>
          {calendarIcon}
        </div>
        Календарь
      </NavLink>

      {isChief &&  <NavLink
        className={({ isActive }) => linkClassName(isActive)}
        to="/myteam"
      >
        <div className={styles.border}>
          {teamIcon}
        </div>
        Моя команда
      </NavLink>}
    </aside>
  );
};
