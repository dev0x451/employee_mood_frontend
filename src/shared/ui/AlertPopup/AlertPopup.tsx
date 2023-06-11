import classes from "./alertpopup.module.scss";
import Warning from "@/shared/ui/AlertPopup/ui/warning__28.svg";
import Success from "@/shared/ui/AlertPopup/ui/success.svg";
import React from "react";

interface AlertPopupProps {
  closeErrorPopup: () => void;
  popupOpened: boolean;
  isPositive: boolean;
  popupMessage: string;
}

export const AlertPopup: React.FC<AlertPopupProps> = ({
  closeErrorPopup,
  popupOpened,
  isPositive,
  popupMessage,
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
      {isPositive ? (
        <img src={Success} className={classes.popupImg} alt="success image" />
      ) : (
        <img src={Warning} className={classes.popupImg} alt="warning image" />
      )}
      <p className={classes.popupText}>{popupMessage}</p>
    </div>
  );
};
