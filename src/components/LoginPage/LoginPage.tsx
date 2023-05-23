import classes from "./loginpage.module.css";
import { Form } from "@/components/Form/Form";
import { FormInput } from "@/shared/ui/FormInput/FormInput";
import { Button } from "@/shared/ui/Button/Button";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className={classes.loginPage}>
      <Form title="Авторизуйтесь, пожалуйста">
        <FormInput labelText="Введите e-mail" type="email" />
        <FormInput labelText="Введите пароль" type="password" />
        <Button title="Войти" mode="primary" />
        <Link className={classes.formLink} to="/">
          Забыли пароль?
        </Link>
      </Form>
    </div>
  );
};
