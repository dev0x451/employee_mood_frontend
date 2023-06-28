import React, { useEffect, useState } from "react";
import styles from "./testResultPopup.module.css";
import ReactMarkdown from 'react-markdown';

import { WarningWithBall } from "../WarningWithBall/WarningWithBall";
import { WarningWithLine } from "../WarningWithLine/WarningWithLine";
import cn from "classnames";

import { ExpressDiagnoseResponse } from "@/types";

interface TestResultPopup {
  resultOfPsychoTest?: ExpressDiagnoseResponse;
  isVisible: boolean;
  onClose: () => void;
  isTestsReulstLocated: boolean;
}

export const TestResultPopup: React.FC<TestResultPopup> = ({resultOfPsychoTest, isVisible, onClose, isTestsReulstLocated}) => {

  const [isResultsPopapVisible, setResultsPopapVisible] = useState<boolean | undefined>(false);

  const closePopupClassname = cn(styles.resultsPopup, {
    [styles.hidden]: isResultsPopapVisible === false,
    [styles.testsLocated]: isTestsReulstLocated === true,
  });

  function handleClose() {
    setResultsPopapVisible(false);
    if (onClose) onClose();
  }

  function handleCallChief() {
    alert("Отправлена заявка на разговор с руководителем");
  }

  useEffect(() => (setResultsPopapVisible(isVisible)), [isVisible]);

  return (
    <section className={closePopupClassname}>
      <h1 className={styles.title}>{resultOfPsychoTest?.survey.title}</h1>
      <h2 className={styles.subtitle}>Ваш результат</h2>

      <div className={styles.conditionContainer}>
        <h3 className={styles.conditionText}>Состояние:</h3>
        <WarningWithBall resultOfPsychoTest={resultOfPsychoTest} />
      </div>
      <p>{resultOfPsychoTest?.mental_state.message}</p>

      {(resultOfPsychoTest?.survey.type === 'yn') ?
        <>
          {resultOfPsychoTest?.survey.text.length > 0 ? <h2 className={styles.subtitle}>Рекомендации</h2> : null}
          <ReactMarkdown>{resultOfPsychoTest?.survey.text}</ReactMarkdown>
          <div className={styles.buttonContainer}>
            {(resultOfPsychoTest?.mental_state.level !== 1) && <button type='button' onClick={handleCallChief} className={styles.button}>Обсудить с руководителем</button>}
          </div>
        </>
          :
        <>
          <h2 className={styles.subtitle}>Расшифровка</h2>

          {resultOfPsychoTest?.summary?.graphs?.map(graph => {

            switch (graph.size) {
                // case 'big':
                // return <div className={styles.summaryGraph} key={graph.title.slice(-8)}>
                //   <h3 className={styles.conditionText}>{graph.title}: {parseInt((graph.value * 100).toString(), 10)} %</h3>
                //   <WarningWithLine resultOfPsychoTest={resultOfPsychoTest} graph={graph}/>
                // </div>;
                // break;
                case 'big':
                  return null;
                  break;

                case 'medium':
                  return <div className={styles.summaryGraph} key={graph.title.slice(-8)}>
                  <h4 className={styles.conditionSubtitle}>{graph.title}</h4>
                  <WarningWithLine resultOfPsychoTest={resultOfPsychoTest} graph={graph}/>
                </div>
                break;

                case 'small':
                  return <div className={styles.summaryGraph} key={graph.title.slice(-8)}>
                  <h5 className={styles.conditionSmallSubtitle}>{graph.title}</h5>
                  <WarningWithLine resultOfPsychoTest={resultOfPsychoTest} graph={graph}/>
                </div>
                break;
              }
            })
          }

          <ReactMarkdown children={(resultOfPsychoTest?.survey.text !== undefined) ? resultOfPsychoTest?.survey.text : ''}/>

          <div className={styles.buttonContainer}>
            {(resultOfPsychoTest?.mental_state.level !== 1) && <button type='button' onClick={handleCallChief} className={styles.button}>Обсудить с руководителем</button>}
          </div>
        </>
      }

      <button type='button' onClick={handleClose} className={styles.closeBtn}/>
    </section>
  );
};
