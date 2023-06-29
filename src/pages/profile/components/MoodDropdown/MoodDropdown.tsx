import styles from "./mooddropdown.module.scss";
import {WarningBall} from "@/pages/profile/components/WarningBall/WarningBall";
import {UserMentalState} from "@/types";
import {ReactElement, useRef, useState} from "react";
import cl from "classnames";
import {useOutsideClick} from "@/shared/hooks/useOutsideClick";

interface Props {
  data: UserMentalState[];
  setDropDownValue: (val: string, level: number) => void;
  value: string | undefined;
  level: number | undefined;
}
export const MoodDropdown = ({data, setDropDownValue, value, level}: Props): ReactElement => {
  const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(false);
  const ref = useRef<null>(null);

  const className = cl(styles.input, {
    [styles.inputWithDropdown]: isDropDownVisible === true,
    [styles.inputEmpty]: !value,
  });

  const handleOpenDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  }

  const handleDropDownClick = (state: UserMentalState) => {
    setDropDownValue(state.name, state.level);
    setIsDropDownVisible(false);
  }

  useOutsideClick(() => setIsDropDownVisible(false), ref);

  return (
    <div className={styles.moodDropdown} ref={ref}>
      <div onClick={handleOpenDropDown} className={className}>
        {value && level ? <WarningBall level={level} title={value} /> : "Выбрать состояние"}
        <button className={!isDropDownVisible ? styles.button : `${styles.button} ${styles.buttonOpened}`}/>
      </div>
      <ul className={!isDropDownVisible ? styles.dropdown : `${styles.dropdown} ${styles.dropdownVisible}`}>
        {data !== null && data.length !== 0 && data.map((state) => (
          <li key={state.level} className={styles.dropdownItem} onClick={() => handleDropDownClick(state)}>
            <WarningBall level={state.level} title={state.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
