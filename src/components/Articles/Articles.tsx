import { FC, ReactNode } from 'react';
import styles from './articles.module.css';
import { Article } from '../Article/Article';
import { ArticleInterface } from '@/types';

const articles: ArticleInterface[] = [
  {
    type: 'видео',
    title: 'Как понять, что у вас профессиональное выгорание',
    length: '5 мин',
    banner: 'src/assets/image.png',
  },
  {
    type: 'видео',
    title: 'Как понять, что у вас профессиональное выгорание',
    length: '5 мин',
    banner: 'src/assets/image.png',
  },
  {
    type: 'видео',
    title: 'Как понять, что у вас профессиональное выгорание',
    length: '5 мин',
    banner: 'src/assets/image.png',
  },
]

export const Articles: FC<ArticleInterface> = () => {

  return (
    <>
      <h2 className={styles.title}>Как улучшить ментальное здоровье</h2>
      <div className={styles.articles}>
        {articles.map((item: ArticleInterface) => <Article article={item}/>)}
        <Article article={{type: '', title: 'Смотреть все статьи и видео', banner: 'src/assets/image.png', length: ''}}/>
      </div>
    </>
  )
}
