import styles from "./photosettingspopup.module.css";
import React from "react";
import UploadIcon from "./folder_20.svg";
import DeleteIcon from "./door_20.svg";

interface Props {
  isPhotoClicked: boolean;
  uploadPhoto: (e: any) => void;
  removePhoto: () => void;
}
export const PhotoSettingsPopup: React.FC<Props> = ({
  isPhotoClicked,
  uploadPhoto,
  removePhoto,
}) => {
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
        <label className={styles.photoSettingsText} htmlFor="photo">
          Загрузить фотографию
        </label>
        <input
          onChange={(e) => uploadPhoto(e)}
          type="file"
          id="photo"
          accept=".jpg, .jpeg, .png"
          className={styles.hidden}
        />
      </li>
      <li
        onClick={() => removePhoto()}
        className={`${styles.photoSettingsListItem} ${styles.photoSettingsListItemDelete}`}
      >
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
