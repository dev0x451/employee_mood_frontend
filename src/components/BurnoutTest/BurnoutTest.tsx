import React, { JSX, useEffect, useState, useMemo } from "react";
import styles from "./burnoutTest.module.css";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { TestResultPopup } from "../TestResultPopup/TestResultPopup";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addTestResults,
  resetTestResults,
  selectTestResults
} from "@/store/reducers/test/testReducer";
import {
  TestInterface,
  SubmitArguments,
  ExpressDiagnoseResponse,
} from "@/types";

interface Test {
  test: TestInterface;
  onSendTestResult: (arg: SubmitArguments) => void;
  resultOfPsychoTest?: ExpressDiagnoseResponse;
  openTestAlertPopup: () => void;
}

export const BurnoutTest = ({test, onSendTestResult, resultOfPsychoTest}: Test): JSX.Element =>  {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const testsResults = useAppSelector(selectTestResults);
  const questions = test?.questions;
  const questions_quantity = test?.questions_quantity;

  const [visibleIndex, setVisibleIndex] = useState<number>(0);
  const [nextButtonIsHidden, setNextButtonIsHidden] = useState<boolean>(false);
  const [backButtonIsHidden, setBackButtonIsHidden] = useState<boolean>(true);
  const [isResultsPopapVisible, setResultsPopapVisible] = useState<boolean>(false);
  const [isSubmitForbidden, setIsSubmitForbidden] = useState<boolean>(false);
  const [numberOfQuestion, setNumberOfQuestion] = useState<number>(1);

  const widthBlueIndicator = useMemo(() => {
    return Math.ceil((numberOfQuestion/questions_quantity) * 100)
  }, [numberOfQuestion, questions_quantity])

  const backButtonClassname = cn(styles.buttonBack, {
    [styles.hidden] : backButtonIsHidden === true
  })

  const finishButtonClassname = cn(styles.burnoutButton, {
    [styles.hidden] : nextButtonIsHidden === false,
    [styles.disabled] : isSubmitForbidden === true,
  })

  const testFormClassname = cn(styles.test, {
    [styles.hidden] : isResultsPopapVisible === true
  })

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    if (test) {
      onSendTestResult({
        survey: test.id,
        results: testsResults
      })
    }
    dispatch(resetTestResults());
    setResultsPopapVisible(true);
  }

function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(addTestResults({'question_id': +e.target.id, 'variant_value': +e.target.value}))
  }

  function isCheckboxChecked (questionId: string, answerValue: number) {
    let res = false;
    const checkboxAnswerState = {
      'question_id': +questionId,
      'variant_value': +answerValue
    }

    if (testsResults.length > 0) {
      testsResults.forEach((result) => {
          if (result.question_id === checkboxAnswerState.question_id)
          res = result.variant_value === checkboxAnswerState.variant_value;
      })
    }
    return res;
  }

  function handleClick () {
    if (numberOfQuestion === questions_quantity) {
      setIsSubmitForbidden(false);
      return;
    }
    setBackButtonIsHidden(false);
    setVisibleIndex(visibleIndex + 1);
    setNumberOfQuestion(numberOfQuestion + 1);
    if (numberOfQuestion + 1 === questions_quantity) {
      setNextButtonIsHidden(true);
      setBackButtonIsHidden(false);
    }
  }

  function handleBackClick () {
    setNextButtonIsHidden(false);
    setVisibleIndex(visibleIndex - 1);
    setNumberOfQuestion(numberOfQuestion - 1);
    if (numberOfQuestion - 1 === 1) {
      setBackButtonIsHidden(true);
    }
  }

  function handleClosePopup () {
    setResultsPopapVisible(false);
    dispatch(resetTestResults());
    navigate(-1);
    setNumberOfQuestion(1);
  }

  useEffect(() => {
    if (testsResults.length < questions_quantity) {
      setIsSubmitForbidden(true)
    } else setIsSubmitForbidden(false)
  }, [testsResults, questions_quantity])

  return (
    <div className='page-container'>
      <Navbar />
      <article className={styles.burnoutContainer}>
        <form id='ExpressTestForm' onSubmit={handleSubmit} className={testFormClassname}>

          <h1 className={styles.burnoutTitle}>{test.title}</h1>
          <p className={styles.burnoutText}>{test.description}</p>

          {questions && questions.slice(0 + visibleIndex, 1 + visibleIndex).map((question) => (
            <div key={question.id}>
              <p className={styles.burnoutSubtitle} key={question.id}>{question.number}. {question.text}</p>
              {test.variants && test.variants.map((variant) => (
                <fieldset key={variant.text} className={styles.burnoutQuestion}>
                  <label className={styles.burnoutLabel}>
                    <input required
                      id={question.id}
                      name={question.id}
                      type="radio"
                      onClick={handleClick}
                      checked={isCheckboxChecked(question.id, variant.value)}
                      onChange={handleChangeInput}
                      className={styles.checkbox}
                      value={variant.value}
                    />
                    <span className={styles.burnoutVisibleCheckbox}></span>
                    <p className={styles.burnoutText}>{variant.text}</p>
                  </label>
                </fieldset>
              ))}
            </div>
            ))}

          <div className={styles.burnoutIndicatorContainer}>
            <div className={styles.burnoutButtonContainer}>
              <button onClick={handleBackClick} type='button' className={backButtonClassname}>Назад</button>
              <button type='submit' onClick={handleClick} disabled={isSubmitForbidden} className={finishButtonClassname}>Завершить</button>
            </div>

            <div className={styles.burnoutProgressIndicator}>
              <div style={{width: `${widthBlueIndicator}%`}} className={styles.burnoutProgressIndicatorBlue}/>
            </div>

            <p className={styles.burnoutPaginate}>Вопрос {numberOfQuestion} из {questions_quantity}</p>
          </div>

          <button type='button' onClick={handleClosePopup} className={styles.closeBtn}/>
        </form>

        <TestResultPopup isTestsReulstLocated={false} isVisible={isResultsPopapVisible} onClose={handleClosePopup} resultOfPsychoTest={resultOfPsychoTest}/>
      </article>
    </div>
  );
};
