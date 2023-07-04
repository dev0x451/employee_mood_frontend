import {getLifeDirections} from "@/shared/api/Api";
import {useRequest} from "@/shared/hooks/useRequest";
import {Direction} from "@/pages/balancewheel/types/types";
import {ChangeEvent, ReactElement, useEffect, useState} from "react";
import styles from './controlbalancewheel.module.scss';
import {InputRange} from "@/pages/balancewheel/components/InputRange/InputRange";
import {Radar} from "@/pages/balancewheel/components/Radar/Radar";
import {Button} from "@/shared/ui/Button/Button";
import {ProgressBar} from "@/pages/balancewheel/components/ProgressBar/ProgressBar";
import {WheelResults, WheelResultsInfo} from "@/types";

interface Props {
  color: string;
  instruction: string;
  isPriority: boolean;
  sendResults: (results: WheelResults[], isPriority: boolean) => void;
  goToPreviousQuestion: () => void;
  goToNextQuestion: () => void;
  step: number;
  data: WheelResultsInfo | undefined;
}

export const ControlBalanceWheel = ({color, instruction, sendResults, isPriority, goToPreviousQuestion, goToNextQuestion, step, data}: Props): ReactElement => {
  const [lifeDirections] = useRequest(getLifeDirections);

  // состояния сфер на колесе баланса

  const [relationsValue, setRelationsValue] = useState<number>(1);
  const [peopleValue, setPeopleValue] = useState<number>(1);
  const [workValue, setWorkValue] = useState<number>(1);
  const [moneyValue, setMoneyValue] = useState<number>(1);
  const [brightLifeValue, setBrightLifeValue] = useState<number>(1);
  const [selfDevelopmentValue, setSelfDevelopmentValue] = useState<number>(1);
  const [spiritualityValue, setSpiritualityValue] = useState<number>(1);
  const [healthValue, setHealthValue] = useState<number>(1);
  const [results, setResults] = useState<{ num: number, result: number }[]>([]);


  useEffect(() => {
    if(data) {
      setRelationsValue(data.results[0].result);
      setPeopleValue(data.results[1].result);
      setWorkValue(data.results[2].result);
      setMoneyValue(data.results[3].result);
      setBrightLifeValue(data.results[4].result);
      setSelfDevelopmentValue(data.results[5].result);
      setSpiritualityValue(data.results[6].result);
      setHealthValue(data.results[7].result);
    }
  }, [data])

  useEffect(() => {
    setResults([
      {num: 1, result: relationsValue},
      {num: 2, result: peopleValue},
      {num: 3, result: workValue},
      {num: 4, result: moneyValue},
      {num: 5, result: brightLifeValue},
      {num: 6, result: selfDevelopmentValue},
      {num: 7, result: spiritualityValue},
      {num: 8, result: healthValue},
    ]);
  }, [relationsValue, peopleValue, workValue, moneyValue, brightLifeValue, selfDevelopmentValue, spiritualityValue, healthValue]);

  const chartData = [
    {
      "life-direction": "Отношения",
      "Результат": relationsValue,
    },
    {
      "life-direction": "Окружение",
      "Результат": peopleValue,
    },
    {
      "life-direction": "Работа",
      "Результат": workValue,
    },
    {
      "life-direction": "Обеспеченность",
      "Результат": moneyValue,
    },
    {
      "life-direction": "Яркость жизни",
      "Результат": brightLifeValue,
    },
    {
      "life-direction": "Саморазвитие",
      "Результат": selfDevelopmentValue,
    },
    {
      "life-direction": "Духовность",
      "Результат": spiritualityValue,
    },
    {
      "life-direction": "Здоровье",
      "Результат": healthValue,
    }
  ]

  const resetInputs = () => {
    setRelationsValue(1);
    setPeopleValue(1);
    setWorkValue(1);
    setMoneyValue(1);
    setBrightLifeValue(1);
    setSelfDevelopmentValue(1);
    setSpiritualityValue(1);
    setHealthValue(1);
  }

  const handleButtonDoneClick = () => {
    sendResults(results, isPriority);
    resetInputs();
    goToNextQuestion();
  };

  const handleRelationsValue = (e: ChangeEvent<HTMLInputElement>) => {
    setRelationsValue(Number(e.target.value));
  }
  const handlePeopleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPeopleValue(Number(e.target.value));
  }
  const handleWorkValue = (e: ChangeEvent<HTMLInputElement>) => {
    setWorkValue(Number(e.target.value));
  }
  const handleMoneyValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMoneyValue(Number(e.target.value));
  }
  const handleBrightLifeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setBrightLifeValue(Number(e.target.value));
  }
  const handleSelfDevelopmentValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSelfDevelopmentValue(Number(e.target.value));
  }
  const handleSpiritualityValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSpiritualityValue(Number(e.target.value));
  }
  const handleHealthValue = (e: ChangeEvent<HTMLInputElement>) => {
    setHealthValue(Number(e.target.value));
  }


  return (
    <div>
      <h4 className={styles.title}>{instruction}</h4>
      <div className={styles.controlArea}>
        <ul className={styles.controlList}>
          <li className={styles.controlListItem}>
            <ul className={styles.directionsList}>
              {lifeDirections && lifeDirections.map((direction: Direction) => (
                <li className={`${styles.title} ${styles.directionsListItem}`}>{direction.name}</li>
              ))}
            </ul>
          </li>
          <li className={styles.controlListItem}>
            <ul className={styles.inputsList}>
              <li className={styles.inputsListItem}>
                <InputRange color={color} handleChange={handleRelationsValue} value={relationsValue} />
              </li>
              <li className={styles.inputsListItem}>
                <InputRange color={color} handleChange={handlePeopleValue} value={peopleValue} />
              </li>
              <li className={styles.inputsListItem}>
                <InputRange color={color} handleChange={handleWorkValue} value={workValue} />
              </li>
              <li className={styles.inputsListItem}>
                <InputRange color={color} handleChange={handleMoneyValue} value={moneyValue} />
              </li>
              <li className={styles.inputsListItem}>
                <InputRange color={color} handleChange={handleBrightLifeValue} value={brightLifeValue} />
              </li>
              <li className={styles.inputsListItem}>
                <InputRange color={color} handleChange={handleSelfDevelopmentValue} value={selfDevelopmentValue} />
              </li>
              <li className={styles.inputsListItem}>
                <InputRange color={color} handleChange={handleSpiritualityValue} value={spiritualityValue} />
              </li>
              <li className={styles.inputsListItem}>
                <InputRange color={color} handleChange={handleHealthValue} value={healthValue} />
              </li>
            </ul>
          </li>
        </ul>
        <div className={styles.test}><Radar step={step} chartData={chartData} /></div>
      </div>
      <div className={styles.bottomArea}>
        {step === 1
          ?
          <div className={styles.buttonsList}>
            <Button handleClick={goToPreviousQuestion} mode="empty" title="Назад" width="140px"/>
            <Button handleClick={handleButtonDoneClick} mode="primary" title="Готово" width="200px"/>
          </div>
          :
          <Button handleClick={handleButtonDoneClick} mode="primary" title="Готово" width="200px"/>
        }
        <ProgressBar step={step}/>
      </div>
    </div>
  );
};
