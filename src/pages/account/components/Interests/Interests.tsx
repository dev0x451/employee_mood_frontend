import styles from "./interests.module.scss";
import { ReactElement, useState } from "react";
import { UserHobby } from "@/types";
import { Interest } from "@/pages/account/components/Interest/Interest";
import { CustomDropDown } from "@/pages/account/components/CustomDropdown/CustomDropDown";
interface Props {
  interests: UserHobby[];
  removeInterest: (index: number) => void;
  handleSelectChange: (selectedOption: any) => void;
}
export const Interests = ({
  interests,
  removeInterest,
  handleSelectChange,
}: Props): ReactElement => {
  const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(false);
  return (
    <div className={styles.interests}>
      <h3 className={styles.interestsTitle}>Интересы</h3>
      <div className={styles.interestsContainer}>
        <ul className={styles.interestsList}>
          {interests &&
            interests.map((interest, index) => (
              <li>
                <Interest
                  interest={interest}
                  removeInterest={removeInterest}
                  index={index}
                />
              </li>
            ))}
          <button
            onClick={() => setIsDropDownVisible(true)}
            className={
              interests.length < 6 ? styles.interestsBtn : styles.disabled
            }
            disabled={interests.length >= 6}
          />
        </ul>
      </div>
      <CustomDropDown
        handleSelectChange={handleSelectChange}
        options={interests}
        isDropDownVisible={isDropDownVisible}
        closeDropDown={() => setIsDropDownVisible(false)}
      />
    </div>
  );
};
