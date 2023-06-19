import styles from "./photosection.module.scss";
import { ReactElement } from "react";

interface Props {
  photo: string;
  handleClick: () => void;
  firstName: string;
  lastName: string;
  avatar: string;
}
export const PhotoSection = ({
  photo,
  handleClick,
  firstName,
  lastName,
  avatar,
}: Props): ReactElement => {
  return (
    <div className={styles.contentPhoto}>
      <div className={styles.avatarArea}>
        {photo ? (
          <img
            className={styles.avatarPhoto}
            src={photo || avatar}
            alt="фотография пользователя"
          />
        ) : (
          <div className={`${styles.avatarPhoto} ${styles.avatarPhotoNo}`}>
            {`${firstName[0]}${lastName[0]}`}
          </div>
        )}
        <button
          onClick={handleClick}
          className={styles.avatarButton}
          type="button"
          aria-label="Изменить аватар пользователя"
        />
      </div>
    </div>
  );
};
