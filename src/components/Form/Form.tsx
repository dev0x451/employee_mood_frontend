import React from "react";
import classes from "./form.module.css";
import cl from "classnames";

interface FormProps {
  children?: React.ReactNode;
  type?: string;
}

export const Form: React.FC<FormProps> = ({ children, type }) => {
  const className = cl(classes.form, {
    [classes.registerForm]: type === "register",
    [classes.refreshForm]: type === "refresh",
  });
  return <form className={className}>{children}</form>;
};
