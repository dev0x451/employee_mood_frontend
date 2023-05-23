import classes from "./loginpage.module.css";
import { Form } from "@/components/Form/Form";

export const LoginPage = () => {
  return (
    <div className={classes["login-page"]}>
      <Form title="Авторизуйтесь, пожалуйста" />
    </div>
  );
};
