import { Formik, Form } from "formik";
import "@/shared/styles/styles.css";
import classes from "./loginpage.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { Link } from "react-router-dom";
import { basicSchema } from "@/schemas/validationSchema";
import { LogoImg } from "@/shared/ui/Logo/LogoImg";
import { MyFormValues } from "@/types";
import React from "react";
import { Input } from "@/shared/ui/Input/Input";

interface LoginProps {
  handleLogin: (values: MyFormValues) => void;
}

export const LoginPage: React.FC<LoginProps> = ({ handleLogin }) => {
  const initialValues: MyFormValues = { email: "", password: "" };

  return (
    <div className={classes.loginPage}>
      <div className={classes.logoContainer}>
        <LogoImg />
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          handleLogin(values);
          actions.setSubmitting(false);
        }}
        validationSchema={basicSchema}
      >
        {({ isValid, dirty }) => (
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
            <Button
              title="Войти"
              type="submit"
              mode="primary"
              disabled={!(isValid && dirty)}
            />
            <Link className={classes.loginFormLink} to="/password-reset">
              Забыли пароль?
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};
