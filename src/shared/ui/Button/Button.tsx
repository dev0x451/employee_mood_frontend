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
  openAddPopup?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  mode,
  type,
  width,
  height,
  openAddPopup,
}) => {
  const className = cl(classes.button, {
    [classes.buttonPrimary]: mode === "primary",
    [classes.buttonSecondary]: mode === "secondary",
    [classes.buttonOutline]: mode === "outline",
  });

  if (title === "Добавить сотрудника") {
    return (
      <button
        onClick={openAddPopup}
        className={className}
        style={{ width: width, height: height }}
        type={type}
      >
        <img className={classes.addIcon} src={AddIcon} />
        {title}
      </button>
    );
  } else {
    return (
      <button
        className={className}
        style={{ width: width, height: height }}
        type={type}
      >
        {title}
      </button>
    );
  }
};
