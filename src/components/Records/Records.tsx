import styles from "./recodrds.module.css";
import React, {useState} from "react";
import { sortIcon } from "@/assets";
import { TestResultPopup } from "../TestResultPopup/TestResultPopup";
import { ExpressDiagnoseResponse } from "@/types";

interface Records {
  allTestsResults?: ExpressDiagnoseResponse[]
}

export const Records: React.FC<Records> = ({allTestsResults}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [result, setResult] = useState<ExpressDiagnoseResponse>();

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
        <button className={styles.sortButton}>Наименование опроса {sortIcon}</button>
        <button className={styles.sortButton}>Дата проведения {sortIcon}</button>
        <button className={styles.sortButton}>Результат {sortIcon}</button>
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
