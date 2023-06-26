import {Button} from "@/shared/ui/Button/Button.tsx";
import styles from './meetings.module.scss';
import MeetingsLog from "@/pages/profile/components/MeetingsLog/MeetingsLog.tsx";

export const Meetings = () => {
  return (
    <div>
      <MeetingsLog />
      <div className={styles.meetingButton}>
        <h2 className={styles.meetingQuestion}>Встреча состоялась?</h2>
        <Button title="Оценить состояние сотрудника" mode="outline" width="276px" height="40px"/>
      </div>
    </div>
  );
};
