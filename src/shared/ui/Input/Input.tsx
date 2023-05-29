import { FieldHookConfig, useField } from "formik";
import styles from "./input.module.css";
import { ErrorMessage } from "@/shared/ui/ErrorMessage/ErrorMessage";

interface OtherProps {
  label: string;
}
export const Input = (props: OtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.inputArea}>
      <label className={styles.label} htmlFor={props.id || props.name}>
        {props.label}
      </label>
      <input className={styles.input} {...field} type={props.type} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </div>
  );
};
