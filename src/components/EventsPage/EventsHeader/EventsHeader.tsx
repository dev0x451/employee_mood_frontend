import styles from "./eventsHeader.module.css";
import React from "react";
import { ArrowNext } from "../img/ArrowNext";
import { ArrowBack } from "../img/ArrowBack";

interface Props {
  // valueInputSort: string;
  month: number;
  reduceMonth: () => void;
  year: number;
  increaseMonth: () => void;
  // monthToday: number;
  yearToday: number;
  isArrowBack: boolean;
}

export const EventsHeader: React.FC<Props> = ({month, year, reduceMonth, increaseMonth, yearToday, isArrowBack}) => {
  const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  return (
    <div className={styles.eventsHeader}>
      <h2 className={styles.eventsHeader__heading}>Мероприятия на</h2>
      <button
        className={styles.eventsHeader__button}
        onClick={reduceMonth}
        disabled={!isArrowBack}
      >
        <ArrowBack color={isArrowBack ? "#2C2D2E" : "#B6C1CF"} />
      </button>
      <p className={styles.eventsHeader__month}>{monthNames[month]} <span>{year === yearToday ? '' : year}</span></p>
      <button className={styles.eventsHeader__button} onClick={increaseMonth}>
        <ArrowNext color="#2C2D2E" />
      </button>
    </div>
  );
}
