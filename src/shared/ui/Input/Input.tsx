import { FieldHookConfig, useField } from "formik";
import styles from "./input.module.css";
import { ErrorMessage } from "@/shared/ui/ErrorMessage/ErrorMessage";
import { InputButton } from "@/shared/ui/InputButton/InputButton";
import { useState } from "react";

interface OtherProps {
  label: string;
}
export const Input = (props: OtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const [passwordOpened, setPasswordOpened] = useState(false);

  const handleOpenPassword = () => {
    if (passwordOpened) {
      setPasswordOpened(false);
    } else {
      setPasswordOpened(true);
    }
  };

  return (
    <div className={styles.inputArea}>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      {props.type === "password" ? (
        <div className={styles.inputContainer}>
          <input
            className={
              meta.touched && meta.error
                ? `${styles.input} ${styles.inputError}`
                : styles.input
            }
            {...field}
            type={!passwordOpened ? props.type : "text"}
          />
          <InputButton
            handleOpenPassword={handleOpenPassword}
            passwordOpened={passwordOpened}
          />
        </div>
      ) : (
        <input
          className={
            meta.touched && meta.error
              ? `${styles.input} ${styles.inputError}`
              : styles.input
          }
          {...field}
          type={props.type}
        />
      )}
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </div>
  );
};
