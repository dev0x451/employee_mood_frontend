import { useState } from "react";
import styles from "./photosection.module.scss";
import { PhotoSettingsPopup } from "@/components/PhotoSettingsPopup/PhotoSettingsPopup";
import { useEscapeKey } from "@/shared/hooks/useEscapeKey";

export const PhotoSection = () => {
  const [isPhotoClicked, setIsPhotoClicked] = useState<boolean>(false);

  const closePhotoSettings = () => {
    setIsPhotoClicked(false);
  };

  useEscapeKey(() => setIsPhotoClicked(false));
  return (
    <div className={styles.contentPhoto}>
      <PhotoSettingsPopup
        closePopup={closePhotoSettings}
        isPhotoClicked={isPhotoClicked}
        uploadPhoto={uploadPhoto}
        removePhoto={removePhoto}
      />
      <div className={styles.avatarArea}>
        {photo ? (
          <img
            className={styles.avatarPhoto}
            src={photo || initialPhoto}
            alt="фотография пользователя"
          />
        ) : (
          <div className={`${styles.avatarPhoto} ${styles.avatarPhotoNo}`}>
            {`${currentUser.first_name[0]}${currentUser.last_name[0]}`}
          </div>
        )}
        <button
          onClick={() => setIsPhotoClicked(!isPhotoClicked)}
          className={styles.avatarButton}
          type="button"
          aria-label="Изменить аватар пользователя"
        />
      </div>
    </div>
  );
};
