import styles from "./popupwithbackground.module.scss";
import React, {ReactNode} from "react";
import { useEscapeKey } from "@/shared/hooks/useEscapeKey";

interface Props {
  closePopup: () => void;
  popupVisible: boolean;
  children: ReactNode;
}

export const PopupWithBackground: React.FC<Props> = ({
  closePopup,
  popupVisible,
  children
}) => {
  useEscapeKey(closePopup);
  const handleCloseOutside = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  };

  return (
    <div
      onClick={(e) => handleCloseOutside(e)}
      className={
        popupVisible
          ? `${styles.popupWithBackground} ${styles.popupWithBackgroundActive}`
          : styles.popupWithBackground
      }
    >
      {children}
    </div>
  );
};
