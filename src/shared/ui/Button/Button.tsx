import classes from "./button.module.css";
import cl from "classnames";
import React from "react";
interface ButtonProps {
  title: string;
  mode: string;
  type?: "submit" | "reset" | "button" | undefined;
  width?: string;
}

export const Button: React.FC<ButtonProps> = ({ title, mode, type, width }) => {
  const className = cl(classes.button, {
    [classes.buttonPrimary]: mode === "primary",
    [classes.buttonSecondary]: mode === "secondary",
    [classes.buttonOutline]: mode === "outline",
  });

  return (
    <button className={className} style={{ width: width }} type={type}>
      {title}
    </button>
  );
};
