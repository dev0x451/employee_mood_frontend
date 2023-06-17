import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./account.module.scss";
import React, { ReactElement, useState } from "react";
import { PhotoSettingsPopup } from "@/components/PhotoSettingsPopup/PhotoSettingsPopup";
import { Button } from "@/shared/ui/Button/Button";
import { useAppSelector } from "@/store/hooks";
import { selectUserInfo } from "@/store/reducers/currentUser/currentUserReducer";
import { ErrorMessage } from "@/shared/ui/ErrorMessage/ErrorMessage";
import { UserInfo } from "@/types";
import { useEscapeKey } from "@/shared/hooks/useEscapeKey";
import PseudoInput from "@/pages/account/components/PseudoInput/PseudoInput";

interface Props {
  handleChangeUserInfo: (userInfo: UserInfo, toDeletePhoto: string) => void;
  showAvatarError: () => void;
  error: string;
}
export const Account = ({
  handleChangeUserInfo,
  error,
  showAvatarError,
}: Props): ReactElement => {
  const BASE_URL = "https://em-dev.usolcev.com";
  const currentUser = useAppSelector(selectUserInfo);

  const initialPhoto =
    currentUser.avatar !== null ? `${BASE_URL}${currentUser.avatar}` : "";
  const [isPhotoClicked, setIsPhotoClicked] = useState<boolean>(false);
  const [photo, setPhoto] = useState(initialPhoto);
  const [about, setAbout] = useState(currentUser.about || "");
  const initialAbout = currentUser.about;
  const [aboutError, setAboutError] = useState("");
  const [toDeletePhoto, setToDeletePhoto] = useState("");

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
    if (photo.includes("base64")) {
      handleChangeUserInfo({ avatar: photo, about: about }, toDeletePhoto);
    } else {
      handleChangeUserInfo({ about: about }, toDeletePhoto);
    }
    if (error) {
      setPhoto(initialPhoto);
    }
  };

  const closePhotoSettings = () => {
    setIsPhotoClicked(false);
  };

  useEscapeKey(() => setIsPhotoClicked(false));

  const uploadPhoto = async (e: any) => {
    const file = e.target.files[0];
    if (file.size > 4000000 || !file.name.match(/(.jpg|.png|.jpeg)/)) {
      showAvatarError();
    } else {
      const base64: string = (await convertBase64(file)) as string;
      setPhoto(base64);
    }
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
    setToDeletePhoto("/?delete_avatar=true");
    setIsPhotoClicked(false);
  };

  const cancelSettings = () => {
    setAbout(initialAbout || "");
    setPhoto(initialPhoto || "");
  };

  return (
    <>
      <div className="page-container">
        <Navbar />
        <div className={styles.account}>
          <div className={styles.accountContainer}>
            <h1 className={styles.title}>Контактная информация</h1>
            <div className={styles.content}>
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
                    <div
                      className={`${styles.avatarPhoto} ${styles.avatarPhotoNo}`}
                    >
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
              <ul className={styles.contentAbout}>
                <li className={styles.contentAboutItem}>
                  <PseudoInput
                    label="Имя"
                    placeholder={currentUser.first_name}
                  />
                  <PseudoInput
                    label="Фамилия"
                    placeholder={currentUser.last_name}
                  />
                </li>
                <li className={styles.contentAboutItem}>
                  <PseudoInput
                    label="Телефон"
                    placeholder={currentUser.phone}
                  />
                  <PseudoInput label="Почта" placeholder={currentUser.email} />
                </li>
                <li className={styles.contentAboutItem}>
                  <div className={styles.interests}>
                    <h3 className={styles.contentAboutTitle}>Интересы</h3>
                  </div>
                  <div className={styles.about}>
                    <h3 className={styles.contentAboutTitle}>Обо мне</h3>
                    <textarea
                      className={styles.aboutTextarea}
                      value={about}
                      name={about}
                      onChange={(e) => aboutHandler(e)}
                      maxLength={257}
                    />
                    {aboutError && (
                      <div className={styles.aboutError}>
                        <ErrorMessage>{aboutError}</ErrorMessage>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>
            <ul className={styles.buttonsList}>
              <li>
                <Button
                  handleClick={handleUpdateUser}
                  disabled={aboutError.length !== 0}
                  mode="primary"
                  title="Сохранить"
                  width="222px"
                />
              </li>
              <li>
                <Button
                  handleClick={cancelSettings}
                  disabled={aboutError.length !== 0}
                  mode="empty"
                  title="Отменить"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
