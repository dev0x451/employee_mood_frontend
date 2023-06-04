import React, { useEffect, useState } from "react";
import styles from "./test.module.css";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { closeBtn } from "@/assets";
import {
  selectNegativValue,
  selectPositivValue,
  addNegativValue,
  addPositivValue,
  resetValues
} from "@/store/reducers/testCounter/testCounterReducer";
import { Navbar } from "../Navbar/Navbar";
// import { TestResultPopup } from "../TestResultPopup/TestResultPopup";
import { TestInterface, TestResult, ExpressDiagnoseResponse } from "@/types";


interface Test {
  test: TestInterface | null;
  onSendTestResult: (arg: TestResult) => void;
  resultOfPsychoTest?: ExpressDiagnoseResponse;
}

export const Test: React.FC<Test> = ({test, onSendTestResult, resultOfPsychoTest}) => {
  const navigate = useNavigate();
  const questions = test?.questions;

  const [visibleIndex, setVisibleIndex] = useState<number>(0);
  const [nextButtonIsHidden, setNextButtonIsHidden] = useState<boolean>(false);
  const [isResultsPopapVisible, setResultsPopapVisible] = useState<boolean>(false);
  const [resultExplanation, setResultExplanation] = useState<string>('');
  const [mode, setWarningBallClass] = useState<string>('');
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

  const closePopupClassname = cn(styles.resultsPopup, {
    [styles.hidden] : isResultsPopapVisible === false
  })

  const testFormClassname = cn(styles.test, {
    [styles.hidden] : isResultsPopapVisible === true
  })

  const warningBallClassname = cn(styles.warningBall, {
    [styles.green] : mode === 'green',
    [styles.yellow] : mode === 'yellow',
    [styles.red] : mode === 'red',
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
    setVisibleIndex(5);
    setPage(2);
    setNextButtonIsHidden(true);
  }

//при клике НАЗАД значения теста сбрасываются и обе страницы
//выставляют значение ответа по умолчанию - "НЕТ"
  function handleBackClick () {
    dispatch(resetValues())
    setVisibleIndex(0);
    setNextButtonIsHidden(false);
    setPage(1);
  }

  function handleMysticalPopup () {
    setResultsPopapVisible(false);
    dispatch(resetValues());
    navigate('/');
    setPage(1)
  }

  function handleCallChief () {
    alert("Отправлена заявка на разговор с руководителем");
    navigate('/');
  }

  useEffect(() => {
    if (resultOfPsychoTest?.result === 'Нормальное состояние') {
    setResultExplanation('В настоящий момент эмоциональное выгорание вам не грозит. Чтобы сохранить такое состояние в будущем, следуйте рекомендациям психологов, указанным ниже.');
    setWarningBallClass('green')
  } else if (resultOfPsychoTest?.result === 'Тревожное') {
    setResultExplanation('У вас есть признаки эмоционального выгорания. По возможности советуем взять небольшой отпуск.')
    setWarningBallClass('yellow')
  } else if (resultOfPsychoTest?.result === 'В группе риска') {
    setResultExplanation('Вы находитесь в активной стадии эмоционального выгорания. Пожалуйста, обратитесь за помощью к своему руководителю или психотерапевту.')
    setWarningBallClass('red')
  }
  }, [resultOfPsychoTest])

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
                Да
              </label>

              <label className={styles.label}>
                <input required name={question.text.slice(-8)} type="radio" onChange={handleChangeDecrement} className={styles.checkbox} defaultChecked value='Нет'/>
                Нет
              </label>

            </fieldset>
          ))}
          <div className={styles.buttonContainer}>
            <button type='button' onClick={handleClick} className={buttonClassname}>Далее</button>
            <button onClick={handleBackClick} type='button' className={backButtonClassname}>Назад</button>
            <button type='submit' onClick={handleClick} className={finishButtonClassname}>Завершить</button>
          </div>

          <button type='button' onClick={handleMysticalPopup} className={styles.closeBtn}/>
          <p className={styles.paginate}>{page} из 2</p>

        </form>

        <section className={closePopupClassname}>
         <h1 className={styles.title}>Экспресс-оценка выгорания</h1>
         <h2 className={styles.subtitle}>Ваш результат</h2>
          <div className={styles.conditionContainer}>
            <h3 className={styles.conditionText}>Состояние:</h3>
            <div className={warningBallClassname}></div>
            {resultOfPsychoTest?.result}
          </div>

          <p>{resultExplanation}</p>
          <h2 className={styles.subtitle}>Рекомендации</h2>
          <ol className={styles.list}>
            <li>
              <p>Определение краткосрочных и долгосрочных целей в трудовой деятельности.</p>
            </li>
            <li>
              <p>Отстаивание своих границ, отказ от дополнительной нагрузки.</p>
            </li>
            <li>
              <p>Соблюдение режима дня, сон не менее 8 часов, регулярное питание.</p>
            </li>
            <li>
              <p>Использование 10-15 минутных перерывов в работе, для снятия психоэмоционального напряжения.</p>
            </li>
            <li>
              <p>Самоконтроль своего состояния, отслеживание чувств и эмоций.</p>
            </li>
            <li>
              <p>Регулярные посильные физические нагрузки, прогулки на свежем воздухе.</p>
            </li>
            <li>
              <p>Переключение. Занятия делом, не связанным с профессиональной деятельностью (хобби, кино, развлечения)</p>
            </li>
          </ol>
          <div className={styles.buttonContainer}>
            {(resultOfPsychoTest?.result !== "Нормальное состояние") && <button type='button' onClick={handleCallChief} className={styles.button}>Обсудить с руководителем</button>}
            <button type='button' onClick={handleMysticalPopup} className={styles.buttonBack}>Закрыть</button>
          </div>
          <button type='button' onClick={handleMysticalPopup} className={styles.closeBtn}/>
        </section>

        {/* необходимо исправить позиционирование и заменить повторяющийся код */}
        {/* <TestResultPopup isVisible={isResultsPopapVisible} onClose={handleMysticalPopup} resultOfPsychoTest={resultOfPsychoTest}/> */}
      </article>
    </div>
  );
};
