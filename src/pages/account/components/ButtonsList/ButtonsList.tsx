import { ReactElement } from "react";
import styles from "./buttonslist.module.scss";
import { Button } from "@/shared/ui/Button/Button";

interface Props {
  handleUpdateUser: () => void;
  cancelSettings: () => void;
  disabled: boolean;
}
export const ButtonsList = ({
  handleUpdateUser,
  cancelSettings,
  disabled,
}: Props): ReactElement => {
  return (
    <ul className={styles.buttonsList}>
      <li>
        <Button
          handleClick={handleUpdateUser}
          disabled={disabled}
          mode="primary"
          title="Сохранить"
          width="222px"
        />
      </li>
      <li>
        <Button handleClick={cancelSettings} mode="empty" title="Отменить" />
      </li>
    </ul>
  );
};
