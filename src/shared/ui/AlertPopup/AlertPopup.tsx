import classes from "./alertpopup.module.scss";
import Warning from "@/shared/ui/AlertPopup/ui/warning__28.svg";
import Success from "@/shared/ui/AlertPopup/ui/success.svg";
import React, { useRef } from "react";
import { useEscapeKey } from "@/shared/hooks/useEscapeKey";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";
import { CloseButton } from "@/shared/ui/CloseButton/CloseButton";

interface AlertPopupProps {
  resetMessages: () => void;
  isPositive: boolean;
  popupMessage: string;
}

export const AlertPopup: React.FC<AlertPopupProps> = ({
  resetMessages,
  isPositive,
  popupMessage,
}) => {
  const ref = useRef(null);

  useEscapeKey(resetMessages);
  useOutsideClick(resetMessages, ref);

  return (
    <div
      className={
        popupMessage
          ? `${classes.errorPopup} ${classes.errorPopupOpened}`
          : classes.errorPopup
      }
      ref={ref}
    >
      <CloseButton handleClick={resetMessages} />
      {isPositive ? (
        <img src={Success} className={classes.popupImg} alt="success image" />
      ) : (
        <img src={Warning} className={classes.popupImg} alt="warning image" />
      )}
      <p className={classes.popupText}>{popupMessage}</p>
    </div>
  );
};
