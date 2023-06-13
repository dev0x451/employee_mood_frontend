import "@/shared/styles/styles.css";
import classes from "./emailformrefresh.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { Formik, Form } from "formik";
import { refreshEmailSchema } from "@/schemas/validationSchema";
import { Input } from "@/shared/ui/Input/Input";
import React from "react";
import { useNavigate } from "react-router";

interface ComponentProps {
  handleSendResetCode: (email: string) => void;
}

export const EmailFormRefresh: React.FC<ComponentProps> = ({
  handleSendResetCode,
}) => {
  const navigate = useNavigate();

  const returnToLogin = () => {
    navigate("/login");
  };

  return (
    <div className={classes.form}>
      <button className={classes.backButton} onClick={returnToLogin} />
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
        {({ isValid, dirty }) => (
          <Form noValidate>
            <h2 className={classes.title}>Восстановление пароля</h2>
            <p className={classes.info}>
              Укажите адрес электронной почты, и мы вышлем инструкцию по
              восстановлению пароля.
            </p>
            <div className={classes.inputContainer}>
              <Input label="Введите email" name="email" type="text" />
            </div>
            <Button
              title="Воcстановить"
              type="submit"
              mode="primary"
              disabled={!(isValid && dirty)}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
