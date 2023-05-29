import { useField, FieldHookConfig } from "formik";
import Select, { StylesConfig } from "react-select";
import "@/shared/styles.css";
import React, { useEffect, useState } from "react";
import { SelectOption } from "@/types";
import { ErrorMessage } from "@/shared/ui/ErrorMessage/ErrorMessage";
import styles from "./dropdown.module.css";

interface DropdownProps {
  label: string;
  name: string;
  options: SelectOption[];
  iid: string;
  placeholder: string;
  departmentChoice?: string;
  disabled?: boolean;
  noOptionsMessage?: () => string;
}
interface PropsType {
  [x: string]: any;
  name: string;
}

export const DropDown: React.FC<DropdownProps & FieldHookConfig<string>> = ({
  label,
  ...props
}: PropsType) => {
  const [field, meta, helpers] = useField(props);

  const { options } = props;
  const { touched, error } = meta;
  const { setValue } = helpers;

  const selectStyles: StylesConfig = {
    control: (styles, { isDisabled }) => ({
      ...styles,
      display: "flex",
      backgroundColor: "#EBF1F4",
      width: "360px",
      paddingLeft: "5px",
      height: "44px",
      color: !isDisabled ? "#99A2AD" : "#2C2D2E",
      borderRadius: "12px",
      fontWeight: "400",
      border: 0,
      boxShadow: "none",
      marginTop: "10px",
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? undefined
          : isFocused
          ? "#EBF1F4"
          : "white",
        color: isDisabled ? "#99A2AD" : isSelected ? "#8A32E0" : "#2C2D2E",
        cursor: isDisabled ? "not-allowed" : "pointer",
      };
    },
  };

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (props.disabled) {
      setIsDisabled(true);
    }
  }, []);

  useEffect(() => {
    if (props.departmentChoice) {
      setIsDisabled(false);
    }
  }, [props.departmentChoice]);

  return (
    <div>
      <label className={styles.label} htmlFor={props.id || props.name}>
        {label}
      </label>

      <Select
        options={options}
        name={field.name}
        onChange={(option: any) => setValue(option.value)}
        instanceId={props.iid}
        className="basic-single"
        classNamePrefix="select"
        isDisabled={isDisabled}
        styles={selectStyles}
        placeholder={props.placeholder}
        noOptionsMessage={props.noOptionsMessage}
      />

      {error && touched ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  );
};
