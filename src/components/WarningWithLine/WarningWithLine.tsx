import { JSX, useEffect, useState } from "react";
import styles from "./warningWithLine.module.css";
import cn from "classnames";

import { ExpressDiagnoseResponse, Graph } from "@/types";

interface WarningWithBall {
  resultOfPsychoTest: ExpressDiagnoseResponse;
  graph: Graph
}

export function WarningWithLine ({ graph}: WarningWithBall): JSX.Element {

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
    if (wid > 10) {
      setWidth(wid)
    } else {
      setWidth(10)
    }
    setWarningLineClass(graph.color);
    setCondition(graph.text);
  }, [graph])

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
