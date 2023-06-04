import styles from "./recodrds.module.css";
import React, {useState, useEffect} from "react";
import { sortIcon } from "@/assets";
import { TestResultPopup } from "../TestResultPopup/TestResultPopup";
import { ExpressDiagnoseResponse } from "@/types";

interface Records {
  allTestsResults?: ExpressDiagnoseResponse[]
}

//необходим полный рефакторинг логики сортировки

export const Records: React.FC<Records> = ({allTestsResults}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [result, setResult] = useState<ExpressDiagnoseResponse>();


  const [testResultsSort, setTestResultsSort] = useState(allTestsResults)
  const [isSortName, setIsSortName] = useState(true)
  // const [isSortPosition, setIsSortPosition] = useState(true)
  // const [isSortState, setIsSortState] = useState(true)

  useEffect(()=>{
    if (allTestsResults) setTestResultsSort(allTestsResults)
  },[allTestsResults])

//необходим полный рефакторинг логики сортировки

  const sortField =
    (
      a:{result: string, completion_date: string},
      b:{result: string, completion_date: string},
      field: string
    ) => {
    let x = '';
    let y = '';
    switch(field) {
      case 'name':
        x = a.result + a.result;
        y = b.result + b.result;
      break;
      case 'position':
        x = a.completion_date;
        y = b.completion_date;
      break;
      // case 'state':
      //   x = a.mental_state;
      //   y = b.mental_state;
      // break;
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

  const sortName = () => {
    setIsSortName(!isSortName);
    sortFields('name', isSortName);
  }
  // const sortPosition = () => {
  //   setIsSortPosition(!isSortPosition);
  //   sortFields('position', isSortPosition);
  // }
  // const sortState = () => {
  //   setIsSortState(!isSortState);
  //   sortFields('state', isSortState);
  // }

  function handleOpenPopup (record: ExpressDiagnoseResponse) {
    setOpen(true);
    setResult(record);
  }

  function handleClosePopup() {
    setOpen(false);
  }

  return (
    <div className={styles.recodrds}>
      <section className={styles.tableRecords}>
        <button className={styles.sortButton} onClick={sortName}>Наименование опроса {sortIcon}</button>
        <button className={styles.sortButton} onClick={sortName}>Дата проведения {sortIcon}</button>
        <button className={styles.sortButton} onClick={sortName}>Результат {sortIcon}</button>
      </section>
      {allTestsResults && allTestsResults.map((record, index) => (
      <section key={index} className={styles.record}>
        <p className={styles.text}>Диагностика эмоционального выгорания</p>
        <p className={styles.text}>{record.completion_date}</p>
        <p className={styles.text}>{record.result}</p>
        <button type="button" onClick={() => handleOpenPopup(record)} className={styles.recordButton}>Подробнее</button>
      </section>
    ))}

    <TestResultPopup isVisible={isOpen} resultOfPsychoTest={result} onClose={handleClosePopup}/>
    </div>
  );
};
