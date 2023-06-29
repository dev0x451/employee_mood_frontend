import {FC} from "react";
import styles from "./articles.module.css";
import {Article} from "./Article/Article";
import {ArticleInterface} from "@/types";
import vector from "@/assets/Vector.svg"

interface ArticlesListProps {
  articles: ArticleInterface[];
  title: string;
}

export const Articles: FC<ArticlesListProps> = ({articles, title}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.articles}>
        {articles.map((article, index) => (
          <Article key={index} article={article}/>
        ))}
        <Article
          article={{
            type: "",
            title: "Смотреть все статьи и видео",
            banner: vector,
            length: "",
          }}
        />
      </div>
    </div>
  );
};
