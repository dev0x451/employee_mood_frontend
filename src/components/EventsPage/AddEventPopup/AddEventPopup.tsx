import * as Api from "@/shared/api/Api";
import { EventInterface } from "@/types";
import styles from "./addEventPopup.module.css";
import React, {useState, useEffect} from "react";
import {ClosePopup} from "../img/closePopup";
// import dash from "../img/dash.svg"
import { useEscapeKeyEvent } from "@/shared/hooks/useEscapeKey";
import { PopupRequest } from "../PopupRequest/PopupRequest";

interface Props {
  closePopupAddEvent: (e: any) => void;
  isPopupAddEvent: boolean;
}

export const AddEventPopup: React.FC<Props> = ({closePopupAddEvent, isPopupAddEvent}) => {

  const [isPopupRequest, setIsPopupRequest] = useState(false);
  const [isRequest, setIsRequest] = useState(false);
  const [reviewPost, setReviewPost] = useState('');

  useEscapeKeyEvent(closePopupAddEvent);
  const handleCloseOutside = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (event.target === event.currentTarget) {
      closePopupAddEvent(event);
    }
  };
  // const valuesStart = {
  //   // date: new Date().getDate(),
  //   start_time: new Date(),
  //   end_time: new Date(),
  //   // typeActivity: "",
  //   name: "",
  //   text: "",
  //   // contact: "",
  //   // expiration: "",
  //   for_all: true,
  // }
  // const [values, setValues] = useState(valuesStart);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsRequest(false);
    const year = new Date(e.target.elements.date.value).getFullYear();
    const month = new Date(e.target.elements.date.value).getMonth();
    const day = new Date(e.target.elements.date.value).getDate();
    const hourStart = e.target.elements.timeStart.value.slice(0,2);
    const minuteStart = e.target.elements.timeStart.value.slice(-2);
    const hourEnd = e.target.elements.timeEnd.value.slice(0,2);
    const minuteEnd = e.target.elements.timeEnd.value.slice(-2);

    const event = {
      start_time: new Date(year, month, day, hourStart, minuteStart),
      end_time: new Date(year, month, day, hourEnd, minuteEnd),
      // typeActivity: e.target.elements.typeActivity.value,
      name: e.target.elements.name.value,
      text: e.target.elements.text.value,
      // contact: e.target.elements.contact.value,
      // expiration: e.target.elements.expiration.value,
      for_all: true,
    }
    // setValues({
    //   // date: e.target.elements.date.value,
    //   start_time: new Date(year, month, day, hourStart, minuteStart),
    //   end_time: new Date(year, month, day, hourEnd, minuteEnd),
    //   // typeActivity: e.target.elements.typeActivity.value,
    //   name: e.target.elements.name.value,
    //   text: e.target.elements.text.value,
    //   // contact: e.target.elements.contact.value,
    //   // expiration: e.target.elements.expiration.value,
    //   for_all: true,
    // });
    e.target.reset();
    submitEvent(event);
  }

  async function submitEvent(values: EventInterface) {
    try {
      // if (role === "hr" || role === "chief") {
        await Api.postEvent(values)
          .then(()=>{
            setIsRequest(true);
            setIsPopupRequest(true);
          })
        setIsRequest(true);
        // setEvents(response.data.results);
      // }
    } catch (err: any) {
      setIsRequest(false);
      setIsPopupRequest(true);
      console.log(err);
    }
  }
  const closePopupRequest = () => {
    setIsPopupRequest(false);
  }
  useEffect(()=>{
    setTimeout(closePopupRequest, 5000)
  },[isPopupRequest])

  const setCountSymbol = (e: any) => {
    console.log(e)
  }
  return (
    <div className={isPopupAddEvent ? styles.formAddEvent__overlay : styles.formAddEvent__closed} onClick={(e) => handleCloseOutside(e)}>
      {isPopupRequest && <PopupRequest isRequest={isRequest} closePopupRequest={closePopupRequest}/>}
      <form className={styles.formAddEvent} onSubmit={onSubmit}>
          <h2 className={styles.formAddEvent__heading}>
            Добавьте новое мероприятие
            <button className={styles.formAddEvent__buttonClose} onClick={closePopupAddEvent}><ClosePopup /></button>
          </h2>
          <fieldset className={styles.formAddEvent__fieldsDate}>
            <legend className={styles.formAddEvent__headingField}>Дата и время</legend>
            <input className={styles.formAddEvent__date} type="date" name="date" placeholder="data" required/>
            <span className={styles.formAddEvent__separator}>с</span>
            <input className={styles.formAddEvent__time} type="time" name="timeStart" required/>
            <span className={styles.formAddEvent__separator}>до</span>

            {/* <img  className={styles.formAddEvent__divider} src={dash} /> */}
            <input className={styles.formAddEvent__time} type="time" name="timeEnd" required/>
          </fieldset>
          {/* <label className={styles.formAddEvent__fields}>
            <h3 className={styles.formAddEvent__headingField}>Тип мероприятия</h3>
            <select name="typeActivity" >
              <option disabled selected hidden>Выбрать</option>
              <option>Тимбилдинг</option>
              <option>Тренинг</option>
              <option>Воркшоп</option>
            </select>
          </label> */}
          <label className={styles.formAddEvent__fields}>
            <h3 className={styles.formAddEvent__headingField}>Название</h3>
            <input  name="name" placeholder="Введите название" required/>
          </label>
          <label className={styles.formAddEvent__fieldTextarea}>
            <h3 className={styles.formAddEvent__headingField}>Описание</h3>
            <textarea
              className={styles.formAddEvent__description}
              name="text"
              placeholder="Введите описание"
              minLength={8}
              maxLength={130}
              required
              value={reviewPost}
              onChange={e => setReviewPost(e.target.value)}
              // onChange={setCountSymbol}
            />
            <span
              className={reviewPost.length !== 130 ? styles.formAddEvent__countSymbolTextarea : styles.formAddEvent__countSymbolTextareaRed}
            >
              {reviewPost.length}/130
            </span>
          </label>
          {/* <label className={styles.formAddEvent__fields}>
            <h3 className={styles.formAddEvent__headingField}>Контакты</h3>
            <input  name="contact" placeholder="Введите почту организатора"/>
          </label> */}
          {/* <label className={styles.formAddEvent__fields}>
            <h3 className={styles.formAddEvent__headingField}>Регистрация до</h3>
            <input  name="expiration" placeholder="Например, 10 июня"/>
          </label> */}
          <div className={styles.formAddEvent__buttonsForm}>
            <button className={styles.formAddEvent__buttonExit}  onClick={closePopupAddEvent}>Отмена</button>
            <button className={styles.formAddEvent__buttonSubmit} onSubmit={onSubmit}>Добавить</button>
          </div>
      </form>
    </div>
  );
};

