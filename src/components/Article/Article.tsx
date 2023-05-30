import styles from "./article.module.css";
import { ArticleInterface } from "@/types";
import React from "react";

interface ArticleProps {
  article: ArticleInterface;
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className={styles.article}>
      <img src={article.banner} className={styles.image} />
      <h3 className={styles.title}>{article.title}</h3>
      <div className={styles.container}>
        <p className={styles.text}>{article.type}</p>
        <p className={styles.text}>{article.length}</p>
      </div>
    </div>
  );
};
