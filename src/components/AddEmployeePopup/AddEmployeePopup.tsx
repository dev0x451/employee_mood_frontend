import { AddEmployeeForm } from "@/components/AddEmployeeForm/AddEmployeeForm";
import styles from "./addemployeepopup.module.scss";
import React from "react";
import { useEscapeKey } from "@/shared/hooks/useEscapeKey";

interface Props {
  closeAddPopup: () => void;
  addPopupVisible: boolean;
  handleSendInviteCode: (email: string) => Promise<void>;
}

export const AddEmployeePopup: React.FC<Props> = ({
  closeAddPopup,
  addPopupVisible,
  handleSendInviteCode,
}) => {
  useEscapeKey(closeAddPopup);
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
      <AddEmployeeForm
        closeAddPopup={closeAddPopup}
        handleSendInviteCode={handleSendInviteCode}
        addPopupVisible={addPopupVisible}
      />
    </div>
  );
};
