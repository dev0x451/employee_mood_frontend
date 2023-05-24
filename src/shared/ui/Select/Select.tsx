import classes from "./select.module.css";
import React from "react";

interface SelectProps {
  labelText?: string | number;
  optionText?: string | number;
  options: [];
}

export const Select: React.FC<SelectProps> = ({
  labelText,
  optionText,
  options,
}) => {
  return (
    <div className={classes.selectArea}>
      <label className={classes.label}>{labelText}</label>
      <select className={classes.select}>
        <option value="">{optionText}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
