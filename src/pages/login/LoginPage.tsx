import { Formik, Field, Form } from "formik";
import "@/shared/styles.css";
import classes from "./loginpage.module.css";
import { Button } from "@/shared/ui/Button/Button";
import { Link } from "react-router-dom";
import { basicSchema } from "@/schemas/validationSchema";
import { LogoImg } from "@/shared/ui/Logo/LogoImg";
import { InfoPopup } from "@/shared/ui/infoPopup/InfoPopup";
import { MyFormValues } from "@/types";
import React from "react";

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
        {({ errors, touched }) => (
          <Form noValidate className={classes.loginForm}>
            <h2 className={classes.loginTitle}>Авторизуйтесь, пожалуйста</h2>
            <label className="label" htmlFor="email">
              Введите email
            </label>
            <Field
              className={
                errors.email && touched.email ? "input input-error" : "input"
              }
              id="email"
              name="email"
              type="email"
            />
            {errors.email && touched.email ? (
              <div className="error-message">{errors.email}</div>
            ) : null}
            <label className="label" htmlFor="password">
              Введите пароль
            </label>
            <Field
              className={
                errors.password && touched.password
                  ? "input input-error"
                  : "input"
              }
              id="password"
              name="password"
              type="password"
            />
            <Button title="Войти" type="submit" mode="primary" />
            <Link className={classes.formLink} to="/refresh-password">
              Забыли пароль?
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};
