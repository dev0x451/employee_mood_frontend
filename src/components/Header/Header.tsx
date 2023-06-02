import styles from "./header.module.css";
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
      <div className={styles.profileAndNotify}>
        <div className={styles.notify}></div>
        <div className={styles.profile}></div>
      </div>
    </header>
  );
};
