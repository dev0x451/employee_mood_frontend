import styles from './balancewheelresult.module.scss';
import { Radar } from "@/pages/balancewheel/components/Radar/Radar";
import { ProgressBar } from "@/pages/balancewheel/components/ProgressBar/ProgressBar";
import { Button } from "@/shared/ui/Button/Button";
import {ReactElement, useEffect, useState} from "react";
import {Data, WheelResultItem, WheelResultsInfo} from "@/types";
import {useLocation} from "react-router";


interface BalanceWheelResultProps {
  step: number;
  goToFirstQuestion?: () => void;
  data: Data[];
}

export const BalanceWheelResult = ({ step, goToFirstQuestion, data }: BalanceWheelResultProps): ReactElement => {
  const [priorityResults, setPriorityResults] = useState<WheelResultsInfo | undefined>(undefined);
  const [currentResults, setCurrentResults] = useState<WheelResultsInfo | undefined>(undefined);
  const [chartData, setChartData] = useState<WheelResultItem[]>([]);
  const {pathname} = useLocation();

  useEffect(() => {
    if (data) {
      setPriorityResults(data.find(item => item.set_priority === true)  || undefined);
      setCurrentResults(data.find(item => item.set_priority === false)  || undefined);
    }
  }, [data]);

  console.log(data);

  useEffect(() => {
    if ((priorityResults && priorityResults.results.length !== 0) && (currentResults && currentResults.results.length !== 0)) {
      setChartData([
        {
          "life-direction": "Отношения",
          "Приоритет": priorityResults.results[0].result,
          "Текущее состояние": currentResults.results[0].result,
        },
        {
          "life-direction": "Окружение",
          "Приоритет": priorityResults.results[1].result,
          "Текущее состояние": currentResults.results[1].result,
        },
        {
          "life-direction": "Работа",
          "Приоритет": priorityResults.results[2].result,
          "Текущее состояние": currentResults.results[2].result,
        },
        {
          "life-direction": "Обеспеченность",
          "Приоритет": priorityResults.results[3].result,
          "Текущее состояние": currentResults.results[3].result,
        },
        {
          "life-direction": "Яркость жизни",
          "Приоритет": priorityResults.results[4].result,
          "Текущее состояние": currentResults.results[4].result,
        },
        {
          "life-direction": "Саморазвитие",
          "Приоритет": priorityResults.results[5].result,
          "Текущее состояние": currentResults.results[5].result,
        },
        {
          "life-direction": "Духовность",
          "Приоритет": priorityResults.results[6].result,
          "Текущее состояние": currentResults.results[6].result,
        },
        {
          "life-direction": "Здоровье",
          "Приоритет": priorityResults.results[7].result,
          "Текущее состояние": currentResults.results[7].result,
        }
      ]);
    } else {
      setChartData([]);
    }
  }, [priorityResults, currentResults]);

  return (
    <div className={pathname !== "/balance-wheel" ? styles.container : ""}>
      <div className={styles.resultArea}>
        {pathname === "/balance-wheel"
          ?
          <div className={styles.resultInfo}>
            <h4 className={styles.title}>Ваше колесо жизненного баланса готово!</h4>
            <ul className={styles.legend}>
              <li className={styles.legendItem}>
                <div className={`${styles.legendColor} ${styles.legendColorPriority}`}></div>
                <p className={styles.text}>Приоритет жизненных сфер</p>
              </li>
              <li className={styles.legendItem}>
                <div className={`${styles.legendColor} ${styles.legendColorCurrent}`}></div>
                <p className={styles.text}>Оценка текущего состояния</p>
              </li>
            </ul>
            <p className={styles.text}>Все сферы нашего бытия тесно взаимосвязаны. Работая над одной, подтягиваешь и другие. Не нужно пытаться достичь самого высокого показателя по каждой сфере, но важно найти их наиболее гармоничное сочетание, при котором вы чувствуете себя счастливым.</p>
            <p className={`${styles.text} ${styles.textLast}`}>Точки роста — там, где приоритет высокий, а удовлетворённость низкая. Но стоит помнить, что ваша цель — не стать отличником и получить десятку по всем критериям, а объективно взглянуть на свою жизнь.</p>
          </div>
          :
          <ul className={styles.legend}>
            <li className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.legendColorPriority}`}></div>
              <p className={styles.text}>Приоритет жизненных сфер</p>
            </li>
            <li className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.legendColorCurrent}`}></div>
              <p className={styles.text}>Оценка текущего состояния</p>
            </li>
          </ul>
        }
        <div className={pathname === "/balance-wheel" ? styles.chartArea : `${styles.chartArea} ${styles.chartAreaSmall}`}>
          {chartData.length !== 0 && priorityResults && currentResults && (
            <Radar step={step} chartData={chartData} />
          )}
        </div>
      </div>
      {pathname === "/balance-wheel"
        &&
      <div className={styles.bottomArea}>
        <Button handleClick={goToFirstQuestion} mode="primary" title="Обновить" width="200px" />
        <ProgressBar step={step} />
      </div>
      }
    </div>
  );
};
