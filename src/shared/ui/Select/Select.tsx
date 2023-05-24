import classes from "./select.module.css";
import React from "react";

interface SelectProps {
  labelText?: string | number;
  optionText?: string | number;
}

export const Select: React.FC<SelectProps> = ({ labelText, optionText }) => {
  return (
    <div className={classes.selectArea}>
      <label className={classes.label}>{labelText}</label>
      <select className={classes.select}>
        <option value="">{optionText}</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
};
