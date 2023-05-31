import "@/shared/styles.css";
import classes from "./emailformrefresh.module.css";
import { Button } from "@/shared/ui/Button/Button";
import { Formik, Form, FormikHelpers } from "formik";
import { refreshEmailSchema } from "@/schemas/validationSchema";
import { Input } from "@/shared/ui/Input/Input";
interface Values {
  email: string;
}

export const EmailFormRefresh = () => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={refreshEmailSchema}
    >
      <Form noValidate className={classes.form}>
        <h2 className={classes.title}>Восстановление пароля</h2>
        <p className={classes.info}>
          Укажите адрес электронной почты, и мы вышлем инструкцию по
          восстановлению пароля.
        </p>
        <div className={classes.inputContainer}>
          <Input label="Введите email" name="email" type="text" />
        </div>
        <Button title="Воcстановить" type="submit" mode="primary" />
      </Form>
    </Formik>
  );
};
