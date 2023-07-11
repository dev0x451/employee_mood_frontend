import { ReactElement } from "react";
import styles from "./buttonslist.module.scss";
import { Button } from "@/shared/ui/Button/Button";

interface Props {
  disabled: boolean;
  addNewMeeting: () => void;
  closeAndResetForm: () => void;
}
export const ButtonsList = ({disabled, addNewMeeting, closeAndResetForm}: Props): ReactElement => {
  return (
    <ul className={styles.buttonsList}>
      <li>
        <Button
          handleClick={closeAndResetForm}
          mode="secondary"
          title="Отмена"
          width="100px"
        />
      </li>
      <li>
        <Button handleClick={addNewMeeting} mode="primary" title="Сохранить" width="117px" disabled={disabled}/>
      </li>
    </ul>
  );
};
