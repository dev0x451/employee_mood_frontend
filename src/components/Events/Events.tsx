import styles from './events.module.css';
import image from '../../assets/image.png'
export const Events = () => {

  return (
    <div className={styles.events}>
      <h3 className={styles.header}>Предстоящее мероприятие</h3>
      <ul className={styles.list}>
        <li className={styles.point}>
          <img  className={styles.img} src={image}/>
          <div  className={styles.pointContent}>
            <p className={styles.text}>Тимбилдинг</p>
            <time className={styles.time}>18 мая 2023</time>
          </div>
        </li>
        <li className={styles.point}>
          <img  className={styles.img} src={image}/>
          <div  className={styles.pointContent}>
            <p className={styles.text}>Тимбилдинг</p>
            <time className={styles.time}>18 мая 2023</time>
          </div>
        </li>
      </ul>
    </div>
  )
}
