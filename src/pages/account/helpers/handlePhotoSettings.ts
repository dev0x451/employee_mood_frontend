import { ChangeEvent } from "react";
import { convertBase64 } from "@/pages/account/helpers/convertBase64";

export const uploadPhoto = async (
  e: ChangeEvent<HTMLInputElement>,
  handleSetPhoto: (arg: string) => void,
  handlePhotoClicked: (arg: boolean) => void,
  handleShowAvatarError: () => void,
  handleDisabledButton: (arg: boolean) => void
) => {
  const files = e.target.files;
  if (files && files.length > 0) {
    const file = files[0];
    if (file.size > 4000000 || !file.name.match(/\.jpg$|\.png$|\.jpeg$/i)) {
      handleShowAvatarError();
    } else {
      try {
        const base64: string = (await convertBase64(file)) as string;
        handleSetPhoto(base64);
      } catch (error) {
        console.error(error);
      }
    }
  }
  handlePhotoClicked(false);
  handleDisabledButton(false);
};

export const removePhoto = (
  handleSetPhoto: (arg: string) => void,
  handleAddParams: (arg: string) => void,
  handlePhotoClicked: (arg: boolean) => void,
  handleDisabledButton: (arg: boolean) => void
) => {
  handleSetPhoto("");
  handleAddParams("/?delete_avatar=true");
  handlePhotoClicked(false);
  handleDisabledButton(false);
};
