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
import { BadInternetConnection } from "@/components/BadInternetConnection/BadInternetConnection";
import { ButtonsList } from "@/pages/account/components/ButtonsList/ButtonsList";
import {
  arrayEquals,
  getHobbiesId,
} from "@/pages/account/helpers/handleHobbiesSettings";
import { useNavigate } from "react-router-dom";
import { useOnlineCheck } from "@/shared/hooks/useOnlineCheck";

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
  const [hobbies, setHobbies] = useState(currentUser.hobbies || []);
  const [isHobbiesEqual, setIsHobbiesEqual] = useState(true);
  const [aboutError, setAboutError] = useState("");
  const [toDeletePhoto, setToDeletePhoto] = useState("");
  const [isPhotoClicked, setIsPhotoClicked] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();
  const isOnline = useOnlineCheck();

  const removeInterest = (index: number) => {
    setHobbies(hobbies.filter((_, i) => i !== index));
    setIsButtonDisabled(false);
  };

  useEscapeKey(() => setIsPhotoClicked(false));

  const handleUpdateUser = () => {
    const userInfo: UserInfo = {
      about: about,
    };

    if (photo.includes("base64")) {
      userInfo.avatar = photo;
    }
    arrayEquals(hobbies, currentUser.hobbies, setIsHobbiesEqual);
    if (isHobbiesEqual) {
      userInfo.hobbies = getHobbiesId(hobbies);
    }

    handleChangeUserInfo(userInfo, toDeletePhoto);
    if (errorMessage) {
      setPhoto(
        currentUser.avatar !== null
          ? `${BASE_URL_MEDIA}${currentUser.avatar}`
          : ""
      );
    }
    setIsButtonDisabled(true);
  };

  const handleSelectChange = (selectedOption: any) => {
    const isHobbyAdded = hobbies.some(
      (hobby) => hobby.id === selectedOption.id
    );
    if (!isHobbyAdded) {
      setHobbies((prevArray) => [
        ...prevArray,
        { id: selectedOption.id, name: selectedOption.name },
      ]);
      setIsButtonDisabled(false);
    }
  };

  const cancelSettings = () => {
    setAbout(currentUser.about || "");
    setPhoto(
      currentUser.avatar !== null
        ? `${BASE_URL_MEDIA}${currentUser.avatar}`
        : ""
    );
    setHobbies(currentUser.hobbies || []);
    navigate(-1);
  };

  const showAvatarError = () => {
    dispatch(setErrorMessage("Фотография неподходящего размера или формата"));
  };

  return (
    <>
      <div className="page-container">
        <Navbar />
        {isOnline ?
        <div className={styles.account}>
          <div className={styles.accountContainer}>
            <h1 className={styles.title}>Контактная информация</h1>
            <div className={styles.content}>
              <PhotoSettingsPopup
                closePopup={() => setIsPhotoClicked(false)}
                isPhotoClicked={isPhotoClicked}
                uploadPhoto={(e: any) =>
                  uploadPhoto(
                    e,
                    setPhoto,
                    setIsPhotoClicked,
                    showAvatarError,
                    setIsButtonDisabled
                  )
                }
                removePhoto={() =>
                  removePhoto(
                    setPhoto,
                    setToDeletePhoto,
                    setIsPhotoClicked,
                    setIsButtonDisabled
                  )
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
                aboutHandler={(e) =>
                  aboutHandler(e, setAbout, setAboutError, setIsButtonDisabled)
                }
                interests={hobbies}
                removeInterest={removeInterest}
                handleSelectChange={handleSelectChange}
              />
            </div>
            <ButtonsList
              handleUpdateUser={handleUpdateUser}
              cancelSettings={cancelSettings}
              disabled={isButtonDisabled}
            />
          </div>
        </div>
      : <BadInternetConnection/>}
      </div>
    </>
  );
};
