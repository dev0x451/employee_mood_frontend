import { Formik, Field, Form, FormikHelpers } from "formik";
import "@/shared/styles.css";
import { Button } from "@/shared/ui/Button/Button";
import { basicSchema } from "@/schemas/validationSchema";
import { LogoImg } from "@/shared/ui/Logo/LogoImg";
import classes from "./registerpage.module.css";
import { SelectInput } from "@/shared/ui/Select/SelectInput";
import { useEffect, useState } from "react";
import * as Api from "@/shared/api/Api";
import { useRequest } from "@/shared/hooks/useRequest";
import { SelectOption } from "@/types";

interface Values {
  passwordAdvanced: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  email: string;
  singleSelectCustom: string;
  singleSelectCustom2: string;
}

export const RegisterPage = () => {
  //получаем с бэка массив с должностями и позициями
  const [departments] = useRequest(Api.getDepartments);
  const [positions] = useRequest(Api.getPositions);

  const [departmentChoice, setDepartmentChoice] = useState<SelectOption>();
  const [positionChoice, setPositionChoice] = useState<SelectOption>();

  // трансформированные массивы с должностями и позициями со свойствами value и label (для react-select)
  const [optionsDepartments, setOptionsDepartments] = useState<SelectOption[]>(
    []
  );
  const [optionsPositions, setOptionsPositions] = useState<SelectOption[]>([]);

  console.log(positionChoice);
  useEffect(() => {
    if (departments) {
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
    }));
    newArray.unshift({ label: labelText, value: "def", isDisabled: true });
    return newArray;
  }

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
          singleSelectCustom: "",
          singleSelectCustom2: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          console.log(values);
          setSubmitting(false);
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
                    options={optionsDepartments}
                    labelText="Выберите отдел"
                    onChange={(choice: SelectOption) =>
                      setDepartmentChoice(choice)
                    }
                  />
                </div>
                <div className={classes.inputArea}>
                  <label className="label" htmlFor="password">
                    Должность
                  </label>
                  <Field
                    name="singleSelectCustom2"
                    id="singleSelectCustom2"
                    placeholder="Single Select"
                    isMulti={false}
                    component={SelectInput}
                    options={optionsPositions}
                    labelText="Выберите должность"
                    disabled={true}
                    departmentValue={departmentChoice}
                    onChange={(choice: SelectOption) =>
                      setPositionChoice(choice)
                    }
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
