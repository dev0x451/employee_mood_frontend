import styles from "./interest.module.scss";
import { UserHobby } from "@/types";

interface Props {
  interest: UserHobby;
  removeInterest: (index: number) => void;
  index: number;
}
export const Interest = ({ interest, removeInterest, index }: Props) => {
  return (
    <div key={interest.id} className={styles.interestItem}>
      <p className={styles.interestText}>{interest.name}</p>
      <button
        className={styles.interestBtn}
        onClick={() => removeInterest(index)}
      />
    </div>
  );
};
