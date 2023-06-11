import classes from "./button.module.scss";
import cl from "classnames";
import React from "react";
import AddIcon from "./ui/add_20.svg";
interface ButtonProps {
  title: string;
  mode: string;
  type?: "submit" | "reset" | "button" | undefined;
  width?: string;
  height?: string;
  disabled?: boolean;
  handleClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  mode,
  type,
  width,
  height,
  disabled,
  handleClick,
}) => {
  const className = cl(classes.button, {
    [classes.buttonPrimary]: mode === "primary",
    [classes.buttonSecondary]: mode === "secondary",
    [classes.buttonOutline]: mode === "outline",
  });

  if (title === "Добавить сотрудника") {
    return (
      <button
        onClick={handleClick}
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
        onClick={handleClick}
        disabled={disabled}
        className={disabled ? `${className} ${classes.disabled}` : className}
        style={{ width: width, height: height }}
        type={type}
      >
        {title}
      </button>
    );
  }
};
