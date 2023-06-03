import styles from "./psychologistInfo.module.css";
import Avatar from "/psychologist.png";


export const PsychologistInfo = () => {

  function handleClick () {
    alert('Вы записались на прием к психологу')
  }

  return (
    <div className={styles.psychologistInfo}>
      <div className={styles.container}>
        <img src={Avatar} alt="Avatar" className={styles.avatar} />
        <div className={styles.title}>
          <h3 className={styles.name}>Михаил Лихачёв</h3>
          <p className={styles.text}>Штатный психолог</p>
        </div>
      </div>
      <button onClick={handleClick} type="button" className={styles.button}>
        Записаться на консультацию
      </button>
    </div>
  );
};
