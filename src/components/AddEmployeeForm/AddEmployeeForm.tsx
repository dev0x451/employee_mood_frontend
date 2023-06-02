import { addEmailSchema } from "@/schemas/validationSchema";
import { Form, Formik } from "formik";
import styles from "./addemployeeform.module.css";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import React from "react";
import { AutoResetForm } from "@/components/AutoResetForm/AutoResetForm";

interface Props {
  addPopupVisible: boolean;
  handleSendInviteCode: (email: string) => Promise<void>;
}
export const AddEmployeeForm: React.FC<Props> = ({
  addPopupVisible,
  handleSendInviteCode,
}) => {
  return (
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
      <Form noValidate className={styles.form}>
        <AutoResetForm addPopupVisible={addPopupVisible} />
        <h2 className={styles.title}>Добавить сотрудника</h2>
        <div className={styles.inputContainer}>
          <Input label="Введите email" name="email" type="text" />
        </div>
        <Button title="Добавить" type="submit" mode="primary" />
      </Form>
    </Formik>
  );
};
