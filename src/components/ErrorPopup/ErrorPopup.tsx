import classes from "./errorpopup.module.css";
import Warning from "@/assets/warning__28.svg";
import React from "react";

interface ErrorPopupProps {
  closeErrorPopup: () => void;
  popupOpened: boolean;
}

export const ErrorPopup: React.FC<ErrorPopupProps> = ({
  closeErrorPopup,
  popupOpened,
}) => {
  return (
    <div
      className={
        !popupOpened
          ? classes.errorPopup
          : `${classes.errorPopup} ${classes.errorPopupOpened}`
      }
    >
      <button onClick={() => closeErrorPopup()} className={classes.closeBtn} />
      <img src={Warning} className={classes.warningImg} alt="warning image" />
      <p className={classes.warningText}>Неверный логин или пароль</p>
    </div>
  );
};
