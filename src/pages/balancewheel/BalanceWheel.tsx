import {Navbar} from "@/components/Navbar/Navbar";
import styles from './balancewheel.module.scss';
import {CloseButton} from "@/shared/ui/CloseButton/CloseButton";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {ControlBalanceWheel} from "@/pages/balancewheel/components/ControlBalanceWheel/ControlBalanceWheel";
import * as Api from "@/shared/api/Api";
import {BalanceWheelResult} from "@/pages/balancewheel/components/BalanceWheelResult/BalanceWheelResult";
import {Data, WheelResults} from "@/types";

const BalanceWheel = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(0);
  const [data, setData] = useState<Data[]>([]);
  const [triggerUpdate, setTriggerUpdate] = useState(false);

  useEffect( () => {
    handleGetBalanceWheelValues();
  }, [triggerUpdate]);

  console.log(data);

  const updateMeetingsList = () => {
    setTriggerUpdate(!triggerUpdate);
  }

  async function handleGetBalanceWheelValues(): Promise<void> {
    try {
      const response = await Api.getBalanceWheelValues();
      setData(response.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  const goToNextQuestion = () => {
    setStep(step + 1);
  }

  const goToPreviousQuestion = async () => {
    await handleGetBalanceWheelValues();
    setStep(step - 1);
  }

  const goToFirstQuestion = () => {
    setStep(0);
  }

  async function sendResults(results: WheelResults[], isPriority: boolean) {
    try {
      await Api.sendBalanceWheelResults(results, isPriority);
    } catch (err) {
      console.log(err);
    }
    updateMeetingsList();
  }

  const handleClose = () => {
    navigate('/tests');
  }
  return (
    <>
      <div className="page-container">
        <Navbar />
        <div className={styles.balanceWheel}>
          <div className={styles.balanceWheelContainer}>
            <CloseButton handleClick={handleClose}/>
            <h1 className={styles.title}>Колесо жизненного баланса</h1>
            <p className={styles.description}>Колесо баланса простыми словами — это инструмент,
              который позволяет определить слабые и сильные стороны жизни.
              Это поможет правильно направить внимание на те моменты,
              которые требуют дополнительного влияния.
            </p>
            { step < 3 &&
              (
                step === 0 && data
                ?
                  <ControlBalanceWheel color="purple" data={data.find(item => item.set_priority === true)} step={step} sendResults={sendResults} isPriority={true} goToPreviousQuestion={goToPreviousQuestion} goToNextQuestion={goToNextQuestion} instruction="Укажите на шкале приоритетность каждой из указанных сфер для вас"/>
                  : step === 1 && data
                ?
                  <ControlBalanceWheel color="blue" data={data && data.find(item => item.set_priority === false)} step={step} sendResults={sendResults} isPriority={false} goToPreviousQuestion={goToPreviousQuestion} goToNextQuestion={goToNextQuestion} instruction="Укажите на шкале, как вы оцениваете текущее состояние каждой из этих сфер"/>
                :
                  <BalanceWheelResult step={step} data={data && data} goToFirstQuestion={goToFirstQuestion}/>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default BalanceWheel;
