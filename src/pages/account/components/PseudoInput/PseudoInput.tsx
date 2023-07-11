/* Это ненастоящий инпут, нужен просто как декоративный элемент. Используется на странице аккаунта */

import styles from "./pseudoinput.module.scss";

import { ReactElement } from "react";

interface Props {
  label: string;
  placeholder: string | number;
}
const PseudoInput = ({ label, placeholder }: Props): ReactElement => {
  return (
    <div className={styles.container}>
      <h3 className={styles.label}>{label}</h3>
      <div className={styles.input}>{placeholder}</div>
    </div>
  );
};

export default PseudoInput;
