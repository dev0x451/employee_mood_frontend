import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import styles from "./eventsFunctional.module.css";
import cn from "classnames";
import { AddEventPopup } from "../AddEventPopup/AddEventPopup";

interface Props {
  textInput: string;
  handleInputSort: (e: any) => void;
  fetchEvents: ()=>void;
}

export const EventsFunctional: React.FC<Props> = ({textInput, handleInputSort, fetchEvents}) => {

  const role = useAppSelector(
    (state) => state.currentUserSlice.currentUser.role
  );
  const [isPopupAddEvent, setIsPopupAddEvent] = useState(false);

  // переключение класса кнопок на активные и обратно
  // const [isActiveButtonAll, setIsActiveButtonAll] = useState(true);
  // const [isActiveButtonTeamBuilding, setIsActiveButtonTeamBuilding] = useState(false);
  // const [isActiveButtonTraining, setIsActiveButtonTraining] = useState(false);
  // const [isActiveButtonWorkshop, setIsActiveButtonWorkshop] = useState(false);

  // const activeButtonAllClassname = cn(styles.eventsFunctional__typeActivity, {
  //   [styles.active]: isActiveButtonAll === true,
  // });
  // const activeButtonTeamBuildingClassname = cn(styles.eventsFunctional__typeActivity, {
  //   [styles.active]: isActiveButtonTeamBuilding === true,
  // });
  // const activeButtonTrainingClassname = cn(styles.eventsFunctional__typeActivity, {
  //   [styles.active]: isActiveButtonTraining === true,
  // });
  // const activeButtonWorkshopClassname = cn(styles.eventsFunctional__typeActivity, {
  //   [styles.active]: isActiveButtonWorkshop === true,
  // });

  // const resetStyleButtonClassname = () => {
  //   setIsActiveButtonAll(false);
  //   setIsActiveButtonTeamBuilding(false);
  //   setIsActiveButtonTraining(false);
  //   setIsActiveButtonWorkshop(false);
  // }
  // const handleActiveButtonAll = () => {
  //   resetStyleButtonClassname();
  //   setIsActiveButtonAll(true);
  // }
  // const handleActiveButtonTeamBuilding = () => {
  //   resetStyleButtonClassname();
  //   setIsActiveButtonTeamBuilding(true);
  // }
  // const handleActiveButtonTraining = () => {
  //   resetStyleButtonClassname();
  //   setIsActiveButtonTraining(true);
  // }
  // const handleActiveButtonWorkshop = () => {
  //   resetStyleButtonClassname();
  //   setIsActiveButtonWorkshop(true);
  // }
  //

  //добавление мероприятия
  // const [isOpenPopup, setIsOpenPopup] = useState(false);
  const openPopupAddEvent = () => {
    setIsPopupAddEvent(true);
  }
  const closePopupAddEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsPopupAddEvent(false);
  }

  return (
    <>
      <div  className={styles.eventsFunctional__main}>
        <input className={styles.eventsFunctional__find} placeholder="Поиск" value={textInput} onChange={handleInputSort}/>
        {(role === "hr" || role === "chief") &&
          <button  className={styles.eventsFunctional__add} onClick={openPopupAddEvent}>+ Добавить мероприятие</button>
        }
      </div>

      {/* <ul className={styles.eventsFunctional__list}>
        <li className={styles.eventsFunctional__point}>
          <button className={activeButtonAllClassname} onClick={handleActiveButtonAll}>все</button>
        </li>
        <li className={styles.eventsFunctional__point}>
          <button className={activeButtonTeamBuildingClassname} onClick={handleActiveButtonTeamBuilding}>тимбилдинг</button>
        </li>
        <li className={styles.eventsFunctional__point}>
          <button className={activeButtonTrainingClassname} onClick={handleActiveButtonTraining}>тренинг</button>
        </li>
        <li className={styles.eventsFunctional__point}>
          <button className={activeButtonWorkshopClassname} onClick={handleActiveButtonWorkshop}>воркшоп</button>
        </li>
      </ul> */}
      <AddEventPopup
        closePopupAddEvent={(e)=>{closePopupAddEvent(e)}}
        // setIsPopupAddEvent={setIsPopupAddEvent}
        isPopupAddEvent={isPopupAddEvent}
        fetchEvents={fetchEvents}
      />
    </>
  );
}
