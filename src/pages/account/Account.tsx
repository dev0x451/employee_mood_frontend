import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./account.module.scss";
import React, { ReactElement, useState } from "react";
import { Button } from "@/shared/ui/Button/Button";
import { useAppSelector } from "@/store/hooks";
import { selectUserInfo } from "@/store/reducers/currentUser/currentUserReducer";
import { UserInfo } from "@/types";
import { AboutSection } from "@/pages/account/components/AboutSection/AboutSection";
import { convertBase64 } from "@/pages/account/helpers/convertBase64";
import { PhotoSection } from "@/pages/account/components/PhotoSection/PhotoSection";

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
  const [photo, setPhoto] = useState(initialPhoto);
  const [about, setAbout] = useState(currentUser.about || "");
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

  const removePhoto = () => {
    setPhoto("");
    setToDeletePhoto("/?delete_avatar=true");
    setIsPhotoClicked(false);
  };

  const cancelSettings = () => {
    setAbout(currentUser.about || "");
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
              <PhotoSection />
              <AboutSection
                about={about}
                aboutError={aboutError}
                aboutHandler={aboutHandler}
              />
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
