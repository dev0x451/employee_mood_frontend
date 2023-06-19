import Select from "react-select";
import styles from "./selectinterest.module.scss";
import { useRef, useState } from "react";
import { useEscapeKey } from "@/shared/hooks/useEscapeKey";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";

const options = [
  { id: 1, name: "Раз" },
  { id: 2, name: "Два" },
  { id: 3, name: "Три" },
  { id: 4, name: "Четыре" },
  { id: 5, name: "Пять" },
  { id: 6, name: "Шесть" },
];

interface Props {
  isSelectVisible: boolean;
  closeSelect: () => void;
}

const SelectInterest = ({ isSelectVisible, closeSelect }: Props) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const ref = useRef<null>(null);

  useEscapeKey(closeSelect);
  useOutsideClick(closeSelect, ref);

  const handleSelectChange = (selectedOption: any) => {
    const optionExists = selectedOptions.find(
      (option: any) => option.value === selectedOption.value
    );
    if (optionExists) {
      console.log(optionExists);
      return;
    }

    setSelectedOptions([...selectedOptions, selectedOption]);
  };

  return (
    <div
      className={
        isSelectVisible
          ? `${styles.container} ${styles.containerVisible}`
          : styles.container
      }
      ref={ref}
    >
      <Select
        isMulti
        options={options} // Ваш массив с вариантами options
        onChange={handleSelectChange}
        value={selectedOptions}
      />
    </div>
  );
};

export default SelectInterest;
