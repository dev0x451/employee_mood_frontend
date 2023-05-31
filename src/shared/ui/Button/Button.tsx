import classes from "./button.module.css";
import cl from "classnames";
import React from "react";
import AddIcon from "./add_20.svg";
interface ButtonProps {
  title: string;
  mode: string;
  type?: "submit" | "reset" | "button" | undefined;
  width?: string;
  height?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  mode,
  type,
  width,
  height,
}) => {
  const className = cl(classes.button, {
    [classes.buttonPrimary]: mode === "primary",
    [classes.buttonSecondary]: mode === "secondary",
    [classes.buttonOutline]: mode === "outline",
  });

  return (
    <button
      className={className}
      style={{ width: width, height: height }}
      type={type}
    >
      {title === "Добавить сотрудника" && (
        <img className={classes.addIcon} src={AddIcon} />
      )}
      {title}
    </button>
  );
};
