import styles from "./centerScreenMain.module.css";
import { BurnoutTestBanner } from "../BurnoutTestBanner/BurnoutTestBanner";
import { MoodButton } from "../MoodButton/MoodButton";

export const CenterScreenMain = () => {
  return (
    <div className={styles.container}>
      <BurnoutTestBanner />
      <section className="moodtracker">
        <h2>Оцените свое настроение</h2>
        <div className={styles.moodButtons}>
          <MoodButton mood="bad" />
          <MoodButton mood="so-so" />
          <MoodButton mood="normal" />
          <MoodButton mood="good" />
          <MoodButton mood="perfect" />
        </div>
      </section>
    </div>
  );
};
