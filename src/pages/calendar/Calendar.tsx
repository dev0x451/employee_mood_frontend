import styles from "./calendar.module.css";
import { Navbar } from "@/components/Navbar/Navbar";

export const Calendar = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className={styles.calendar}>
        <p className={styles.text}>Calendar</p>
      </div>
    </div>
  );
};
