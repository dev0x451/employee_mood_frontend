import { AddEmployeeForm } from "@/components/AddEmployeeForm/AddEmployeeForm";
import styles from "./addemployeepopup.module.css";
import React from "react";
import { InfoPopup } from "@/shared/ui/infoPopup/InfoPopup";

interface Props {
  closeAddPopup: () => void;
  addPopupVisible: boolean;
  handleSendInviteCode: (email: string) => Promise<void>;
  success: string;
  error: string;
  closeErrorPopup: () => void;
  popupOpened: boolean;
}

export const AddEmployeePopup: React.FC<Props> = ({
  closeAddPopup,
  addPopupVisible,
  handleSendInviteCode,
  success,
  error,
  closeErrorPopup,
  popupOpened,
}) => {
  const handleCloseOutside = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (event.target === event.currentTarget) {
      closeAddPopup();
    }
  };

  return (
    <div
      onClick={(e) => handleCloseOutside(e)}
      className={
        addPopupVisible
          ? `${styles.addEmployeePopup} ${styles.addEmployeePopupActive}`
          : styles.addEmployeePopup
      }
    >
      <div
        className={
          addPopupVisible
            ? `${styles.addEmployeePopupContent} ${styles.addEmployeePopupContentActive}`
            : styles.addEmployeePopupContent
        }
      >
        <button onClick={closeAddPopup} className={styles.button}></button>
        <AddEmployeeForm
          handleSendInviteCode={handleSendInviteCode}
          addPopupVisible={addPopupVisible}
        />
        {success && <div className={styles.successMessage}>{success}</div>}
        {error && (
          <InfoPopup
            closeErrorPopup={closeErrorPopup}
            popupOpened={popupOpened}
            popupMessage={error}
            isPositive={false}
          />
        )}
      </div>
    </div>
  );
};
