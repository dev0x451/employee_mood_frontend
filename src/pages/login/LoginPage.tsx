import { Formik, Field, Form, FormikHelpers } from "formik";
import classes from "./loginpage.module.css";
import { Button } from "@/shared/ui/Button/Button";
import { Link } from "react-router-dom";
import { basicSchema } from "@/schemas/validationSchema";
import { LogoImg } from "@/shared/ui/Logo/LogoImg";
import { ErrorPopup } from "@/components/ErrorPopup/ErrorPopup";

interface Values {
  password: string;
  email: string;
}

export const LoginPage = () => {
  return (
    <div className={classes.loginPage}>
      <div className={classes.logoContainer}>
        <LogoImg />
      </div>
      <ErrorPopup />
      <Formik
        initialValues={{
          email: "",
          password: "",
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
          <Form noValidate className={classes.loginForm}>
            <h2 className={classes.loginTitle}>Авторизуйтесь, пожалуйста</h2>
            <label className={classes.label} htmlFor="email">
              Введите email
            </label>
            <Field
              className={
                errors.email && touched.email
                  ? `${classes.input} ${classes.inputError}`
                  : classes.input
              }
              id="email"
              name="email"
              type="email"
            />
            {errors.email && touched.email ? (
              <div className={classes.errorMessage}>{errors.email}</div>
            ) : null}
            <label className={classes.label} htmlFor="password">
              Введите пароль
            </label>
            <Field
              className={
                errors.password && touched.password
                  ? `${classes.input} ${classes.inputError}`
                  : classes.input
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
