import styles from "./header.module.css";
import icon from "@/assets/search_icon.svg";
import { NavLink } from "react-router-dom";
import { LogoSideMenu } from "@/shared/ui/LogoSideMenu/LogoImg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink className={styles.logo} to="/">
        <LogoSideMenu />
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
