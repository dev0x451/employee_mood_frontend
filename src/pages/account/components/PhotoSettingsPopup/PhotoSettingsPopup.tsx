import styles from "./photosettingspopup.module.css";
import React, { useRef } from "react";
import UploadIcon from "../../ui/folder_20.svg";
import DeleteIcon from "../../ui/door_20.svg";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";

interface Props {
  isPhotoClicked: boolean;
  uploadPhoto: (e: any) => void;
  removePhoto: () => void;
  closePopup: () => void;
}
export const PhotoSettingsPopup: React.FC<Props> = ({
  closePopup,
  isPhotoClicked,
  uploadPhoto,
  removePhoto,
}) => {
  const ref = useRef(null);
  useOutsideClick(closePopup, ref);
  return (
    <ul
      className={
        !isPhotoClicked
          ? styles.photoSettingsList
          : `${styles.photoSettingsList} ${styles.photoSettingsListOpened}`
      }
      ref={ref}
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
