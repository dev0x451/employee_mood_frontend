import { JSX, useEffect, useState } from "react";
import styles from "./warningWithLine.module.css";
import cn from "classnames";

import { ExpressDiagnoseResponse, Graph } from "@/types";

interface WarningWithBall {
  resultOfPsychoTest: ExpressDiagnoseResponse;
  graph: Graph
}

export function WarningWithLine ({resultOfPsychoTest, graph}: WarningWithBall): JSX.Element {

  const [mode, setWarningLineClass] = useState<string>('');
  const [condition, setCondition] = useState<string>('');
  const [width, setWidth] = useState<number>(0);

  const warningLineClassname = cn(styles.warningLine, {
    [styles.green] : mode === 'green',
    [styles.yellow] : mode === 'yellow',
    [styles.red] : mode === 'red',
  })

  useEffect(() => {
    const wid = parseInt((graph.value / graph.max_value * 100).toString(), 10);
    if (wid > 0) {
      setWidth(wid)
    } else {
      setWidth(10)
    }

    if (graph.title === "Эмоциональное истощение") {
      if (graph.value >= 0 && graph.value <= 15) {
        setWarningLineClass('green');
        setCondition('низкое')
      } else if (graph.value >= 16 && graph.value <= 24) {
        setWarningLineClass('yellow');
        setCondition('среднее')
      } else if (graph.value >= 25 && graph.value <= 54) {
        setWarningLineClass('red');
        setCondition('высокое')
      }
    } else if (graph.title === "Деперсонализация") {
      if (graph.value >= 0 && graph.value <= 5) {
        setWarningLineClass('green');
        setCondition('низкое')
      } else if (graph.value >= 6 && graph.value <= 10) {
        setWarningLineClass('yellow');
        setCondition('среднее')
      } else if (graph.value >= 11 && graph.value <= 30) {
        setWarningLineClass('red');
        setCondition('высокое')
      }
    } else if (graph.title === "Редукция проф.достижений") {
      if (graph.value >= 37 && graph.value <= 48) {
        setWarningLineClass('green');
        setCondition('низкое')
      } else if (graph.value >= 31 && graph.value <= 36) {
        setWarningLineClass('yellow');
        setCondition('среднее')
      } else if (graph.value >= 0 && graph.value <= 30) {
        setWarningLineClass('red');
        setCondition('высокое')
      }
    }
  }, [resultOfPsychoTest, graph])

  return (
    <section className={styles.graphContainer}>
      {/* {
        (graph.size === 'big') && <div style={{width: `${width}%`}} className={warningLineClassname}>
          <p className={styles.graphText}>{condition}</p>
        </div>
      } */}
      {
        (graph.size === 'big') && null
      }
      {
        (graph.size === 'medium') && <div style={{width: `${width}%`}} className={warningLineClassname}>
          <p className={styles.graphText}>{condition}</p>
        </div>
      }
      {
        (graph.size === 'small') && <div style={{width: `${width}%`}} className={warningLineClassname}>
          <p className={styles.graphText}>{condition}</p>
        </div>
      }
    </section>
  );
}
