import styles from "./eventsCard.module.css";
// import React, { useState, useEffect } from "react";
import { Like } from "../img/Like";
import { EmailIcon } from "../img/EmailIcon";

export const EventsCard = () => {

  return (
    <li className={styles.eventsCard}>
      <div className={styles.eventsCard__header}>
        <p className={styles.eventsCard__day}>29</p>
        <p className={styles.eventsCard__month}>сентябрь</p>
        <p className={styles.eventsCard__time}>
          <span className={styles.eventsCard__timeStart}>09 - </span>
          <span className={styles.eventsCard__timeEnd}>23</span>
        </p>
        <Like className={styles.eventsCard__like} color={"white"}/>
      </div>
      <p className={styles.eventsCard__typeActivity}>тимбилдинг</p>
      <h3 className={styles.eventsCard__heading}>Отработка возражений заказчика</h3>
      <p className={styles.eventsCard__content}>
        На воркшопе вместе с тренером будем прокачивать скилл отработки различных возражений заказчиков (внутренних и внешних)
      </p>
      <div className={styles.eventsCard__footer}>
        <p className={styles.eventsCard__nameAuthor}><EmailIcon /> Александр Никулин</p>
        <p className={styles.eventsCard__expiration}>Регистрация до 10 июня</p>
      </div>
    </li>
  );
}
