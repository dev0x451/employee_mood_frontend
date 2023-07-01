import { ReactElement, useEffect, useRef, useState } from "react";
import styles from "./customdropdown.module.scss";
import { getHobbies } from "@/shared/api/Api";
import { useEscapeKey } from "@/shared/hooks/useEscapeKey";
import { UserHobby } from "@/types";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";

interface Props {
  handleSelectChange: (arg: UserHobby) => void;
  options: UserHobby[];
  isDropDownVisible: boolean;
  closeDropDown: () => void;
}

export const CustomDropDown = ({
  handleSelectChange,
  options,
  isDropDownVisible,
  closeDropDown,
}: Props): ReactElement => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const ref = useRef<null>(null);

  useEffect(() => {
    if (options.length >= 6) {
      closeAndReset();
    }
  }, [options]);

  useEffect(() => {
    onKeyDown();
  }, [value]);

  const inputHandler = (e: any) => {
    setValue(e.target.value);
  };

  const closeAndReset = () => {
    closeDropDown();
    setValue("");
  };

  useEscapeKey(closeAndReset);
  useOutsideClick(closeAndReset, ref);

  async function onKeyDown() {
    try {
      if (value) {
        const response = await getHobbies(value);
        setResults(response.data.results);
      } else if (!value) {
        setResults([]);
      }
    } catch (err: any) {
      console.log(err);
    }
  }

  return (
    <div
      className={
        isDropDownVisible
          ? `${styles.dropdown} ${styles.dropdownVisible}`
          : styles.dropdown
      }
      ref={ref}
    >
      <div
        className={
          results.length > 0
            ? `${styles.inputArea} ${styles.inputAreaResultsOpened}`
            : styles.inputArea
        }
      >
        <input
          onChange={(e) => inputHandler(e)}
          className={styles.input}
          value={value || ""}
          name={value}
          placeholder="Введите название интереса"
        />
        <p className={styles.counter}>{options.length}/6</p>
      </div>
      {results.length > 0 && value && (
        <ul className={styles.resultsList}>
          {results.map((result: UserHobby) => (
            <li
              className={styles.resultsListItem}
              key={result.id}
              onClick={() => handleSelectChange(result)}
            >
              {result.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
