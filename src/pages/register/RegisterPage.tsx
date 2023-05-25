import { Formik, Field, Form, FormikHelpers } from "formik";
import "@/shared/styles.css";
import { Button } from "@/shared/ui/Button/Button";
import { basicSchema } from "@/schemas/validationSchema";
import { LogoImg } from "@/shared/ui/Logo/LogoImg";
import classes from "./registerpage.module.css";
import { SelectInput } from "@/shared/ui/Select/SelectInput";

interface Values {
  passwordAdvanced: string;
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
}
export const RegisterPage = () => {
  return (
    <div className={classes.registerPage}>
      <div className="logo-container">
        <LogoImg />
      </div>
      <Formik
        initialValues={{
          email: "",
          passwordAdvanced: "",
          confirmPassword: "",
          firstName: "",
          lastName: "",
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
          <Form noValidate className={classes.registerForm}>
            <h2 className={classes.registerTitle}>
              Добро пожаловать в службу заботы о сотрудниках CareFor
            </h2>
            <ul className={classes.registerFormList}>
              <li className={classes.registerFormListItem}>
                <div className={classes.inputArea}>
                  <label className="label" htmlFor="email">
                    Имя
                  </label>
                  <Field
                    className={
                      errors.firstName && touched.firstName
                        ? "input input-error"
                        : "input"
                    }
                    id="firstName"
                    name="firstName"
                    type="text"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="error-message">{errors.firstName}</div>
                  ) : null}
                </div>
                <div className={classes.inputArea}>
                  <label className="label" htmlFor="email">
                    Фамилия
                  </label>
                  <Field
                    className={
                      errors.lastName && touched.lastName
                        ? "input input-error"
                        : "input"
                    }
                    id="lastName"
                    name="lastName"
                    type="text"
                  />
                  {errors.lastName && touched.lastName ? (
                    <div className="error-message">{errors.lastName}</div>
                  ) : null}
                </div>
              </li>
              <li className={classes.registerFormListItem}>
                <div className={classes.inputArea}>
                  <label className="label" htmlFor="password">
                    Отдел
                  </label>
                  <Field
                    name="singleSelectCustom"
                    id="singleSelectCustom"
                    placeholder="Single Select"
                    isMulti={false}
                    component={SelectInput}
                    options={[
                      { value: "0", label: "Выбрать отдел", isDisabled: true },
                      { value: "one", label: "One" },
                      { value: "two", label: "Two" },
                      { value: "three", label: "Three" },
                    ]}
                  />
                </div>
                <div className={classes.inputArea}>
                  <label className="label" htmlFor="password">
                    Должность
                  </label>
                  <Field
                    name="singleSelectCustom"
                    id="singleSelectCustom"
                    placeholder="Single Select"
                    isMulti={false}
                    component={SelectInput}
                    options={[
                      {
                        value: "0",
                        label: "Выбрать должность",
                        isDisabled: true,
                      },
                      { value: "one", label: "One" },
                      { value: "two", label: "Two" },
                      { value: "three", label: "Three" },
                    ]}
                  />
                </div>
              </li>
              <li className={classes.registerFormListItem}>
                <div className={classes.inputArea}>
                  <label className="label" htmlFor="password">
                    Пароль
                  </label>
                  <Field
                    className={
                      errors.passwordAdvanced && touched.passwordAdvanced
                        ? "input input-error"
                        : "input"
                    }
                    id="passwordAdvanced"
                    name="passwordAdvanced"
                    type="password"
                  />
                  {errors.passwordAdvanced && touched.passwordAdvanced ? (
                    <div className="error-message">
                      {errors.passwordAdvanced}
                    </div>
                  ) : null}
                </div>
                <div className={classes.inputArea}>
                  <label className="label" htmlFor="password">
                    Подтверждение пароля
                  </label>
                  <Field
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? "input input-error"
                        : "input"
                    }
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div className="error-message">
                      {errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
              </li>
            </ul>
            <p className={classes.registerPasswordInfo}>
              Пароль должен содержать не менее 8 символов
            </p>
            <p className={classes.registerAgreement}>
              Регистрируясь, вы принимаете Пользовательское соглашение и даете
              Согласие на обработку персональных данных.
            </p>
            <Button title="Зарегистрироваться" mode="primary" />
          </Form>
        )}
      </Formik>
    </div>
  );
};
