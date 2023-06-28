import React, { useState } from "react";
import styles from "./eventsFunctional.module.css";
import cn from "classnames";


export const EventsFunctional = () => {

  // переключение класса кнопок на активные и обратно
  const [isActiveButtonAll, setIsActiveButtonAll] = useState<boolean>(false);
  const [isActiveButtonTeamBuilding, setIsActiveButtonTeamBuilding] = useState<boolean>(false);
  const [isActiveButtonTraining, setIsActiveButtonTraining] = useState<boolean>(false);
  const [isActiveButtonWorkshop, setIsActiveButtonWorkshop] = useState<boolean>(false);

  const activeButtonAllClassname = cn(styles.eventsFunctional__typeActivity, {
    [styles.active]: isActiveButtonAll === false,
  });
  const activeButtonTeamBuildingClassname = cn(styles.eventsFunctional__typeActivity, {
    [styles.active]: isActiveButtonTeamBuilding === false,
  });
  const activeButtonTrainingClassname = cn(styles.eventsFunctional__typeActivity, {
    [styles.active]: isActiveButtonTraining === false,
  });
  const activeButtonWorkshopClassname = cn(styles.eventsFunctional__typeActivity, {
    [styles.active]: isActiveButtonWorkshop === false,
  });
  //

  return (
    <>
      <div  className={styles.eventsFunctional__main}>
        <input className={styles.eventsFunctional__find} placeholder="Поиск"/>
        <button  className={styles.eventsFunctional__add}>+ Добавить мероприятие</button>
      </div>

      <ul className={styles.eventsFunctional__list}>
        <li className={styles.eventsFunctional__point}>
          <button className={activeButtonAllClassname}>все</button>
        </li>
        <li className={styles.eventsFunctional__point}>
          <button className={activeButtonTeamBuildingClassname}>тимбилдинг</button>
        </li>
        <li className={styles.eventsFunctional__point}>
          <button className={activeButtonTrainingClassname}>тренинг</button>
        </li>
        <li className={styles.eventsFunctional__point}>
          <button className={activeButtonWorkshopClassname}>воркшоп</button>
        </li>
      </ul>
    </>

  );
}
