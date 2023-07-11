import styles from './progressbar.module.scss';

interface Props {
  step: number;
}
export const ProgressBar = ({step}: Props) => {
  return (
    <div className={styles.progressBar}>
      <p className={styles.progressBarText}>Шаг {step + 1} из 3</p>
      <div className={styles.progressBarBackground}>
        <div className={step === 0 ? styles.progressBarScale : step === 1 ? `${styles.progressBarScale} ${styles.progressBarScaleSecond}` : `${styles.progressBarScale} ${styles.progressBarScaleThird}`}></div>
      </div>
    </div>
  );
};
