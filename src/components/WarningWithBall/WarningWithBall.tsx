import { JSX, useEffect, useState } from "react";
import styles from "./warningWithBall.module.css";
import cn from "classnames";

import { ExpressDiagnoseResponse } from "@/types";

interface WarningWithBall {
  resultOfPsychoTest?: ExpressDiagnoseResponse;
}

export function WarningWithBall ({resultOfPsychoTest}: WarningWithBall): JSX.Element {

  const [mode, setWarningBallClass] = useState<string>('');

  const warningBallClassname = cn(styles.warningBall, {
    [styles.green] : mode === 'green',
    [styles.yellow] : mode === 'yellow',
    [styles.red] : mode === 'red',
  })

  useEffect(() => {
    if (resultOfPsychoTest?.result === 'Нормальное состояние') {
    setWarningBallClass('green')
  } else if (resultOfPsychoTest?.result === 'Тревожное') {
    setWarningBallClass('yellow')
  } else if (resultOfPsychoTest?.result === 'В группе риска') {
    setWarningBallClass('red')
  }
  }, [resultOfPsychoTest])

  return (
    <section className={styles.conditionContainer}>
      <div className={warningBallClassname}></div>
      {resultOfPsychoTest?.result}
    </section>
  );
}
