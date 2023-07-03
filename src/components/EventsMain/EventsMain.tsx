import styles from "./eventsMain.module.css";
import { useState, useEffect } from "react";
import { EventInterface } from "@/types";
import { EventsMainCard } from "./EventsMainCard/EventsMainCard";

interface Props {
  events: EventInterface[];
}

export const EventsMain: React.FC<Props> = ({events}) => {
  const [eventsSort, setEventsSort] = useState<EventInterface[]>([]);

  useEffect(()=>{
    setEventsSort(events.slice(0,2))
  },[events]);

  // useEffect(()=>{
  //   console.log(events);
  //   console.log(eventsSort);
  // },[eventsSort]);

  return (
    <div className={styles.events}>
      <h3 className={styles.title}>Предстоящие мероприятия</h3>
      <ul className={styles.list}>
        {eventsSort.length > 0 && eventsSort.map((item) =>
          <EventsMainCard key={item.id} item={item}/>
        )}
      </ul>
    </div>
  );
};
