import classes from "./refreshpasswordpage.module.css";
import { Form } from "@/components/Form/Form";
import { FormInput } from "@/shared/ui/FormInput/FormInput";
import { Button } from "@/shared/ui/Button/Button";

export const RefreshPasswordPage = () => {
  return (
    <div className={classes.refreshPasswordPage}>
      <Form type="refresh">
        <h2 className={classes.refreshPasswordTitle}>Восстановление пароля</h2>
        <p className={classes.refreshPasswordInfo}>
          Укажите адрес электронной почты, и мы вышлем инструкцию по
          восстановлению пароля.
        </p>
        <FormInput labelText="Введите e-mail" type="email" />
        <Button title="Восстановить" mode="primary" />
      </Form>
    </div>
  );
};
