import styles from "./eventsCard.module.css";
import { EventInterface } from "@/types";
import * as Api from "@/shared/api/Api";


import React, { useState, useEffect } from "react";
import { Like } from "../img/Like";
import { EmailIcon } from "../img/EmailIcon";
// import { boolean } from "yup";

interface Props {
  // valueInputSort: string;
  item: EventInterface;
  fetchEvents: ()=>void;
  // isRenderEventPage: boolean;
  // setIsRenderEventPage: any;
  setEvents: any;
}
export const EventsCard: React.FC<Props> = ({item, fetchEvents, setEvents}) => {
  const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  // const dataCreated = new Date(item.created);
  const dataStart = new Date(item.start_time);
  const dataEnd = new Date(item.end_time);
  const hoursStart = dataStart.getHours() < 10 ? `0${dataStart.getHours()}` : `${dataStart.getHours()}`;
  const minutesStart = dataStart.getMinutes() < 10 ? `0${dataStart.getMinutes()}` : `${dataStart.getMinutes()}`;
  const hoursEnd = dataEnd.getHours() < 10 ? `0${dataEnd.getHours()}` : `${dataEnd.getHours()}`;
  const minutesEnd = dataEnd.getMinutes() < 10 ? `0${dataEnd.getMinutes()}` : `${dataEnd.getMinutes()}`;
  const [isLike, setIsLike] = useState(false)
  const [isDisabledLike, setIsDisabledLike] = useState(false)

  useEffect(()=>{
    // console.log('растановка лайков')
    const like = item.liked === null ? false : true
    setIsLike(like)
  }, [item.liked])
  // console.log(item);

  const setLike = async (id: any) => {
    try {
      setIsDisabledLike(true)
      // if (role === "hr" || role === "chief") {
      await Api.postEventLike(id)
      .then(()=>{
        fetchEvents();
        return;
      })
      .then(()=>{
        // console.log('add')
        // console.log(isLike);
        // setIsRenderEventPage(!isRenderEventPage);
        setIsDisabledLike(false);
        setIsLike(true);
      })
      // }
    } catch (err: any) {
      setIsDisabledLike(false);
      console.log(err);
    }
  }
  const removeLike = async (id: any) => {
    try {
      setIsDisabledLike(true)
      // if (role === "hr" || role === "chief") {
      await Api.deleteEventLike(id)
        .then(()=>{
          fetchEvents();
          return;
        })
        .then(()=>{
          // console.log('delete')
          // console.log(isLike);
          // setIsRenderEventPage(!isRenderEventPage);
          setIsDisabledLike(false);
          setIsLike(false);
        })
      // }
    } catch (err: any) {
      setIsDisabledLike(false);
      console.log(err);
    }
  }
  return (
    <li className={styles.eventsCard}>
      <div className={styles.eventsCard__header}>
        <p className={styles.eventsCard__day}>{dataStart.getDate()}</p>
        <p className={styles.eventsCard__month}>{monthNames[dataStart.getMonth()]}</p>
        <p className={styles.eventsCard__time}>
          <span className={styles.eventsCard__timeStart}>{`${hoursStart}:${minutesStart}`}&mdash;</span>
          <span className={styles.eventsCard__timeEnd}>{`${hoursEnd}:${minutesEnd}`}</span>
        </p>
        <button
          className={styles.eventsCard__likeButton}
          onClick={()=>{isLike ? removeLike(item.liked?.id) : setLike(item.id)}}
          disabled = {isDisabledLike}
        >
          <Like isLike={isLike}/>
        </button>
      </div>
      <p className={styles.eventsCard__typeActivity}>категория мероприятия</p>
      <h3 className={styles.eventsCard__heading}>{item.name}</h3>
      <p className={styles.eventsCard__content}>{item.text}</p>
      <div className={styles.eventsCard__footer}>
        <p className={styles.eventsCard__nameAuthor}><EmailIcon /> {item.author?.first_name} {item.author?.last_name}</p>
        {/* <p className={styles.eventsCard__expiration}>Регистрация до -------</p> */}
      </div>
    </li>
  );
}
