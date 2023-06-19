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
    if (resultOfPsychoTest?.mental_state.name === 'Нормальное') {
    setWarningBallClass('green')
  } else if (resultOfPsychoTest?.mental_state.name === 'Тревожное') {
    setWarningBallClass('yellow')
  } else if (resultOfPsychoTest?.mental_state.name === 'В группе риска') {
    setWarningBallClass('red')
  }
  }, [resultOfPsychoTest])

  return (
    <section className={styles.conditionContainer}>
      <div className={warningBallClassname}></div>
      {resultOfPsychoTest?.mental_state.name}
    </section>
  );
}
