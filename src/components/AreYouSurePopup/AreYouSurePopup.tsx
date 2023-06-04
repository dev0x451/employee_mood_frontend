import styles from "./areyousurepopup.module.css";
import QuestionIcon from "./question_outline_28.svg";
import { Button } from "@/shared/ui/Button/Button";
import React from "react";

interface Props {
  isOpened: boolean;
  closeConfirmPopup: () => void;
  cancelSettings: () => void;
}
export const AreYouSurePopup: React.FC<Props> = ({
  isOpened,
  closeConfirmPopup,
  cancelSettings,
}) => {
  return (
    <div
      className={
        isOpened ? `${styles.popup} ${styles.popupOpened}` : styles.popup
      }
    >
      <div className={styles.popupContainer}>
        <button
          onClick={() => closeConfirmPopup()}
          className={styles.closeBtn}
        />
        <div className={styles.innerContainer}>
          <img
            alt="иконка вопроса"
            src={QuestionIcon}
            className={styles.image}
          />
          <h3 className={styles.title}>Вы уверены?</h3>
        </div>
        <ul className={styles.innerContainer}>
          <li>
            <Button
              handleClick={cancelSettings}
              title="Да"
              mode="primary"
              height="36px"
              width="68px"
            />
          </li>
          <li>
            <Button
              handleClick={closeConfirmPopup}
              title="Нет"
              mode="secondary"
              height="36px"
              width="68px"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
