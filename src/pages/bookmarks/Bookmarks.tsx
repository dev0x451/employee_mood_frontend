import styles from "./bookmarks.module.css";
import bookmarks from "/events.png";
import { Navbar } from "@/components/Navbar/Navbar";
import { BadInternetConnection } from "@/components/BadInternetConnection/BadInternetConnection";
import { useOnlineCheck } from "@/shared/hooks/useOnlineCheck";

export const Bookmarks = () => {

  const isOnline = useOnlineCheck();

  return (
    <div className="page-container">
      <Navbar />
      {isOnline ?
      <div className={styles.bookmarks}>
        <img src={bookmarks} alt="Заглушка" className={styles.image} />
        <div className={styles.container}>
          <p className={styles.text}>
            Скоро&nbsp;здесь&nbsp;появится&nbsp;много&nbsp;интересного!
          </p>
        </div>
      </div>
      : <BadInternetConnection/>}
    </div>
  );
};
