import { addEmailSchema } from "@/schemas/validationSchema";
import { Form, Formik } from "formik";
import styles from "./addemployeeform.module.scss";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import React from "react";
import { AutoResetForm } from "@/components/AutoResetForm/AutoResetForm";
import { CloseButton } from "@/shared/ui/CloseButton/CloseButton";

interface Props {
  addPopupVisible: boolean;
  handleSendInviteCode: (email: string) => Promise<void>;
  closeAddPopup: () => void;
}
export const AddEmployeeForm: React.FC<Props> = ({
  addPopupVisible,
  handleSendInviteCode,
  closeAddPopup,
}) => {
  return (
    <div className={styles.form}>
      <CloseButton handleClick={closeAddPopup} />
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={(values, actions) => {
          handleSendInviteCode(values.email);
          actions.setSubmitting(false);
        }}
        validationSchema={addEmailSchema}
      >
        {({ isValid, dirty }) => (
          <Form noValidate>
            <AutoResetForm addPopupVisible={addPopupVisible} />
            <h2 className={styles.title}>Добавить сотрудника</h2>
            <div className={styles.inputContainer}>
              <Input label="Введите e-mail" name="email" type="text" />
            </div>
            <Button title="Добавить" type="submit" mode="primary" disabled={!(isValid && dirty)} />
          </Form>
        )}
      </Formik>
    </div>
  );
};
