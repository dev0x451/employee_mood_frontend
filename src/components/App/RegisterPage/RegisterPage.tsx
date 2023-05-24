import { FormInput } from "@/shared/ui/FormInput/FormInput";
import { Button } from "@/shared/ui/Button/Button";
import classes from "./registerpage.module.css";
import { Form } from "@/components/Form/Form";
import { Select } from "@/shared/ui/Select/Select";

export const RegisterPage = () => {
  const departmentOptions = ["Отдел 1", "Отдел 2", "Отдел 3"];
  const jobOptions = ["Должность 1", "Должность 2", "Должность 3"];

  return (
    <div className={classes.registerPage}>
      <Form type="register">
        <h2 className={classes.registerTitle}>
          Добро пожаловать в службу заботы о сотрудниках CareFor
        </h2>
        <ul className={classes.registerFormList}>
          <li className={classes.registerFormListItem}>
            <FormInput labelText="Имя" type="text" />
            <FormInput labelText="Фамилия" type="text" />
          </li>
          <li className={classes.registerFormListItem}>
            <Select
              labelText="Отдел"
              optionText="Выберите отдел"
              options={departmentOptions}
            />
            <Select
              labelText="Должность"
              optionText="Выберите должность"
              options={jobOptions}
            />
          </li>
          <li className={classes.registerFormListItem}>
            <FormInput labelText="Пароль" type="password" />
            <FormInput labelText="Подтверждение пароля" type="password" />
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
    </div>
  );
};
