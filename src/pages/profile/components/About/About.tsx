import styles from "./about.module.scss";
import {ReactElement} from "react";
import {NothingToRender} from "@/pages/profile/components/NothingToRender/NothingToRender";
interface Props {
  about: string | null;
  firstName: string;
}

export const About = ({about, firstName}: Props): ReactElement => {
  return (
    <div className={styles.about}>
      <h3 className={styles.employeeTitle}>{`${firstName} о себе`}</h3>
      {about
        ?
        <p className={styles.employeeAbout}>{about}</p>
        :
        <NothingToRender text="Информация не заполнена"/>
      }
    </div>
  );
};
