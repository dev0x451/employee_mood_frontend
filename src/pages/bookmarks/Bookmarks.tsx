import styles from "./bookmarks.module.css";
import bookmarks from "/events.png";

export const Bookmarks = () => {
  return (
    <div className={styles.bookmarks}>
      <img src={bookmarks} alt="Заглушка" className={styles.image} />
      <div className={styles.container}>
        <p className={styles.text}>Скоро&nbsp;здесь&nbsp;появится&nbsp;много&nbsp;интересного!</p>
      </div>
    </div>
  );
};
