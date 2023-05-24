import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

import {
  homeIcon,
  calendarIcon,
  advicesIcon,
  eventsIcon,
  bookmarkIcon,
  questionIcon,
} from "@/assets";

export const Navbar = () => {
  const linkClassName = (isActive: boolean) => {
    if (isActive) {
      return `${styles.commonLink} ${styles.activeLink}`;
    } else return `${styles.commonLink} ${styles.inactiveLink}`;
  };

  return (
    <aside className={styles.aside}>
      <NavLink className={({ isActive }) => linkClassName(isActive)} to="/">
        {homeIcon}Главная
      </NavLink>
      <NavLink
        className={({ isActive }) => linkClassName(isActive)}
        to="/tests"
      >
        {questionIcon}Тесты
      </NavLink>
      <NavLink
        className={({ isActive }) => linkClassName(isActive)}
        to="/advices"
      >
        {advicesIcon}Советы
      </NavLink>
      <NavLink
        className={({ isActive }) => linkClassName(isActive)}
        to="/events"
      >
        {eventsIcon}Мероприятия
      </NavLink>
      <NavLink
        className={({ isActive }) => linkClassName(isActive)}
        to="/bookmarks"
      >
        {bookmarkIcon}Закладки
      </NavLink>
      <NavLink
        className={({ isActive }) => linkClassName(isActive)}
        to="/calendar"
      >
        {calendarIcon}Календарь
      </NavLink>
    </aside>
  );
};
