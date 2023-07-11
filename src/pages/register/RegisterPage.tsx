import React, { useEffect, useState } from "react";
import { Formik, Form, FormikValues } from "formik";
import * as Api from "@/shared/api/Api";
import { advancedSchema } from "@/schemas/validationSchema";
import { SelectOption } from "@/types";
import { Button } from "@/shared/ui/Button/Button";
import { LogoImg } from "@/shared/ui/Logo/LogoImg";
import { Input } from "@/shared/ui/Input/Input";
import { DropDown } from "@/shared/ui/Dropdown/Dropdown";
import "@/shared/styles/styles.css";
import classes from "./registerpage.module.scss";
import { useSearchParams } from "react-router-dom";

interface RegisterProps {
  handleRegister: (formikValues: FormikValues, invite_code: string) => void;
}

export const RegisterPage: React.FC<RegisterProps> = ({ handleRegister }) => {
  // получение инвайт-кода для регистрации и декодирование
  const [searchParams] = useSearchParams();
  const invite_code = searchParams.get("invite_code");
  const invite_code_decoded =
    (invite_code && invite_code.replace("%3D", "=").replace(/ /g, "+")) || "";

  const [departments, setDepartments] = useState([]);
  const [positions, setPositions] = useState([]);

  // трансформированные массивы с должностями и позициями со свойствами value и label (для react-select)
  const [optionsDepartments, setOptionsDepartments] = useState<SelectOption[]>(
    []
  );
  const [optionsPositions, setOptionsPositions] = useState<SelectOption[]>([]);

  useEffect(() => {
    if (departments && positions) {
      const arrayDepartments = transformArray(departments, "Выберите отдел");
      const arrayPositions = transformArray(positions, "Выберите должность");
      setOptionsDepartments(arrayDepartments);
      setOptionsPositions(arrayPositions);
    }
  }, [departments]);

  useEffect(() => {
    if (invite_code_decoded) {
      getRegisterInfo(invite_code_decoded);
    }
  }, []);

  async function getRegisterInfo(invite_code_decoded: string) {
    try {
      const responseDepartments = await Api.getDepartments(invite_code_decoded);
      const responsePositions = await Api.getPositions(invite_code_decoded);
      if (responseDepartments && responsePositions) {
        setDepartments(responseDepartments.data);
        setPositions(responsePositions.data.results);
      }
    } catch (err) {
      console.log(err);
    }
  }

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
      <div className={classes.logoContainer}>
        <LogoImg />
      </div>
      {!departments ? (
        <div>Ссылка недействительна!</div>
      ) : (
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
            handleRegister(values, invite_code_decoded);
            actions.setSubmitting(false);
          }}
          validationSchema={advancedSchema}
        >
          {({ values, isValid, dirty }) => (
            <Form noValidate className={classes.registerForm}>
              <h2 className={classes.registerTitle}>
                Добро пожаловать в службу заботы о сотрудниках MoodBeat
              </h2>
              <ul className={classes.registerFormList}>
                <li className={classes.registerFormListItem}>
                  <Input label="Имя" name="firstName" type="text" />
                </li>
                <li className={classes.registerFormListItem}>
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
                </li>
                <li className={classes.registerFormListItem}>
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
                  <p className={classes.registerPasswordInfo}>
                    Пароль должен содержать не менее 8 символов
                  </p>
                </li>
                <li className={classes.registerFormListItem}>
                  <Input
                    label="Подтверждение пароля"
                    name="confirmPassword"
                    type="password"
                  />
                </li>
              </ul>
              <p className={classes.registerAgreement}>
                Регистрируясь, вы принимаете Пользовательское соглашение и даете
                Согласие на обработку персональных данных.
              </p>
              <Button
                title="Зарегистрироваться"
                mode="primary"
                width="360px"
                disabled={!(isValid && dirty)}
              />
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};
