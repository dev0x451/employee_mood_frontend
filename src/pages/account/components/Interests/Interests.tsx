import styles from "./interests.module.scss";
import { ReactElement, useState } from "react";
import { UserHobby } from "@/types";
import { Interest } from "@/pages/account/components/Interest/Interest";
import SelectInterest from "@/pages/account/components/SelectInterest/SelectInterest";
interface Props {
  interests: UserHobby[];
  removeInterest: (index: number) => void;
}
export const Interests = ({
  interests,
  removeInterest,
}: Props): ReactElement => {
  const [isSelectVisible, setIsSelectVisible] = useState<boolean>(false);
  return (
    <div className={styles.interests}>
      <h3 className={styles.interestsTitle}>Интересы</h3>
      <div className={styles.interestsContainer}>
        <button
          onClick={() => setIsSelectVisible(true)}
          className={
            interests.length !== 0
              ? styles.interestsBtn
              : `${styles.interestsBtn} ${styles.interestsBtnNoFloat}`
          }
        />
        {interests &&
          interests.map((interest, index) => (
            <Interest
              interest={interest}
              removeInterest={removeInterest}
              index={index}
            />
          ))}
      </div>
      <SelectInterest
        isSelectVisible={isSelectVisible}
        closeSelect={() => setIsSelectVisible(false)}
      />
    </div>
  );
};
