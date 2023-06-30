import styles from './meetingslistpopup.module.scss';
import {MeetingInterface} from "@/types";
import {ReactElement} from "react";
import {MeetingDetails} from "@/pages/profile/components/MeetingDetails/MeetingDetails";
import {CloseButton} from "@/shared/ui/CloseButton/CloseButton";
import {Button} from "@/shared/ui/Button/Button";
import {usePagination} from "@/shared/constants";

interface Props {
  meetingsList: MeetingInterface[];
  closePopup: () => void;
}
export const MeetingsListPopup = ({meetingsList, closePopup}: Props): ReactElement => {
  const { countCardPage, addCard } = usePagination(3);

  return (
    <div className={styles.meetingsListPopup}>
      <CloseButton handleClick={closePopup}/>
        <h2 className={styles.title}>История встреч</h2>
        {meetingsList.map((meeting, index) => (
          index < countCardPage
            ?
          <div key={index} className={styles.meetingItem}>
            <MeetingDetails date={meeting.date} name={meeting.mental_state.name} level={meeting.mental_state.level} comment={meeting.comment}/>
          </div>
          : null
        ))}
      {countCardPage <= meetingsList.length &&
        <Button mode="empty" title="Загрузить еще" handleClick={addCard}/>
      }
    </div>
  );
};
