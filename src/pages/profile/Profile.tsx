import {Navbar} from "@/components/Navbar/Navbar.tsx";
import styles from './profile.module.scss';
import {useParams} from 'react-router-dom';
import {useRequest} from "@/shared/hooks/useRequest.tsx";
import {getEmployeeInfo, getEmployeeTestResults} from "@/shared/api/Api.ts";
import {Info} from "@/pages/profile/components/Info/Info.tsx";
import {About} from "@/pages/profile/components/About/About.tsx";
import {Hobbies} from "@/pages/profile/components/Hobbies/Hobbies.tsx";

export const Profile = () => {
  const {userId} = useParams();
  const [userInfo] = useRequest(() => getEmployeeInfo(userId));
  const [data] =useRequest(() => getEmployeeTestResults(userId));

  if(data) {
    data.results.forEach((result) => {
      console.log(`${result.survey.title} ${result.completion_date} ${result.mental_state.name}`)
    })
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
                {
                  userInfo.about && <About firstName={userInfo.first_name} about={userInfo.about}/>
                }
                {
                  userInfo.hobbies && <Hobbies hobbies={userInfo.hobbies}/>
                }
              </div>
              <div className={styles.analyticsSection}>sddsg</div>
            </div>
          </div>
        </div>
      </>
    )
  }
};
