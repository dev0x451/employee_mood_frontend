import "@/shared/styles.css";
import classes from "./refreshpasswordpage.module.css";
import { Button } from "@/shared/ui/Button/Button";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { basicSchema } from "@/schemas/validationSchema";
import { LogoImg } from "@/shared/ui/Logo/LogoImg";

interface Values {
  password: string;
  email: string;
  confirmPassword: string;
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
          password: "",
          confirmPassword: "",
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
        validationSchema={basicSchema}
      >
        {({ errors, touched }) => (
          <Form noValidate className={classes.refreshPasswordForm}>
            <h2 className={classes.refreshPasswordTitle}>
              Восстановление пароля
            </h2>
            <p className={classes.refreshPasswordInfo}>
              Укажите адрес электронной почты, и мы вышлем инструкцию по
              восстановлению пароля.
            </p>
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
            <Button title="Воcстановить" type="submit" mode="primary" />
          </Form>
        )}
      </Formik>
    </div>
  );
};
