import styles from "./eventsHeader.module.css";
// import React, { useState, useEffect } from "react";
import { ArrowNext } from "../img/ArrowNext";
import { ArrowBack } from "../img/ArrowBack";

export const EventsHeader = () => {

  return (
    <div className={styles.eventsHeader}>
      <h2 className={styles.eventsHeader__heading}>Мероприятия на</h2>
      <button className={styles.eventsHeader__button}>
        <ArrowBack color="#B6C1CF" />
      </button>
      <p className={styles.eventsHeader__month}>Июль</p>
      <button className={styles.eventsHeader__button}>
        <ArrowNext color="#2C2D2E" />
      </button>
    </div>
  );
}
