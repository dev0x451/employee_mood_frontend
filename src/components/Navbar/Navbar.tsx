import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { useAppSelector } from "@/store/hooks";
import { selectConstructor } from "@/store/reducers/constructor/constructorReducer";

import {
  homeIcon,
  calendarIcon,
  advicesIcon,
  eventsIcon,
  bookmarkIcon,
  questionIcon,

  myTeamIcon

} from "@/assets";

import logo from "@/assets/logo-with-name.svg";

export const Navbar = () => {
  const isChief = useAppSelector(selectConstructor);

  const linkClassName = (isActive: boolean) => {
    if (isActive) {
      return `${styles.commonLink} ${styles.activeLink}`;
    } else return `${styles.commonLink} ${styles.inactiveLink}`;
  };

  return (
    <aside className={styles.aside}>

      <NavLink className={styles.logo} to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      <div className={styles.navLinks}>
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

        {isChief && (
          <NavLink
            className={({ isActive }) => linkClassName(isActive)}
            to="/myteam"
          >
            {myTeamIcon}Моя команда
          </NavLink>
        )}
      </div>
    </aside>
  );
};
