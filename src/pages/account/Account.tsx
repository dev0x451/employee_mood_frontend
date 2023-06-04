import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./account.module.css";
import React, { useState } from "react";
import { PhotoSettingsPopup } from "@/components/PhotoSettingsPopup/PhotoSettingsPopup";
import { Button } from "@/shared/ui/Button/Button";

export const Account = () => {
  const [isPhotoClicked, setIsPhotoClicked] = useState(false);

  const openPhotoSettings = () => {
    if (!isPhotoClicked) {
      setIsPhotoClicked(true);
    } else {
      setIsPhotoClicked(false);
    }
  };

  const closePhotoSettings = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (event.target === event.currentTarget) {
      setIsPhotoClicked(false);
    }
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className={styles.account} onClick={(e) => closePhotoSettings(e)}>
        <ul className={styles.containersList}>
          <li className={styles.accountInfoContainer}>
            <h1 className={styles.title}>Контактная информация</h1>
            <div className={styles.contactInfo}>
              <div className={styles.avatarArea}>
                <div className={`${styles.photo} ${styles.noPhoto}`}>ВБ</div>
                <button
                  onClick={() => openPhotoSettings()}
                  className={styles.avatarButton}
                  type="button"
                  aria-label="Изменить аватар пользователя"
                />
                <PhotoSettingsPopup isPhotoClicked={isPhotoClicked} />
              </div>
              <ul className={styles.textInfoList}>
                <li className={styles.nameInfo}>Вера Брежнева</li>
                <li className={styles.jobInfo}>идейный вдохновитель</li>
              </ul>
            </div>
          </li>
          <li className={styles.accountInfoContainer}>
            <h2 className={styles.titleAbout}>Обо мне</h2>
            <textarea className={styles.textarea} />
          </li>
        </ul>
        <ul className={styles.buttonsList}>
          <li>
            <Button mode="primary" title="Сохранить" width="200px" />
          </li>
          <li>
            <button className={styles.cancelButton}>Отменить</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
