import styles from "./myteam.module.css";
import React from "react";
import { Navbar } from "@/components/Navbar/Navbar";

export const Myteam: React.FC = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className={styles.myteam}>
        <div className={styles.leftScreen}>
          <h2 className={styles.title}>Моя команда</h2>
        </div>
        <div className={styles.rightScreen}>
          <h3 className={styles.subtitle}>
            Как помочь сотрудникам справиться со стрессом
          </h3>
        </div>
      </div>
    </div>
  );
};
