import React from "react";
import styles from "@/shared/ui/ErrorMessage/errormessage.module.css";

interface ErrorMessageProps {
  children: React.ReactNode;
}
export const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return <p className={styles.error}>{children}</p>;
};
