import styles from "./interests.module.scss";
import { ReactElement } from "react";
import { InterestInterface } from "@/types";
import { Interest } from "@/pages/account/components/Interest/Interest";
interface Props {
  interests: InterestInterface[];
}
export const Interests = ({ interests }: Props): ReactElement => {
  return (
    <div className={styles.interests}>
      <h3 className={styles.interestsTitle}>Интересы</h3>
      <div className={styles.interestsContainer}>
        <button className={styles.interestsBtn} />
        {interests &&
          interests.map((interest) => <Interest interest={interest} />)}
      </div>
    </div>
  );
};
