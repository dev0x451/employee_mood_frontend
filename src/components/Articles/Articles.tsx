import { FC } from "react";
import styles from "./articles.module.css";
import { Article } from "../Article/Article";
import { ArticleInterface } from "@/types";

interface ArticlesListProps {
  articles: ArticleInterface[];
}

export const Articles: FC<ArticlesListProps> = ({ articles }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Как улучшить ментальное здоровье</h3>
      <div className={styles.articles}>
        {articles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
        <Article
          article={{
            type: "",
            title: "Смотреть все статьи и видео",
            banner: "/image.png",
            length: "",
          }}
        />
      </div>
    </div>
  );
};
