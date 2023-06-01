import styles from "./addemployeepopup.module.css";
import React from "react";
import { Form, useFormikContext } from "formik";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
interface Props {
  addPopupVisible: boolean;
  closeAddPopup: () => void;
}
export const AddEmployeePopup: React.FC<Props> = ({
  addPopupVisible,
  closeAddPopup,
}) => {
  const { resetForm } = useFormikContext();

  const handleClose = () => {
    closeAddPopup();
    resetForm();
  };
  const handleCloseOutside = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      handleClose();
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
        <button onClick={handleClose} className={styles.button}></button>
        <Form noValidate className={styles.form}>
          <h2 className={styles.title}>Добавить сотрудника</h2>
          <div className={styles.inputContainer}>
            <Input label="Введите email" name="email" type="text" />
          </div>
          <Button title="Добавить" type="submit" mode="primary" />
        </Form>
      </div>
    </div>
  );
};
