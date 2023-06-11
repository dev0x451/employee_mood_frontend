import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import { LogoImg } from "@/shared/ui/Logo/LogoImg";
import { AccountPopup } from "@/components/AccountPopup/AccountPopup";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import {
  selectAvatar,
  selectFirstName,
  selectLastName,
} from "@/store/reducers/currentUser/currentUserReducer";
import { useEscapeKey } from "@/shared/hooks/useEscapeKey";

interface Props {
  handleSignOut: () => void;
}

export const Header: React.FC<Props> = ({ handleSignOut }) => {
  const [isAccountPopupOpened, setIsAccountPopupOpened] = useState(false);
  const BASE_URL = "https://em-dev.usolcev.com";
  const photoLink = useAppSelector(selectAvatar);
  const initialPhoto = photoLink !== null ? `${BASE_URL}${photoLink}` : "";
  const firstName = useAppSelector(selectFirstName);
  const lastName = useAppSelector(selectLastName);
  const [photo, setPhoto] = useState(initialPhoto);

  useEffect(() => {
    setPhoto(initialPhoto);
  }, [initialPhoto]);

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

  useEscapeKey(closeAccountPopup);

  return (
    <header className={styles.header}>
      <NavLink className={styles.logo} to="/">
        <LogoImg />
      </NavLink>
      <input
        className={styles.input}
        name="main-search-input"
        placeholder="Поиск"
      />
      <div className={styles.profileAndNotify}>
        <div className={styles.notify}></div>
        <div onClick={() => openAccountPopup()} className={styles.profileBtn}>
          {photo ? (
            <img className={styles.profilePhoto} src={photo || initialPhoto} />
          ) : (
            <div className={`${styles.profileBtn} ${styles.noPhoto}`}>
              {`${firstName[0]}${lastName[0]}`}
            </div>
          )}
        </div>
      </div>
      <AccountPopup
        isAccountPopupOpened={isAccountPopupOpened}
        closeAccountPopup={closeAccountPopup}
        handleSignOut={handleSignOut}
      />
    </header>
  );
};
