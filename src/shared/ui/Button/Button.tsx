import classes from "./button.module.css";
import React from "react";
interface ButtonProps {
  title: string;
}
export const Button: React.FC<ButtonProps> = ({ title }) => {
  return <button className={classes.button}>{title}</button>;
};
