import styles from "./about.module.scss";
import {ReactElement} from "react";
interface Props {
  about: string | null;
  firstName: string;
}

export const About = ({about, firstName}: Props): ReactElement => {
  return (
    <div className={styles.about}>
      <h3 className={styles.employeeTitle}>{`${firstName} о себе`}</h3>
      <p className={styles.employeeAbout}>{about}</p>
    </div>
  );
};
