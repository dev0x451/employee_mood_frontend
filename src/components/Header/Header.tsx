import styles from "./header.module.css";
import icon from "@/assets/search_icon.svg";
import { NavLink } from "react-router-dom";
import logo from "@/assets/logo-with-name.svg";


export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink className={styles.logo} to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <input
        className={styles.input}
        name="main-search-input"
        placeholder="Поиск"
      />
      <img className={styles.searchIcon} src={icon} alt="search icon" />
      <div className={styles.profileAndNotify}>
        <div className={styles.notify}></div>
        <div className={styles.profile}></div>
      </div>
    </header>
  );
};
