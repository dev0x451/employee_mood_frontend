import React, { JSX, useEffect, useState, useMemo } from "react";
import styles from "./test.module.css";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { TestResultPopup } from "../TestResultPopup/TestResultPopup";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addTestResults,
  resetTestResults,
  selectTestResults,
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
  // takeNewEmployeesList: () => Promise<void>;
}

export const Test = ({
  test,
  onSendTestResult,
  resultOfPsychoTest,
  openTestAlertPopup,
  // takeNewEmployeesList
}: Test): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const testsResults = useAppSelector(selectTestResults);
  const questions = test?.questions;
  const questions_quantity = test?.questions_quantity;

  function countPages(questions_quantity: number) {
    if (questions_quantity % 5 > 0) {
      return parseInt((questions_quantity / 5).toString(), 2) + 1;
    } else return questions_quantity / 5;
  }
  const numberOfPages = useMemo(
    () => countPages(questions_quantity),
    [questions_quantity]
  );

  const [visibleIndex, setVisibleIndex] = useState<number>(0);
  const [nextButtonIsHidden, setNextButtonIsHidden] = useState<boolean>(false);
  const [isResultsPopapVisible, setResultsPopapVisible] =
    useState<boolean>(false);
  const [isSubmitForbidden, setIsSubmitForbidden] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const buttonClassname = cn(styles.button, {
    [styles.hidden]: nextButtonIsHidden === true,
  });

  const backButtonClassname = cn(styles.buttonBack, {
    [styles.hidden]: nextButtonIsHidden === false,
  });

  const finishButtonClassname = cn(styles.button, {
    [styles.hidden]: nextButtonIsHidden === false,
    [styles.disabled]: isSubmitForbidden === true,
  });

  const testFormClassname = cn(styles.test, {
    [styles.hidden]: isResultsPopapVisible === true,
  });

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    if (test) {
      onSendTestResult({
        survey: test.id,
        results: testsResults,
      });
    }
    dispatch(resetTestResults());
    setResultsPopapVisible(true);
    // takeNewEmployeesList();
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

  function handleClick() {
    if (testsResults.length >= 0 && testsResults.length < 5) {
      openTestAlertPopup();
    }
    setVisibleIndex(visibleIndex + 5);
    setPage(page + 1);
    setNextButtonIsHidden(true);
  }

  function handleBackClick() {
    setVisibleIndex(visibleIndex - 5);
    setNextButtonIsHidden(false);
    setPage(page - 1);
  }

  function handleClosePopup() {
    setResultsPopapVisible(false);
    dispatch(resetTestResults());
    navigate(-1);
    setPage(1);
  }

  useEffect(() => {
    if (testsResults.length < 10) {
      setIsSubmitForbidden(true);
    } else setIsSubmitForbidden(false);
  }, [testsResults]);

  return (
    <div className="page-container">
      <Navbar />
      <article className={styles.container}>
        <form id='ExpressTestForm' onSubmit={handleSubmit} className={testFormClassname}>

          <h1 className={styles.title}>{test.title}</h1>

          {questions && questions.slice(0 + visibleIndex, 5 + visibleIndex).map((question) => (

            <div className={styles.question} key={question.id}>

                <p>{question.number}. {question.text}</p>
                {test.variants && test.variants.map((variant) => (

                  <fieldset key={variant.value} className={styles.question}>
                    <label className={styles.label}>
                      <input required
                        id={question.id}
                        name={question.id}
                        type="radio"
                        checked={isCheckboxChecked(question.id, variant.value)}
                        onChange={handleChangeInput}
                        className={styles.checkbox}
                        value={variant.value}
                      />
                      <span className={styles.visibleCheckbox}></span>
                      {variant.text}
                    </label>
                  </fieldset>

                ))}
            </div>
          ))}
          <div className={styles.buttonContainer}>
            <button
              type="button"
              onClick={handleClick}
              className={buttonClassname}
            >
              Далее
            </button>
            <button
              onClick={handleBackClick}
              type="button"
              className={backButtonClassname}
            >
              Назад
            </button>
            <button
              type="submit"
              onClick={handleClick}
              disabled={isSubmitForbidden}
              className={finishButtonClassname}
            >
              Завершить
            </button>
          </div>

          <button
            type="button"
            onClick={handleClosePopup}
            className={styles.closeBtn}
          />
          <p className={styles.paginate}>
            {page} из {numberOfPages}
          </p>
        </form>

        <TestResultPopup
          isTestsReulstLocated={false}
          isVisible={isResultsPopapVisible}
          onClose={handleClosePopup}
          resultOfPsychoTest={resultOfPsychoTest}
        />
      </article>
    </div>
  );
};
