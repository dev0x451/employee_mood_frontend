import "@/shared/styles/styles.css";
import classes from "./passwordformrefresh.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { Formik, Form, FormikValues } from "formik";
import { refreshPasswordSchema } from "@/schemas/validationSchema";
import { Input } from "@/shared/ui/Input/Input";
import React from "react";

interface Props {
  resetCode: string;
  handleResetPassword: (values: FormikValues, resetCode: string) => void;
}

export const PasswordFormRefresh: React.FC<Props> = ({
  resetCode,
  handleResetPassword,
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
        {({ isValid, dirty }) => (
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
            <Button
              title="Изменить"
              type="submit"
              mode="primary"
              disabled={!(isValid && dirty)}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};
