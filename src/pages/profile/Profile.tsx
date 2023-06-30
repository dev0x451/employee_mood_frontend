import {Navbar} from "@/components/Navbar/Navbar.tsx";
import styles from './profile.module.scss';
import {useParams} from 'react-router-dom';
import {useRequest} from "@/shared/hooks/useRequest.tsx";
import {getEmployeeInfo, getEmployeeTestResults} from "@/shared/api/Api.ts";
import {Info} from "@/pages/profile/components/Info/Info.tsx";
import {About} from "@/pages/profile/components/About/About.tsx";
import {Hobbies} from "@/pages/profile/components/Hobbies/Hobbies.tsx";
import {Meetings} from "@/pages/profile/components/Meetings/Meetings.tsx";
import {TestResults} from "@/pages/profile/components/TestResults/TestResults.tsx";
import {ReactElement, useEffect, useState} from "react";
import {PopupWithBackground} from "@/shared/ui/PopupWithBackground/PopupWithBackground";
import {AddMeetingForm} from "@/pages/profile/components/AddMeetingForm/AddMeetingForm";
import {MeetingInfo, MeetingInterface} from "@/types";
import * as Api from "@/shared/api/Api";

interface Props {
  handleAddMeetingInfo: ({userId, formattedDate, comment, level}: MeetingInfo) => void;
}
export const Profile = ({handleAddMeetingInfo}: Props): ReactElement => {
  const {userId} = useParams();
  const [userInfo] = useRequest(() => getEmployeeInfo(userId));
  const [testResults] =useRequest(() => getEmployeeTestResults(userId));
  const [meetingsList, setMeetingsList] = useState<MeetingInterface[]>([]);
  const [addPopupVisible, setAddPopupVisible] = useState(false);
  const [triggerUpdate, setTriggerUpdate] = useState(false);

  const openAddPopup = () => {
    setAddPopupVisible(true);
  }

  useEffect(() => {
      handleGetMeetings(userId);
  }, [triggerUpdate]);

  const updateMeetingsList = () => {
    setTriggerUpdate(!triggerUpdate);
  }

  async function handleGetMeetings(userId: string | undefined): Promise<void> {
    try {
      const response = await Api.getMeetingsInfo(userId);
      const meetings: MeetingInterface[] = response.data.results;
      console.log(meetings);
      setMeetingsList(meetings);
    } catch (err) {
      console.log(err);
    }
  }

  if(userInfo) {
    return (
      <>
        <div className="page-container">
          <Navbar />
          <div className={styles.profile}>
            <h1 className={styles.profileTitle}>Профиль сотрудника</h1>
            <div className={styles.innerContainer}>
              <div className={styles.contactsSection}>
                <Info avatar={userInfo.avatar} firstName={userInfo.first_name} lastName={userInfo.last_name} position={userInfo.position} department={userInfo.department} phone={userInfo.phone} email={userInfo.email}/>
                <About firstName={userInfo.first_name} about={userInfo.about}/>
                <Hobbies hobbies={userInfo.hobbies}/>
              </div>
              <div className={styles.analyticsSection}>
                <Meetings openAddPopup={openAddPopup} meetingsList={meetingsList && meetingsList} />
                {testResults && <TestResults results={testResults.results}/>}
              </div>
            </div>
          </div>
          <PopupWithBackground popupVisible={addPopupVisible} closePopup={() => setAddPopupVisible(false)}>
            <AddMeetingForm userId={userId} closePopup={() => setAddPopupVisible(false)} updateMeetingsList={updateMeetingsList} handleAddMeetingInfo={handleAddMeetingInfo}/>
          </PopupWithBackground>
        </div>
      </>
    )
  } else {
    return <div></div>
  }
};
