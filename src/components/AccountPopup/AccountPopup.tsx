import styles from "./accountpopup.module.css";
import React, { useRef } from "react";
import SettingsIcon from "./settings_20.svg";
import SignOutIcon from "./door_20.svg";
import { useNavigate } from "react-router-dom";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";
import { useEscapeKey } from "@/shared/hooks/useEscapeKey";

interface Props {
  isAccountPopupOpened: boolean;
  closeAccountPopup: () => void;
  handleSignOut: () => void;
}
export const AccountPopup: React.FC<Props> = ({
  isAccountPopupOpened,
  closeAccountPopup,
  handleSignOut,
}) => {
  const navigate = useNavigate();
  const ref = useRef(null);

  const navigateToAccountPage = () => {
    navigate("/account");
    closeAccountPopup();
  };

  useEscapeKey(closeAccountPopup);
  useOutsideClick(closeAccountPopup, ref);

  return (
    <ul
      className={
        !isAccountPopupOpened
          ? styles.accountSettingsList
          : `${styles.accountSettingsList} ${styles.accountSettingsListOpened}`
      }
      ref={ref}
    >
      <li
        onClick={() => navigateToAccountPage()}
        className={styles.accountSettingsListItem}
      >
        <img
          src={SettingsIcon}
          alt="иконка настроек"
          className={styles.accountSettingsIcon}
        />
        <p className={styles.accountSettingsText}>Настройки</p>
      </li>
      <li
        onClick={() => handleSignOut()}
        className={styles.accountSettingsListItem}
      >
        <img
          src={SignOutIcon}
          alt="иконка выхода из приложения"
          className={styles.accountSettingsIcon}
        />
        <p className={styles.accountSettingsText}>Выйти</p>
      </li>
    </ul>
  );
};
