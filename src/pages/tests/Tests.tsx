import styles from "./tests.module.css";
import { useOnlineCheck } from "@/shared/hooks/useOnlineCheck";
import { Navbar } from "@/components/Navbar/Navbar";
import { BurnoutTestBanner } from "@/components/BurnoutTestBanner/BurnoutTestBanner";
import { PsychologistInfo } from "@/components/PsychologistInfo/PsychologistInfo";
import { Records } from "@/components/Records/Records";
import { BadInternetConnection } from "@/components/BadInternetConnection/BadInternetConnection";
import { ExpressDiagnoseResponse } from "@/types";
import React from "react";
import {Button} from "@/shared/ui/Button/Button";
import {useNavigate} from "react-router-dom";

interface Tests {
  allTestsResults?: ExpressDiagnoseResponse[]
}

export const Tests: React.FC<Tests> = ({allTestsResults}) => {

  const isOnline = useOnlineCheck();
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <Navbar />
      {isOnline ?
      <div className={styles.container}>
        <div className={styles.tests}>
          <h2 className={styles.title}>Тесты</h2>
            <div className={styles.banerblock}>
              <BurnoutTestBanner id='burnout'/>
              <PsychologistInfo />
            </div>
            <Button width="250px" mode="primary" title="Заполнить колесо баланса" handleClick={() => navigate("/balance-wheel")}/>
            <div className={styles.records}>
              <h3 className={styles.subtitle}>Пройденные тесты</h3>
              <Records allTestsResults={allTestsResults}/>
            </div>
        </div>
      </div>
      : <BadInternetConnection/>}
    </div>
  );
};
