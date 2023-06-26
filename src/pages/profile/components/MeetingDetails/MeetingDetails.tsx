import {Meeting} from "@/types.ts";
import {ReactElement, useEffect, useState} from "react";
import cn from "classnames";
import styles from './meetingdetails.module.scss';

export const MeetingDetails = ({title, date, level, comment}: Meeting): ReactElement => {
  const [mode, setWarningBallClass] = useState<string>('');

  const warningBallClassname = cn(styles.warningBall, {
    [styles.green] : mode === 'green',
    [styles.yellow] : mode === 'yellow',
    [styles.red] : mode === 'red',
  })

  useEffect(() => {
    if (level === 1) {
      setWarningBallClass('green')
    } else if (level === 2) {
      setWarningBallClass('yellow')
    } else if (level === 3) {
      setWarningBallClass('red')
    }
  }, [level])

  return (
    <div>
      <h4 className={styles.subtitle}>Последняя встреча: <span className={styles.meetingDate}>{date}</span></h4>
      <div className={styles.mentalState}>
        <h4 className={styles.subtitle}>Оценка состояния сотрудника:</h4>
        <div className={warningBallClassname}/>
        <p className={styles.mentalStateName}>{title}</p>
      </div>
      <h4 className={styles.subtitle}>Комментарий:</h4>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
};
