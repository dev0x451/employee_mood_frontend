// import styles from "./events.module.css";
// import events from "/events.png";
import { EventInterface } from "@/types";
import { Navbar } from "@/components/Navbar/Navbar";
import { EventsPage } from "@/components/EventsPage/EventsPage";

interface Props {
  // valueInputSort: string;
  events: EventInterface[];
  fetchEvents: ()=>void;
}

export const Events: React.FC<Props> = ({events, fetchEvents}) => {
  return (
    <div className="page-container">
      <Navbar />
      {/* <div className={styles.events}>

        <img src={events} alt="Заглушка" className={styles.image} />
        <div className={styles.container}>
          <p className={styles.text}>
            Скоро&nbsp;здесь&nbsp;появится&nbsp;много&nbsp;интересного!
          </p>
        </div>
      </div> */}
      <EventsPage events={events} fetchEvents={fetchEvents}/>

    </div>
  );
};
