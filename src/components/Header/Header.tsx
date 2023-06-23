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
import { selectNotifications } from "@/store/reducers/notifications/notificationsReducer";

const BASE_URL = "https://em-dev.usolcev.com";

interface Props {
  handleSignOut: () => void;
}

export const Header: React.FC<Props> = ({ handleSignOut }) => {

  const firstName = useAppSelector(selectFirstName);
  const lastName = useAppSelector(selectLastName);
  const allNotification = useAppSelector(selectNotifications);
  const photoLink = useAppSelector(selectAvatar);
  const initialPhoto = photoLink !== null ? `${BASE_URL}${photoLink}` : "";

  const [photo, setPhoto] = useState(initialPhoto);
  const [isAccountPopupOpened, setIsAccountPopupOpened] = useState(false);

  const handleNotificationClick = () => {
    alert('Выполнен умопомрачительный переход на вкладку "События, люди, явления')
  }

  const closeAccountPopup = () => {
    setIsAccountPopupOpened(false);
  };

  useEffect(() => {
    setPhoto(initialPhoto);
  }, [initialPhoto]);

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
        <div onClick={handleNotificationClick} className={styles.notify}>
          {(allNotification && allNotification?.length > 0) ?
            <div className={styles.notificationNumber}>
              {allNotification?.length}
            </div>
          : null}
        </div>
        <div
          onClick={() => setIsAccountPopupOpened(!isAccountPopupOpened)}
          className={styles.profileBtn}
        >
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
