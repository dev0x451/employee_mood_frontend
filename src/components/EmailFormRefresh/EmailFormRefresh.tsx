import "@/shared/styles.css";
import classes from "./emailformrefresh.module.css";
import { Button } from "@/shared/ui/Button/Button";
import { Formik, Form } from "formik";
import { refreshEmailSchema } from "@/schemas/validationSchema";
import { Input } from "@/shared/ui/Input/Input";
import React from "react";
import { InfoPopup } from "@/shared/ui/infoPopup/InfoPopup";

interface ComponentProps {
  handleSendResetCode: (email: string) => void;
  success: string;
  error: string;
  closeErrorPopup: () => void;
  popupOpened: boolean;
}

export const EmailFormRefresh: React.FC<ComponentProps> = ({
  handleSendResetCode,
  success,
  error,
  closeErrorPopup,
  popupOpened,
}) => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={(values, actions) => {
          handleSendResetCode(values.email);
          actions.setSubmitting(false);
        }}
        validationSchema={refreshEmailSchema}
      >
        <Form noValidate className={classes.form}>
          <h2 className={classes.title}>Восстановление пароля</h2>
          <p className={classes.info}>
            Укажите адрес электронной почты, и мы вышлем инструкцию по
            восстановлению пароля.
          </p>
          <div className={classes.inputContainer}>
            <Input label="Введите email" name="email" type="text" />
          </div>
          <Button title="Воcстановить" type="submit" mode="primary" />
        </Form>
      </Formik>
      {success && (
        <InfoPopup
          closeErrorPopup={closeErrorPopup}
          popupOpened={popupOpened}
          popupMessage={success}
          isPositive={true}
        />
      )}
      {error && (
        <InfoPopup
          closeErrorPopup={closeErrorPopup}
          popupOpened={popupOpened}
          popupMessage={error}
          isPositive={false}
        />
      )}
    </>
  );
};
