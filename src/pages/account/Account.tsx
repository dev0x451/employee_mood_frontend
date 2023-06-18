import { ReactElement, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectUserInfo } from "@/store/reducers/currentUser/currentUserReducer";
import { setErrorMessage } from "@/store/reducers/alertError/alertErrorReducer";
import * as alertErrorActions from "@/store/reducers/alertError/alertErrorReducer";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { PhotoSection } from "./components/PhotoSection/PhotoSection";
import { PhotoSettingsPopup } from "./components/PhotoSettingsPopup/PhotoSettingsPopup";
import { aboutHandler } from "./helpers/aboutHandler";
import { removePhoto, uploadPhoto } from "./helpers/handlePhotoSettings";
import styles from "./account.module.scss";
import { UserInfo } from "@/types";
import { BASE_URL_MEDIA } from "@/shared/constants";
import { useEscapeKey } from "@/shared/hooks/useEscapeKey";
import { Navbar } from "@/components/Navbar/Navbar";
import { ButtonsList } from "@/pages/account/components/ButtonsList/ButtonsList";

interface Props {
  handleChangeUserInfo: (userInfo: UserInfo, toDeletePhoto: string) => void;
}
export const Account = ({ handleChangeUserInfo }: Props): ReactElement => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectUserInfo);
  const errorMessage = useAppSelector(alertErrorActions.selectErrorMessage);
  const [photo, setPhoto] = useState(
    currentUser.avatar !== null ? `${BASE_URL_MEDIA}${currentUser.avatar}` : ""
  );
  const [about, setAbout] = useState(currentUser.about || "");
  const [aboutError, setAboutError] = useState("");
  const [toDeletePhoto, setToDeletePhoto] = useState("");
  const [isPhotoClicked, setIsPhotoClicked] = useState<boolean>(false);

  useEscapeKey(() => setIsPhotoClicked(false));

  const handleUpdateUser = () => {
    const userInfo: UserInfo = {
      about: about,
    };

    if (photo.includes("base64")) {
      userInfo.avatar = photo;
    }

    handleChangeUserInfo(userInfo, toDeletePhoto);
    if (errorMessage) {
      setPhoto(
        currentUser.avatar !== null
          ? `${BASE_URL_MEDIA}${currentUser.avatar}`
          : ""
      );
    }
  };

  const cancelSettings = () => {
    setAbout(currentUser.about || "");
    setPhoto(
      currentUser.avatar !== null
        ? `${BASE_URL_MEDIA}${currentUser.avatar}`
        : ""
    );
  };

  const showAvatarError = () => {
    dispatch(setErrorMessage("Фотография неподходящего размера или формата"));
  };

  return (
    <>
      <div className="page-container">
        <Navbar />
        <div className={styles.account}>
          <div className={styles.accountContainer}>
            <h1 className={styles.title}>Контактная информация</h1>
            <div className={styles.content}>
              <PhotoSettingsPopup
                closePopup={() => setIsPhotoClicked(false)}
                isPhotoClicked={isPhotoClicked}
                uploadPhoto={(e: any) =>
                  uploadPhoto(e, setPhoto, setIsPhotoClicked, showAvatarError)
                }
                removePhoto={() =>
                  removePhoto(setPhoto, setToDeletePhoto, setIsPhotoClicked)
                }
              />
              <PhotoSection
                photo={photo}
                handleClick={() => setIsPhotoClicked(!isPhotoClicked)}
                firstName={currentUser.first_name}
                lastName={currentUser.last_name}
                avatar={
                  currentUser.avatar !== null
                    ? `${BASE_URL_MEDIA}${currentUser.avatar}`
                    : ""
                }
              />
              <AboutSection
                about={about}
                aboutError={aboutError}
                aboutHandler={(e) => aboutHandler(e, setAbout, setAboutError)}
              />
            </div>
            <ButtonsList
              handleUpdateUser={handleUpdateUser}
              aboutError={aboutError}
              cancelSettings={cancelSettings}
            />
          </div>
        </div>
      </div>
    </>
  );
};
