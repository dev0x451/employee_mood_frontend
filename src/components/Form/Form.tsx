import React from "react";
import classes from "./form.module.css";

interface FormProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({ title, children }) => {
  return (
    <form className={classes.form}>
      <h2 className={classes.formTitle}>{title}</h2>
      {children}
    </form>
  );
};
