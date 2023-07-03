import styles from "./eventsMainCard.module.css";
import { EventInterface } from "@/types";
import React from "react";

interface Props {
  item: EventInterface;
}
export const EventsMainCard: React.FC<Props> = ({item}) => {
  const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  const dataStart = new Date(item.start_time);
  const dataEnd = new Date(item.end_time);
  const hoursStart = dataStart.getHours() < 10 ? `0${dataStart.getHours()}` : `${dataStart.getHours()}`;
  const minutesStart = dataStart.getMinutes() < 10 ? `0${dataStart.getMinutes()}` : `${dataStart.getMinutes()}`;
  const hoursEnd = dataEnd.getHours() < 10 ? `0${dataEnd.getHours()}` : `${dataEnd.getHours()}`;
  const minutesEnd = dataEnd.getMinutes() < 10 ? `0${dataEnd.getMinutes()}` : `${dataEnd.getMinutes()}`;

  return (
    <li className={styles.point}>
      <div className={styles.leftBlock}>
        <p className={styles.count}>{dataStart.getDate()}</p>
        <p className={styles.month}>{monthNames[dataStart.getMonth()]}</p>
      </div>
      <div className={styles.rightBlock}>
        <p className={styles.typeActivity}>Тимбилдинг</p>
        <p className={styles.time}>
          <span>{`${hoursStart}:${minutesStart}`}&mdash;</span>
          <span>{`${hoursEnd}:${minutesEnd}`}</span>
        </p>
      </div>

      {/* <img className={styles.img} src={image} />
      <div className={styles.pointContent}>
        <p className={styles.text}>Тимбилдинг</p>
        <time className={styles.time}>18 мая 2023</time>
      </div> */}
    </li>
  );
}
