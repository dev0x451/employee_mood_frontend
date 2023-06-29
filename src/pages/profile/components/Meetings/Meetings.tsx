import {Button} from "@/shared/ui/Button/Button.tsx";
import styles from './meetings.module.scss';
import MeetingsLog from "@/pages/profile/components/MeetingsLog/MeetingsLog.tsx";
import {ReactElement} from "react";

interface Props {
  openAddPopup: () => void;
}
export const Meetings = ({openAddPopup}: Props): ReactElement => {
  return (
    <div className={styles.meetings}>
      <MeetingsLog />
      <div className={styles.meetingsButton}>
        <h2 className={styles.meetingsQuestion}>Встреча состоялась?</h2>
        <Button handleClick={openAddPopup} title="Оценить состояние сотрудника" mode="outline" width="276px" height="40px"/>
      </div>
    </div>
  );
};
