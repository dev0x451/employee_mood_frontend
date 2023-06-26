import {ReactElement, useEffect, useState} from 'react';
import cn from "classnames";
import styles from "./warningball.module.scss";

interface Props {
  level: number;
  title: string;
}
export const WarningBall = ({level, title}: Props): ReactElement => {
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
    <div className={styles.warningBallContainer}>
      <div className={warningBallClassname}/>
      <p className={styles.mentalStateName}>{title}</p>
    </div>
  );
};
