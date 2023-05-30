import classes from "./infopopup.module.css";
import Warning from "@/shared/ui/infoPopup/warning__28.svg";
import Success from "@/shared/ui/infoPopup/success.svg";
import React from "react";

interface InfoPopupProps {
  closeErrorPopup: () => void;
  popupOpened: boolean;
  isPositive: boolean;
  popupMessage: string;
}

export const InfoPopup: React.FC<InfoPopupProps> = ({
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
