import { ReactElement } from "react";
import styles from "./buttonslist.module.scss";
import { Button } from "@/shared/ui/Button/Button";

interface Props {
  handleUpdateUser: () => void;
  aboutError: string;
  cancelSettings: () => void;
}
export const ButtonsList = ({
  handleUpdateUser,
  aboutError,
  cancelSettings,
}: Props): ReactElement => {
  return (
    <ul className={styles.buttonsList}>
      <li>
        <Button
          handleClick={handleUpdateUser}
          disabled={aboutError.length !== 0}
          mode="primary"
          title="Сохранить"
          width="222px"
        />
      </li>
      <li>
        <Button
          handleClick={cancelSettings}
          disabled={aboutError.length !== 0}
          mode="empty"
          title="Отменить"
        />
      </li>
    </ul>
  );
};
