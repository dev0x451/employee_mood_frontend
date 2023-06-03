import styles from "./tests.module.css";
import { Navbar } from "@/components/Navbar/Navbar";
// import { Header } from "@/components/Header/Header";
import { BurnoutTestBanner } from "@/components/BurnoutTestBanner/BurnoutTestBanner";
import { PsychologistInfo } from "@/components/PsychologistInfo/PsychologistInfo";
import { Records } from "@/components/Records/Records";
import { ExpressDiagnoseResponse } from "@/types";

interface Tests {
  allTestsResults?: ExpressDiagnoseResponse[]
}

export const Tests: React.FC<Tests> = ({allTestsResults}) => {
  return (
    <div className="page-container">
      <Navbar />
      <div className={styles.container}>
        {/* <Header /> */}
        <div className={styles.tests}>
          <h2 className={styles.title}>Тесты</h2>
            <div className={styles.banerblock}>
              <BurnoutTestBanner id={'123123'}/>
              <PsychologistInfo />
            </div>
            <div className={styles.records}>
              <h3 className={styles.subtitle}>Пройденные тесты</h3>
              <Records allTestsResults={allTestsResults}/>
            </div>
        </div>
      </div>

    </div>
  );
};
