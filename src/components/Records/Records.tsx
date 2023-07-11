import styles from "./records.module.css";
import React, {useState, useEffect} from "react";
import { sortIcon } from "@/assets";
import { TestResultPopup } from "../TestResultPopup/TestResultPopup";
import { WarningWithBall } from "../WarningWithBall/WarningWithBall";
import { COUNT_EMPLOYEES_PAGE, usePagination } from "@/shared/constants";
import { ExpressDiagnoseResponse } from "@/types";

interface Records {
  allTestsResults?: ExpressDiagnoseResponse[],
}

//необходим полный рефакторинг логики сортировки

export const Records: React.FC<Records> = ({allTestsResults}) => {

  // eсли survey код вида тестирования, то в этот массив нужно записать названия видов тестирования в зависимости от кода
  const arrSurvey = ['Проверка', "Экспресс-оценка выгорания", "Опросник профессионального выгорания Маслач", 'Диагностика эмоционального выгорания', 'Что-то', 'Задача', "Тестирование", 'Психолог', 'Врач', 'Психолог', 'Разговор', 'Финал'];

  const [isOpen, setOpen] = useState<boolean>(false);
  const [result, setResult] = useState<ExpressDiagnoseResponse>();
  const { countCardPage, addCard } = usePagination(COUNT_EMPLOYEES_PAGE);


  const [testResultsSort, setTestResultsSort] = useState(allTestsResults);

  const [isSortTest, setIsSortTest] = useState(true)
  const [isSortData, setIsSortData] = useState(true)
  const [isSortResult, setIsSortResult] = useState(true)

  useEffect(()=>{
    if (allTestsResults) setTestResultsSort(allTestsResults)
  },[allTestsResults])

//необходим полный рефакторинг логики сортировки

  const sortField = (a: ExpressDiagnoseResponse, b: ExpressDiagnoseResponse, field: string) => {
    let x = '';
    let y = '';

    switch(field) {
      case 'test':
        x = arrSurvey[a.survey.id];
        y = arrSurvey[b.survey.id];
      break;
      case 'data':
        x = a.completion_date;
        y = b.completion_date;
      break;
      case 'result':
        x = a.mental_state.name;
        y = b.mental_state.name;
      break;
      default:
        x = '';
        y = '';
      break;
    }
    if (x < y) {return -1}
    if (x > y) {return 1}
    return 0;
  }

  const sortFields = (field: string, isSortField: boolean) => {
    if (testResultsSort)
    isSortField ?
    setTestResultsSort(testResultsSort.sort((a, b)=>sortField(a, b, field))) :
    setTestResultsSort(testResultsSort.sort((b, a)=>sortField(a, b, field)))
  }

  const sortTest = () => {
    setIsSortTest(!isSortTest);
    sortFields('test', isSortTest);
  }
  const sortData = () => {
    setIsSortData(!isSortData);
    sortFields('data', isSortData);
  }
  const sortResult = () => {
    setIsSortResult(!isSortResult);
    sortFields('result', isSortResult);
  }

  function handleOpenPopup (record: ExpressDiagnoseResponse) {
    setOpen(true);
    setResult(record);
  }

  function handleClosePopup() {
    setOpen(false);
  }

  function resultDate (date: string){
    const ruDate = new Date(date).toLocaleString('ru',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return ruDate.slice(0, -3)
  }

  return (
    <div className={styles.records}>
      <section className={styles.tableRecords}>
        <button className={styles.sortButton} onClick={sortTest}>Наименование опроса {sortIcon}</button>
        <button className={styles.sortButton} onClick={sortData}>Дата проведения {sortIcon}</button>
        <button className={styles.sortButton} onClick={sortResult}>Результат {sortIcon}</button>
        <div className={styles.plug}></div>
      </section>
      {testResultsSort && testResultsSort.map((record, index) => (
        index < countCardPage ?
          <section key={index} className={styles.record}>
            <p className={styles.text}>{arrSurvey[record.survey.id]}</p>
            {record.completion_date && resultDate(record.completion_date)}
            <WarningWithBall resultOfPsychoTest={record}/>
            <button type="button" onClick={() => handleOpenPopup(record)} disabled={isOpen} className={styles.recordButton}>Подробнее</button>
          </section> :
        null
      ))}
      {testResultsSort && countCardPage <= testResultsSort.length &&
      <button className={styles.addButton} onClick={addCard}>Загрузить ещё</button>}
      <TestResultPopup isTestsReulstLocated={true} isVisible={isOpen} resultOfPsychoTest={result} onClose={handleClosePopup}/>
    </div>
  );
};
