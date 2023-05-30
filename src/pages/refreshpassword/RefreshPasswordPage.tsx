import "@/shared/styles.css";
import classes from "./refreshpasswordpage.module.css";
import { Button } from "@/shared/ui/Button/Button";
import { Formik, Form, FormikHelpers } from "formik";
import { refreshEmailSchema } from "@/schemas/validationSchema";
import { LogoImg } from "@/shared/ui/Logo/LogoImg";
import { Input } from "@/shared/ui/Input/Input";
interface Values {
  password?: string;
  email: string;
  confirmPassword?: string;
}

export const RefreshPasswordPage = () => {
  return (
    <div className={classes.refreshPasswordPage}>
      <div className="logo-container">
        <LogoImg />
      </div>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={refreshEmailSchema}
      >
        <Form noValidate className={classes.refreshPasswordForm}>
          <h2 className={classes.refreshPasswordTitle}>
            Восстановление пароля
          </h2>
          <p className={classes.refreshPasswordInfo}>
            Укажите адрес электронной почты, и мы вышлем инструкцию по
            восстановлению пароля.
          </p>
          <Input label="Введите email" name="email" type="text" />
          <Button title="Воcстановить" type="submit" mode="primary" />
        </Form>
      </Formik>
    </div>
  );
};
