import styles from './rightScreenMain.module.css';
import { PsychologistInfo } from '../PsychologistInfo/PsychologistInfo';
import { Articles } from '../Articles/Articles';
import { Events } from '../Events/Events';

export const RightScreenMain = () => {

  return (
    <div className={styles.container}>
      <PsychologistInfo/>
      <Articles/>
      <Events/>
    </div>
  )
}
