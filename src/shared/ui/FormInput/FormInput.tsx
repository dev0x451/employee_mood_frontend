import React from "react";
import classes from "./forminput.module.css";

interface FormInputProps {
  labelText: string | number;
  type: string;
}

export const FormInput: React.FC<FormInputProps> = ({ labelText, type }) => {
  return (
    <div className={classes["input--area"]}>
      <label className={classes["label"]}>{labelText}</label>
      <input className={classes["input"]} type={type}></input>
    </div>
  );
};
