import styles from "./tests.module.css";
import { Navbar } from "@/components/Navbar/Navbar";

export const Tests = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className={styles.tests}>
        <p className={styles.text}>Tests</p>
      </div>
    </div>
  );
};
