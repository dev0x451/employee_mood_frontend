import "@/shared/styles.css";
import classes from "./passwordformrefresh.module.css";
import { Button } from "@/shared/ui/Button/Button";
import { Formik, Form, FormikHelpers } from "formik";
import { refreshPasswordSchema } from "@/schemas/validationSchema";
import { Input } from "@/shared/ui/Input/Input";
interface Values {
  password: string;
  confirmPassword: string;
}

export const PasswordFormRefresh = () => {
  return (
    <Formik
      initialValues={{
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
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
  );
};
