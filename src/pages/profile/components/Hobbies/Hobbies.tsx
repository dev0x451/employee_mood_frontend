import styles from "./hobbies.module.scss";
import {UserHobby} from "@/types.ts";
import {ReactElement} from "react";

interface Props {
  hobbies: UserHobby[];
}


export const Hobbies = ({hobbies}: Props): ReactElement => {
  return (
    <div className={styles.interests}>
      <h3 className={styles.employeeTitle}>Интересы</h3>
      <ul className={styles.hobbyList}>
        {
          hobbies.map((hobby) => (
            <li className={styles.hobbyItem}>{hobby.name}</li>
          ))
        }
      </ul>
    </div>
  );
};
