import styles from "./photosettingspopup.module.css";
import React from "react";
import UploadIcon from "./folder_20.svg";
import DeleteIcon from "./door_20.svg";

interface Props {
  isPhotoClicked: boolean;
}
export const PhotoSettingsPopup: React.FC<Props> = ({ isPhotoClicked }) => {
  return (
    <ul
      className={
        !isPhotoClicked
          ? styles.photoSettingsList
          : `${styles.photoSettingsList} ${styles.photoSettingsListOpened}`
      }
    >
      <li className={styles.photoSettingsListItem}>
        <img
          src={UploadIcon}
          alt="иконка загрузки фотографии"
          className={styles.photoSettingsIcon}
        />
        <p className={styles.photoSettingsText}>Загрузить фотографию</p>
      </li>
      <li className={styles.photoSettingsListItem}>
        <img
          src={DeleteIcon}
          alt="иконка удаления фотографии"
          className={styles.photoSettingsIcon}
        />
        <p className={styles.photoSettingsText}>Удалить фотографию</p>
      </li>
    </ul>
  );
};
