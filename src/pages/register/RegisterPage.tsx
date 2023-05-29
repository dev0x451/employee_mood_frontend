import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Api from "@/shared/api/Api";
import { advancedSchema } from "@/schemas/validationSchema";
import { useRequest } from "@/shared/hooks/useRequest";
import { SelectOption } from "@/types";
import { Button } from "@/shared/ui/Button/Button";
import { LogoImg } from "@/shared/ui/Logo/LogoImg";
import { Input } from "@/shared/ui/Input/Input";
import { DropDown } from "@/shared/ui/Dropdown/Dropdown";
import "@/shared/styles.css";
import classes from "./registerpage.module.css";

export const RegisterPage = () => {
  //получаем с бэка массив с должностями и позициями
  const [departments] = useRequest(Api.getDepartments);
  const [positions] = useRequest(Api.getPositions);

  // трансформированные массивы с должностями и позициями со свойствами value и label (для react-select)
  const [optionsDepartments, setOptionsDepartments] = useState<SelectOption[]>(
    []
  );
  const [optionsPositions, setOptionsPositions] = useState<SelectOption[]>([]);

  useEffect(() => {
    if (departments && positions) {
      const arrayDepartments = transformArray(departments, "Выберите отдел");
      const arrayPositions = transformArray(
        positions.results,
        "Выберите должность"
      );
      setOptionsDepartments(arrayDepartments);
      setOptionsPositions(arrayPositions);
    }
  }, [departments]);

  // трансформируем полученные массивы до нужного формата и добавляем значение по умолчанию
  function transformArray(
    array: SelectOption[],
    labelText: string
  ): SelectOption[] {
    const newArray = array.map((x: any) => ({
      value: x.id,
      label: x.name,
      isDisabled: false,
      departments: x.departments,
    }));
    newArray.unshift({
      label: labelText,
      value: "def",
      isDisabled: true,
      departments: [],
    });
    return newArray;
  }

  return (
    <div className={classes.registerPage}>
      <div className="logo-container">
        <LogoImg />
      </div>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
          firstName: "",
          lastName: "",
          department: "",
          position: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
        validationSchema={advancedSchema}
      >
        {({ values }) => (
          <Form noValidate className={classes.registerForm}>
            <h2 className={classes.registerTitle}>
              Добро пожаловать в службу заботы о сотрудниках CareFor
            </h2>
            <ul className={classes.registerFormList}>
              <li className={classes.registerFormListItem}>
                <Input label="Имя" name="firstName" type="text" />
                <Input label="Фамилия" name="lastName" type="text" />
              </li>
              <li className={classes.registerFormListItem}>
                <DropDown
                  label="Отдел"
                  name="department"
                  options={optionsDepartments}
                  iid="department"
                  placeholder="Выбрать отдел"
                />
                <DropDown
                  label="Должность"
                  name="position"
                  options={optionsPositions.filter((option: any) =>
                    option.departments.includes(values.department)
                  )}
                  iid="position"
                  departmentChoice={values.department}
                  placeholder="Выбрать должность"
                  disabled={true}
                  noOptionsMessage={() => "Нет доступных должностей"}
                />
              </li>
              <li className={classes.registerFormListItem}>
                <Input label="Пароль" name="password" type="password" />
                <Input
                  label="Подтверждение пароля"
                  name="confirmPassword"
                  type="password"
                />
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
