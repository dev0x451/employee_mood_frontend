import styles from "./advices.module.css";
import advices from "/events.png";

export const Advices = () => {
  return (
    <div className={styles.advices}>
      <img src={advices} alt="Заглушка" className={styles.image} />
      <div className={styles.container}>
        <p className={styles.text}>Скоро&nbsp;здесь&nbsp;появится&nbsp;много&nbsp;интересного!</p>
      </div>
    </div>
  );
};
