import React, { JSX, useState } from "react";
import styles from "./test.module.css";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  selectNegativValue,
  selectPositivValue,
  addNegativValue,
  addPositivValue,
  resetValues
} from "@/store/reducers/testCounter/testCounterReducer";
import { Navbar } from "../Navbar/Navbar";
import { TestResultPopup } from "../TestResultPopup/TestResultPopup";
import { TestInterface, TestResult, ExpressDiagnoseResponse } from "@/types";


interface Test {
  test: TestInterface | null;
  onSendTestResult: (arg: TestResult) => void;
  resultOfPsychoTest?: ExpressDiagnoseResponse;
}

export const Test = ({test, onSendTestResult, resultOfPsychoTest}: Test): JSX.Element =>  {
  const navigate = useNavigate();
  const questions = test?.questions;

  const [visibleIndex, setVisibleIndex] = useState<number>(0);
  const [nextButtonIsHidden, setNextButtonIsHidden] = useState<boolean>(false);
  const [isResultsPopapVisible, setResultsPopapVisible] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const dispatch = useAppDispatch();
  const positivValue = useAppSelector(selectPositivValue);
  const negativValue = useAppSelector(selectNegativValue);

  const buttonClassname = cn(styles.button, {
    [styles.hidden] : nextButtonIsHidden === true
  })

  const backButtonClassname = cn(styles.buttonBack, {
    [styles.hidden] : nextButtonIsHidden === false
  })

  const finishButtonClassname = cn(styles.button, {
    [styles.hidden] : nextButtonIsHidden === false
  })

  const testFormClassname = cn(styles.test, {
    [styles.hidden] : isResultsPopapVisible === true
  })

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    if (test) {
      onSendTestResult({
        positive_value: positivValue,
        negative_value: negativValue,
        survey: test.id,
      })
    }
    dispatch(resetValues())
    setResultsPopapVisible(true);
  }

  function handleChangeIncrement() {
    dispatch(addPositivValue(1))
    dispatch(addNegativValue(-1))
  }

  function handleChangeDecrement() {
    dispatch(addPositivValue(-1))
    dispatch(addNegativValue(1))
    console.log(positivValue, negativValue)
  }

  function handleClick () {
    setVisibleIndex(visibleIndex + 5);
    setPage(page + 1);
    setNextButtonIsHidden(true);
  }

//при клике НАЗАД значения теста сбрасываются и обе страницы
//выставляют значение ответа по умолчанию - "НЕТ"
  function handleBackClick () {
    dispatch(resetValues())
    setVisibleIndex(visibleIndex - 5);
    setNextButtonIsHidden(false);
    setPage(page - 1);
  }

  function handleClosePopup () {
    setResultsPopapVisible(false);
    dispatch(resetValues());
    navigate('/');
    setPage(1)
  }

  return (
    <div className='page-container'>
      <Navbar />
      <article className={styles.container}>
        <form onSubmit={handleSubmit} className={testFormClassname}>

          <h1 className={styles.title}>Экспресс-оценка выгорания</h1>

          {questions && questions.slice(0 + visibleIndex, 5 + visibleIndex).map((question) => (
            <fieldset key={question.text.slice(-8)} className={styles.question}>

              <p>{question.text}</p>

              <label className={styles.label}>
                <input required name={question.text.slice(-8)} type="radio" onChange={handleChangeIncrement} className={styles.checkbox} value='Да'/>
                <span className={styles.visibleCheckbox}></span>
                Да
              </label>

              <label className={styles.label}>
                <input required name={question.text.slice(-8)} type="radio" onChange={handleChangeDecrement} className={styles.checkbox} defaultChecked value='Нет'/>
                <span className={styles.visibleCheckbox}></span>
                Нет
              </label>
            </fieldset>
          ))}

          <div className={styles.buttonContainer}>
            <button type='button' onClick={handleClick} className={buttonClassname}>Далее</button>
            <button onClick={handleBackClick} type='button' className={backButtonClassname}>Назад</button>
            <button type='submit' onClick={handleClick} className={finishButtonClassname}>Завершить</button>
          </div>

          <button type='button' onClick={handleClosePopup} className={styles.closeBtn}/>
          <p className={styles.paginate}>{page} из 2</p>
        </form>

        <TestResultPopup isTestsReulstLocated={false} isVisible={isResultsPopapVisible} onClose={handleClosePopup} resultOfPsychoTest={resultOfPsychoTest}/>
      </article>
    </div>
  );
};
