import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import { LogoSideMenu } from "@/shared/ui/LogoSideMenu/LogoImg";
import { AccountPopup } from "@/components/AccountPopup/AccountPopup";
import { useState } from "react";

interface Props {
  handleSignOut: () => void;
}

export const Header: React.FC<Props> = ({ handleSignOut }) => {
  const [isAccountPopupOpened, setIsAccountPopupOpened] = useState(false);

  const openAccountPopup = () => {
    if (!isAccountPopupOpened) {
      setIsAccountPopupOpened(true);
    } else {
      setIsAccountPopupOpened(false);
    }
  };

  const closeAccountPopup = () => {
    if (isAccountPopupOpened) {
      setIsAccountPopupOpened(false);
    }
  };

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
        <button
          onClick={() => openAccountPopup()}
          className={styles.profileBtn}
        ></button>
      </div>
      <AccountPopup
        isAccountPopupOpened={isAccountPopupOpened}
        closeAccountPopup={closeAccountPopup}
        handleSignOut={handleSignOut}
      />
    </header>
  );
};
