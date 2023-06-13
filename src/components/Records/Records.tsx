import styles from "./records.module.css";
import React, {useState, useEffect} from "react";
import { sortIcon } from "@/assets";
import { TestResultPopup } from "../TestResultPopup/TestResultPopup";
import { WarningWithBall } from "../WarningWithBall/WarningWithBall";
import { ExpressDiagnoseResponse } from "@/types";
// import { arrTest } from "@/shared/constants";

interface Records {
  allTestsResults?: ExpressDiagnoseResponse[],
}

//необходим полный рефакторинг логики сортировки

export const Records: React.FC<Records> = ({allTestsResults}) => {

  // eсли survey код вида тестирования, то в этот массив нужно записать названия видов тестирования в зависимости от кода
  const arrSurvey = ['Проверка', 'Диагностика эмоционального выгорания', 'Что-то', 'Задача', "Тестирование", 'Психолог', 'Врач', 'Психолог', 'Разговор', 'Финал'];

  const [isOpen, setOpen] = useState<boolean>(false);
  const [result, setResult] = useState<ExpressDiagnoseResponse>();

  const [testResultsSort, setTestResultsSort] = useState(allTestsResults);
  // const [testResultsSort, setTestResultsSort] = useState(arrTest);

  const [isSortTest, setIsSortTest] = useState(true)
  const [isSortData, setIsSortData] = useState(true)
  const [isSortResult, setIsSortResult] = useState(true)

  useEffect(()=>{
    if (allTestsResults) setTestResultsSort(allTestsResults)
  },[allTestsResults])

//необходим полный рефакторинг логики сортировки

  const sortField =
    (
      a:{survey: number, completion_date: string, result: string},
      b:{survey: number, completion_date: string, result: string},
      field: string
    ) => {
    let x = '';
    let y = '';

    switch(field) {
      case 'test':
        x = arrSurvey[a.survey];
        y = arrSurvey[b.survey];
      break;
      case 'data':
        x = a.completion_date;
        y = b.completion_date;
      break;
      case 'result':
        x = a.result;
        y = b.result;
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

  // console.log(allTestsResults)
  return (
    <div className={styles.records}>
      <section className={styles.tableRecords}>
        <button className={styles.sortButton} onClick={sortTest}>Наименование опроса {sortIcon}</button>
        <button className={styles.sortButton} onClick={sortData}>Дата проведения {sortIcon}</button>
        <button className={styles.sortButton} onClick={sortResult}>Результат {sortIcon}</button>
      </section>
      {testResultsSort && testResultsSort.map((record, index) => (
      <section key={index} className={styles.record}>
        <p className={styles.text}>{arrSurvey[record.survey]}</p>
        {/* <p className={styles.text}>Диагностика эмоционального выгорания</p> */}

        {record.completion_date && resultDate(record.completion_date)}
        <WarningWithBall resultOfPsychoTest={record}/>
        <button type="button" onClick={() => handleOpenPopup(record)} className={styles.recordButton}>Подробнее</button>
      </section>
    ))}

      <TestResultPopup isTestsReulstLocated={true} isVisible={isOpen} resultOfPsychoTest={result} onClose={handleClosePopup}/>
    </div>
  );
};
