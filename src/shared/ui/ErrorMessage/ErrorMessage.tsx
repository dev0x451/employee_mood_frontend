import React from "react";
import styles from "./errormessage.module.scss";

interface ErrorMessageProps {
  children: React.ReactNode;
}
export const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return <p className={styles.error}>{children}</p>;
};
