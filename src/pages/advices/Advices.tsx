import styles from "./advices.module.css";
import advices from "/events.png";
import { Navbar } from "@/components/Navbar/Navbar";

export const Advices = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className={styles.advices}>
        <img src={advices} alt="Заглушка" className={styles.image} />
        <div className={styles.container}>
          <p className={styles.text}>
            Скоро&nbsp;здесь&nbsp;появится&nbsp;много&nbsp;интересного!
          </p>
        </div>
      </div>
    </div>
  );
};
