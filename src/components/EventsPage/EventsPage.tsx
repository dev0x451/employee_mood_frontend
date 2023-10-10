import styles from "./eventsPage.module.css";
import React, { useState, useEffect } from "react";
import { EventInterface } from "@/types";
import { EventsHeader } from "./EventsHeader/EventsHeader";
import { EventsFunctional } from "./EventsFunctional/EventsFunctional";
import { EventsCard } from "./EventsCard/EventsCard";

interface Props {
  // valueInputSort: string;
  events: EventInterface[];
  fetchEvents: ()=> void;
}

export const EventsPage: React.FC<Props> = ({events, fetchEvents}) => {
  const date = new Date();
  const monthToday = date.getMonth();
  const yearToday = date.getFullYear();
  const [month, setMonth] = useState<number>(monthToday);
  const [year, setYear] = useState<number>(yearToday);
  const [isArrowBack, setIsArrowBack] = useState(false);
  const [eventsSortMonth, setEventsSortMonth] = useState<EventInterface[]>([]);
  const [eventsSortFind, setEventsSortFind] = useState<EventInterface[]>([]);
  const [textInput, setTextInput] = useState<string>(""); // поисковая строка
  // const [isRenderEventPage, setIsRenderEventPage] = useState(false);

  // const reg = /[a-zA-Zа-яА-Я0-9-\ ]/;

  // переключение месяца в хедере страницы
  const reduceMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year-1);
    } else {
      setMonth(month - 1)
    }
    (month <= (monthToday+1) && year <= yearToday) ? setIsArrowBack(false) : setIsArrowBack(true);
    setTextInput("");
  };
  const increaseMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year+1);
    } else {
      setMonth(month + 1)
    }
    (month <= (monthToday-1) && year <= yearToday) ? setIsArrowBack(false) : setIsArrowBack(true);
    setTextInput("");
   };

  // function sortMonthEvents() {
  //   setEventsSortMonth(events.filter(item => new Date(item.start_time).getMonth() === month));
  // }
  useEffect(()=>{
    // console.log('сортировка мероприятий по месяцу');
    // console.log(events);
    setEventsSortMonth(events.filter(item => new Date(item.start_time).getMonth() === month));
  }, [month, events]);
  // }, [month, events, isRenderEventPage]);

  useEffect(()=>{
    // console.log('сортировка по поисковой строке');
    // console.log(eventsSortMonth);
    setEventsSortFind(eventsSortMonth);
  }, [eventsSortMonth]);

  const handleInputSort = (e: {target: { value: string }}) => {
    const value = e.target.value;
    // console.log(value.match(reg));
    // !(value.substring(value.length-2, value.length-1) === '-' && value.substring(value.length-1) === '-') &&
    // (value === '' || value.substring(value.length-1).match(reg) !== null) &&
    setTextInput(value);
  };

  useEffect(()=>{
    setEventsSortFind(eventsSortMonth.filter((event)=>
      event.name.toLowerCase().includes(textInput.toLowerCase())
      || event.text.toLowerCase().includes(textInput.toLowerCase())
      // || employee.position.name.toLowerCase().includes(textInput.toLowerCase())
    ));
  },[textInput]);

  // console.log(events);
  // console.log(eventsSortMonth);
  // console.log(eventsSortFind);
  return (
    <section className={styles.eventsPage}>
      <EventsHeader
        month={month}
        reduceMonth={reduceMonth}
        year={year}
        increaseMonth={increaseMonth}
        // monthToday={monthToday}
        yearToday={yearToday}
        isArrowBack={isArrowBack}
      />
      <EventsFunctional
        textInput={textInput}
        handleInputSort={(e)=>{handleInputSort(e)}}
        fetchEvents={fetchEvents}
      />
      <ul className={styles.eventsContent}>
        {eventsSortFind.length > 0 ?
          eventsSortFind.map((item)=>
            <EventsCard
              key={item.id}
              item={item}
              fetchEvents={fetchEvents}
              // isRenderEventPage={isRenderEventPage}
              // setIsRenderEventPage={setIsRenderEventPage}
            />
          ) :
          <p className={styles.eventsContentNull}>В этом месяце пока ничего не запланировано...</p>
        }
      </ul>
    </section>

  );
}
