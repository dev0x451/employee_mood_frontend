import styles from './article.module.css';
import { article } from '@/types';

export const Article = ({banner, title, type, length}: article) => {

  return (
    <div className={styles.article}>
      <img src={banner} className={styles.image}/>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.container}>
        <p className={styles.text}>{type}</p>
        <p className={styles.text}>{length}</p>
      </div>
    </div>
  )
}
