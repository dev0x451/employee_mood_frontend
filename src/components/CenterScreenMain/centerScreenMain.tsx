import styles from "./centerScreenMain.module.css";
import { BurnoutTestBanner } from "../BurnoutTestBanner/BurnoutTestBanner";
import { MoodButton } from "../MoodButton/MoodButton";
import { MoodGraph } from "../MoodGraph/MoodGraph";
import { BurnoutLevel } from "../BurnoutLevel/BurnoutLevel";

export const CenterScreenMain = () => {
  return (
    <div className={styles.container}>
      <BurnoutTestBanner />
      <section className={styles.moodTracker}>
        <h2 className={styles.moodTrackerHeading}>Оцените свое настроение</h2>
        <div className={styles.moodButtons}>
          <MoodButton mood="bad" />
          <MoodButton mood="so-so" />
          <MoodButton mood="normal" />
          <MoodButton mood="good" />
          <MoodButton mood="perfect" />
        </div>
        <MoodGraph />
        <BurnoutLevel />
      </section>
    </div>
  );
};
