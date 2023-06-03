import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./account.module.css";

export const Account = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className={styles.account}>
        <div className={styles.accountInfoContainer}>
          <h1 className={styles.title}>Контактная информация</h1>
          <div className={styles.contactInfo}>
            <div className={`${styles.photo} ${styles.noPhoto}`}>ВБ</div>
            <ul className={styles.textInfoList}>
              <li className={styles.nameInfo}>Вера Брежнева</li>
              <li className={styles.jobInfo}>идейный вдохновитель</li>
            </ul>
          </div>
        </div>
        <div className={styles.accountInfoContainer}>
          <h2 className={styles.titleAbout}>Обо мне</h2>
          <textarea className={styles.textarea} />
        </div>
      </div>
    </div>
  );
};
