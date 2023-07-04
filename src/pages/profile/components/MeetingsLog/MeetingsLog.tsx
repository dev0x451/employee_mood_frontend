import styles from './meetingslog.module.scss';
import {MeetingDetails} from "@/pages/profile/components/MeetingDetails/MeetingDetails.tsx";
import {Button} from "@/shared/ui/Button/Button";
import {MeetingInterface} from "@/types";
import {ReactElement, useState} from "react";
import {NothingToRender} from "@/pages/profile/components/NothingToRender/NothingToRender";
import {MeetingsListPopup} from "@/pages/profile/components/MeetingsListPopup/MeetingsListPopup";
import {PopupWithBackground} from "@/shared/ui/PopupWithBackground/PopupWithBackground";

interface Props {
  meetingsList: MeetingInterface[];
}
export const MeetingsLog = ({meetingsList}: Props): ReactElement => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <>
      <PopupWithBackground popupVisible={isPopupVisible} closePopup={() => setIsPopupVisible(false)}>
        <MeetingsListPopup meetingsList={meetingsList} closePopup={() => setIsPopupVisible(false)}/>
      </PopupWithBackground>
      <div className={styles.meetingsLog}>
        <h2 className={styles.title}>История встреч</h2>
        {meetingsList && meetingsList.length !== 0
          ?
            <>
              <div className={styles.button}><Button handleClick={() => setIsPopupVisible(true)} mode="empty" title={`Посмотреть все (${meetingsList.length})`}/></div>
              <MeetingDetails subtitle="Последняя встреча: " date={meetingsList[0].date} name={meetingsList[0].mental_state.name} level={meetingsList[0].mental_state.level} comment={meetingsList[0].comment}/>
            </>
          :
          <NothingToRender text="Встречи еще не проводились" />
        }
      </div>
    </>
  );
};

export default MeetingsLog;
