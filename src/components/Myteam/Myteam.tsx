import styles from "./myteam.module.css";
import React from "react";

export const Myteam: React.FC = () => {
  return (
    <div className={styles.article}>
      <h3 className={styles.title}>Моя команда</h3>
    </div>
  );
};
