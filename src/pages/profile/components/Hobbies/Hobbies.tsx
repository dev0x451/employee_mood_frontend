import styles from "./hobbies.module.scss";
import {UserHobby} from "@/types.ts";
import {ReactElement} from "react";
import {NothingToRender} from "@/pages/profile/components/NothingToRender/NothingToRender";

interface Props {
  hobbies: UserHobby[];
}


export const Hobbies = ({hobbies}: Props): ReactElement => {
  return (
    <div className={styles.interests}>
      <h3 className={styles.employeeTitle}>Интересы</h3>
      {hobbies.length !== 0
        ?
        <ul className={styles.hobbyList}>
          {
            hobbies.map((hobby) => (
              <li key={hobby.name} className={styles.hobbyItem}>{hobby.name}</li>
            ))
          }
        </ul>
        :
        <NothingToRender text="Информация не заполнена" />
      }
    </div>
  );
};
