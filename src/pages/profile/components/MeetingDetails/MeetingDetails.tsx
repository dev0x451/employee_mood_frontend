import {Meeting} from "@/types.ts";
import {ReactElement} from "react";
import styles from './meetingdetails.module.scss';
import {WarningBall} from "@/pages/profile/components/WarningBall/WarningBall.tsx";

export const MeetingDetails = ({name, date, level, comment, subtitle}: Meeting): ReactElement => {

  return (
    <div>
      <h4 className={styles.subtitle}>{subtitle} <span className={styles.meetingDate}>{date.split("-").reverse().join(".")}</span></h4>
      <div className={styles.mentalState}>
        <h4 className={styles.subtitle}>Оценка состояния сотрудника:</h4>
        <WarningBall level={level} title={name}/>
      </div>
      <h4 className={styles.subtitle}>Комментарий:</h4>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
};
