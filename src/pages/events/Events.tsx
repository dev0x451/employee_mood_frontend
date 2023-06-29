import styles from "./events.module.css";
import events from "/events.png";
import { Navbar } from "@/components/Navbar/Navbar";
import { BadInternetConnection } from "@/components/BadInternetConnection/BadInternetConnection";
import { useOnlineCheck } from "@/shared/hooks/useOnlineCheck";

export const Events = () => {

  const isOnline = useOnlineCheck();

  return (
    <div className="page-container">
      <Navbar />
      {isOnline ?
      <div className={styles.events}>
        <img src={events} alt="Заглушка" className={styles.image} />
        <div className={styles.container}>
          <p className={styles.text}>
            Скоро&nbsp;здесь&nbsp;появится&nbsp;много&nbsp;интересного!
          </p>
        </div>
      </div>
      : <BadInternetConnection/>}
    </div>
  );
};
