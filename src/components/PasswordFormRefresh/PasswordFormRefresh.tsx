import "@/shared/styles.css";
import classes from "./passwordformrefresh.module.css";
import { Button } from "@/shared/ui/Button/Button";
import { Formik, Form, FormikValues } from "formik";
import { refreshPasswordSchema } from "@/schemas/validationSchema";
import { Input } from "@/shared/ui/Input/Input";
import React from "react";
import { InfoPopup } from "@/shared/ui/infoPopup/InfoPopup";

interface Props {
  resetCode: string;
  handleResetPassword: (values: FormikValues, resetCode: string) => void;
  error: string;
  closeErrorPopup: () => void;
  popupOpened: boolean;
}

export const PasswordFormRefresh: React.FC<Props> = ({
  resetCode,
  handleResetPassword,
  error,
  closeErrorPopup,
  popupOpened,
}) => {
  return (
    <>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values, actions) => {
          handleResetPassword(values, resetCode);
          actions.setSubmitting(false);
        }}
        validationSchema={refreshPasswordSchema}
      >
        <Form noValidate className={classes.form}>
          <h2 className={classes.title}>Восстановление пароля</h2>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <Input
                label="Введите новый пароль"
                name="password"
                type="password"
              />
            </li>
            <li className={classes.listItem}>
              <Input
                label="Повторите новый пароль"
                name="confirmPassword"
                type="password"
              />
            </li>
          </ul>
          <Button title="Изменить" type="submit" mode="primary" />
        </Form>
      </Formik>
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
