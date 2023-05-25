import styles from "./events.module.css";
import events from "/events.png";


export const Events = () => {
  return (
    <div className={styles.events}>
      <img src={events} alt="Заглушка" className={styles.image} />
      <div className={styles.container}>
        <p className={styles.text}>Скоро&nbsp;здесь&nbsp;появится&nbsp;много&nbsp;интересного!</p>
      </div>
    </div>
  );
};
