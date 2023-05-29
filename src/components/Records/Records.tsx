import styles from "./recodrds.module.css";
import React from "react";
import { sortIcon } from "@/assets";
import { RecordInterface } from "@/types";
export const Records: React.FC = () => {

    const records: RecordInterface[] = [
        {
          description: 'Диагностика эмоционального выгорания',
          date: '20 марта 2023',
          state: '33% (повышенная тревожность)',
        },
        {
            description: 'Диагностика эмоционального выгорания',
            date: '20 марта 2023',
            state: '33% (повышенная тревожность)',
        },
        {
            description: 'Диагностика эмоционального выгорания',
            date: '20 марта 2023',
            state: '33% (повышенная тревожность)',
        },
        {
            description: 'Диагностика эмоционального выгорания',
            date: '28 мая 2023',
            state: '50% (умеренная тревожность)',
        },
    
      ];
    return ( 
      <div className={styles.recodrds}>
        <div className={styles.tableRecords}>
          <button className={styles.sortButton}>Наименование опроса {sortIcon}</button>
          <button className={styles.sortButton}>Дата проведения {sortIcon}</button>
          <button className={styles.sortButton}>Результат {sortIcon}</button>
       </div>
       {records && records.map((record) => (
        <div className={styles.record}>
          <p className={styles.text}>{record.description}</p>
          <p className={styles.text}>{record.date}</p>
          <p className={styles.text}>{record.state}</p>
          <button className={styles.recordButton}>Подробнее</button>
        </div>
      ))}
      </div>
    );
};