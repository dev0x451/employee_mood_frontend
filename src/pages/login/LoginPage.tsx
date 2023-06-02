import { Formik, Form } from "formik";
import "@/shared/styles.css";
import classes from "./loginpage.module.css";
import { Button } from "@/shared/ui/Button/Button";
import { Link } from "react-router-dom";
import { basicSchema } from "@/schemas/validationSchema";
import { LogoImg } from "@/shared/ui/Logo/LogoImg";
import { InfoPopup } from "@/shared/ui/infoPopup/InfoPopup";
import { MyFormValues } from "@/types";
import React from "react";
import { Input } from "@/shared/ui/Input/Input";

interface LoginProps {
  handleLogin: (values: MyFormValues) => void;
  closeErrorPopup: () => void;
  popupOpened: boolean;
  error: string;
}

export const LoginPage: React.FC<LoginProps> = ({
  handleLogin,
  closeErrorPopup,
  popupOpened,
  error,
}) => {
  const initialValues: MyFormValues = { email: "", password: "" };

  return (
    <div className={classes.loginPage}>
      <div className="logo-container">
        <LogoImg />
      </div>
      {error && (
        <InfoPopup
          closeErrorPopup={closeErrorPopup}
          popupOpened={popupOpened}
          popupMessage={error}
          isPositive={false}
        />
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          handleLogin(values);
          actions.setSubmitting(false);
        }}
        validationSchema={basicSchema}
      >
        <Form noValidate className={classes.loginForm}>
          <h2 className={classes.loginTitle}>Авторизуйтесь, пожалуйста</h2>
          <ul className={classes.loginFormList}>
            <li className={classes.loginFormListItem}>
              <Input label="Введите email" name="email" type="text" />
            </li>
            <li className={classes.loginFormListItem}>
              <Input label="Введите пароль" name="password" type="password" />
            </li>
          </ul>
          <Button title="Войти" type="submit" mode="primary" />
          <Link className={classes.formLink} to="/password-reset">
            Забыли пароль?
          </Link>
        </Form>
      </Formik>
    </div>
  );
};
