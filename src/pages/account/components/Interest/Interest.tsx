import styles from "./interest.module.scss";
import { InterestInterface } from "@/types";

interface Props {
  interest: InterestInterface;
}
export const Interest = ({ interest }: Props) => {
  return (
    <div key={interest.id} className={styles.interestItem}>
      <p className={styles.interestText}>{interest.name}</p>
      <button className={styles.interestBtn} />
    </div>
  );
};
