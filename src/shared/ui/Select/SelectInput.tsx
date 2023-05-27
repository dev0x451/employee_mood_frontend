import Select, { StylesConfig } from "react-select";
import { useEffect, useState } from "react";
import { SelectOption } from "@/types";
import "@/shared/styles.css";

export interface OptionInterface {
  options: SelectOption[];
  className?: string;
  labelText?: string;
  disabled?: boolean;
  departmentValue?: SelectOption;
  onChange: () => SelectOption;
}

const styles: StylesConfig = {
  control: (styles, { isDisabled }) => ({
    ...styles,
    display: "flex",
    backgroundColor: "#EBF1F4",
    width: "100%",
    paddingLeft: "12px",
    height: "44px",
    color: !isDisabled ? "#99A2AD" : "#2C2D2E",
    borderRadius: "12px",
    fontWeight: "400",
    border: 0,
    boxShadow: "none",
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

export const SelectInput: React.FC<OptionInterface> = ({
  options,
  labelText,
  disabled,
  departmentValue,
  onChange,
}) => {
  const [isSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (disabled) {
      setIsDisabled(true);
    }
  }, []);

  useEffect(() => {
    if (departmentValue) {
      setIsDisabled(false);
    }
  }, [departmentValue]);

  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      isDisabled={isDisabled}
      isSearchable={isSearchable}
      name="single-select"
      options={options}
      defaultValue={{ label: labelText, value: "default" }}
      styles={styles}
      onChange={onChange}
    />
  );
};
