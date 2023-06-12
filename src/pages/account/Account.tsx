import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./account.module.scss";
import React, { useState } from "react";
import { PhotoSettingsPopup } from "@/components/PhotoSettingsPopup/PhotoSettingsPopup";
import { Button } from "@/shared/ui/Button/Button";
import { useAppSelector } from "@/store/hooks";
import {
  selectAbout,
  selectAvatar,
  selectFirstName,
  selectLastName,
  selectPosition,
} from "@/store/reducers/currentUser/currentUserReducer";
import { ErrorMessage } from "@/shared/ui/ErrorMessage/ErrorMessage";
import { AreYouSurePopup } from "@/components/AreYouSurePopup/AreYouSurePopup";
import { UserInfo } from "@/types";
import { useEscapeKey } from "@/shared/hooks/useEscapeKey";

interface Props {
  handleChangeUserInfo: (userInfo: UserInfo) => void;
}
export const Account: React.FC<Props> = ({ handleChangeUserInfo }) => {
  const BASE_URL = "https://em-dev.usolcev.com";
  const photoLink = useAppSelector(selectAvatar);
  const initialPhoto = photoLink !== null ? `${BASE_URL}${photoLink}` : "";
  const [isPhotoClicked, setIsPhotoClicked] = useState<boolean>(false);
  const [isConfirmPopupOpened, setIsConfirmPopupOpened] =
    useState<boolean>(false);
  const [photo, setPhoto] = useState(initialPhoto);
  const [about, setAbout] = useState(useAppSelector(selectAbout) || "");
  const firstName = useAppSelector(selectFirstName);
  const lastName = useAppSelector(selectLastName);
  const position = useAppSelector(selectPosition);
  const initialAbout = useAppSelector(selectAbout);

  const [aboutError, setAboutError] = useState("");

  const aboutHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const target = e.target as HTMLTextAreaElement;
    setAbout(target.value);
    if (target.value.length < 2 && target.value.length) {
      setAboutError("Минимальное количество символов: 2");
    } else if (target.value.length > 256) {
      setAboutError("Максимальное количество символов: 256");
    } else {
      setAboutError("");
    }
  };

  const handleUpdateUser = () => {
    const photoToSubmit = photo === initialPhoto ? null : photo;
    handleChangeUserInfo({ photoToSubmit, about });
  };

  const closePhotoSettings = () => {
    setIsPhotoClicked(false);
  };

  useEscapeKey(() => setIsPhotoClicked(false));

  const closeConfirmPopup = () => {
    setIsConfirmPopupOpened(false);
  };

  const uploadPhoto = async (e: any) => {
    const file = e.target.files[0];
    const base64: string = (await convertBase64(file)) as string;
    setPhoto(base64);
    setIsPhotoClicked(false);
  };

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const removePhoto = () => {
    setPhoto("");
    setIsPhotoClicked(false);
  };

  const cancelSettings = () => {
    closeConfirmPopup();
    setAbout(initialAbout || "");
    setPhoto(initialPhoto || "");
  };

  return (
    <>
      <div className="page-container">
        <Navbar />
        <div className={styles.account}>
          <ul className={styles.containersList}>
            <li className={styles.containersListItem}>
              <h1 className={styles.title}>Контактная информация</h1>
              <div className={styles.contactInfo}>
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
                    <div
                      className={`${styles.avatarPhoto} ${styles.avatarPhotoNo}`}
                    >
                      {`${firstName[0]}${lastName[0]}`}
                    </div>
                  )}
                  <button
                    onClick={() => setIsPhotoClicked(!isPhotoClicked)}
                    className={styles.avatarButton}
                    type="button"
                    aria-label="Изменить аватар пользователя"
                  />
                </div>
                <ul className={styles.textInfoList}>
                  <li
                    className={styles.nameInfo}
                  >{`${firstName} ${lastName}`}</li>
                  <li className={styles.jobInfo}>{position}</li>
                </ul>
              </div>
            </li>
            <li className={styles.containersListItem}>
              <h2 className={styles.titleAbout}>Обо мне</h2>
              <textarea
                className={styles.textarea}
                value={about}
                name={about}
                onChange={(e) => aboutHandler(e)}
                maxLength={257}
              />
            </li>
            {aboutError && (
              <div className={styles.aboutError}>
                <ErrorMessage>{aboutError}</ErrorMessage>
              </div>
            )}
          </ul>
          <ul className={styles.buttonsList}>
            <li>
              <Button
                handleClick={handleUpdateUser}
                disabled={aboutError.length !== 0}
                mode="primary"
                title="Сохранить"
                width="200px"
              />
            </li>
            <li>
              <button
                onClick={() => setIsConfirmPopupOpened(true)}
                className={styles.cancelButton}
              >
                Отменить
              </button>
            </li>
          </ul>
        </div>
      </div>
      <AreYouSurePopup
        isOpened={isConfirmPopupOpened}
        closeConfirmPopup={closeConfirmPopup}
        cancelSettings={cancelSettings}
      />
    </>
  );
};
