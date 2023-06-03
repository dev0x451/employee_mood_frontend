import React, { useEffect, useState } from "react";
import styles from "./testResultPopup.module.css";
import cn from "classnames";

import { ExpressDiagnoseResponse } from "@/types";

interface TestResultPopup {
  resultOfPsychoTest?: ExpressDiagnoseResponse;
  isVisible?: boolean,
  onClose?: () => void
}

export const TestResultPopup: React.FC<TestResultPopup> = ({isVisible, onClose, resultOfPsychoTest}) => {

  const [isResultsPopapVisible, setResultsPopapVisible] = useState<boolean | undefined>(false);
  const [resultExplanation, setResultExplanation] = useState<string>('');
  const [mode, setWarningBallClass] = useState<string>('');

  const closePopupClassname = cn(styles.resultsPopup, {
    [styles.hidden] : isResultsPopapVisible === false
  })

  const warningBallClassname = cn(styles.warningBall, {
    [styles.green] : mode === 'green',
    [styles.yellow] : mode === 'yellow',
    [styles.red] : mode === 'red',
  })

  function handleClose () {
    setResultsPopapVisible(false);
    if (onClose) onClose();
  }

  function handleCallChief () {
    alert("Отправлена заявка на разговор с руководителем");
  }

  useEffect(() => (setResultsPopapVisible(isVisible)), [isVisible]);


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
        <button type='button' onClick={handleClose} className={styles.buttonBack}>Закрыть</button>
      </div>
      <button type='button' onClick={handleClose} className={styles.closeBtn}/>
    </section>
  );
};
