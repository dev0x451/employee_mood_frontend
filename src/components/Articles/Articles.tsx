import { ReactNode } from 'react';
import styles from './articles.module.css';
import { Article } from '../Article/Article';
import { article } from '@/types';

const articles: article[] = [
  {
    type: 'видео',
    title: 'Как понять, что у вас профессиональное выгорание',
    length: '5 мин',
    banner: '@/assets/image.png',
  },
  {
    type: 'видео',
    title: 'Как понять, что у вас профессиональное выгорание',
    length: '5 мин',
    banner: '@/assets/image.png',
  },
  {
    type: 'видео',
    title: 'Как понять, что у вас профессиональное выгорание',
    length: '5 мин',
    banner: '@/assets/image.png',
  },
]

export const Articles = () => {

  return (
    <>
      <h2 className={styles.title}>Как улучшить ментальное здоровье</h2>
      <div className={styles.articles}>
        {articles.map((item) => <Article article={item}/>)}
        <p>Experiment</p>
      </div>
    </>
  )
}
