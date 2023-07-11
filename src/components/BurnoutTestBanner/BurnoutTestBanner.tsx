import styles from "./BurnoutTestBanner.module.css";
import image from "./burnout-image.png";
import { Link } from "react-router-dom";
import {JSX} from "react";

interface BurnoutTestProps {
  id?: string;
}

export const BurnoutTestBanner = ({ id }: BurnoutTestProps): JSX.Element=> {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.textTop}>
          <h1 className={styles.textHeading}>Пройдите тест о выгорании</h1>
          {/* <span className={styles.dateTill}>до 20 мая 2023 </span> */}
        </div>
        <div className={styles.textBottom}>
          <p className={styles.textDescription}>
            Профессиональное выгорание трудно распознать оно может серьёзно
            подорвать здоровье и привести к депрессии.
          </p>
          <Link to={`/tests/${id}`} className={styles.link}>
            <button type="button" className={styles.button}>
              Пройти тест
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt="burnout image" />
      </div>
    </div>
  );
};
