import styles from "./BurnoutTestBanner.module.css";
import image from "./burnout-image.png";
export const BurnoutTestBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.textTop}>
          <h1 className={styles.textHeading}>Пройдите тест о выгорании</h1>
          <span className={styles.dateTill}>до 20 мая 2023 </span>
        </div>
        <div className={styles.textBottom}>
          <p className={styles.textDescription}>
            Профессиональное выгорание трудно распознать оно может серьёзно
            подорвать здоровье и привести к депрессии.
          </p>
          <button className={styles.button}>Пройти тест</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt="burnout image" />
      </div>
    </div>
  );
};
