import styles from "./article.module.css";
import {ArticleInterface} from "@/types";
import React from "react";
import {useNavigate} from "react-router-dom";
import play from "../../../../../public/play.svg";

interface ArticleProps {
  article: ArticleInterface;
}


export const Article: React.FC<ArticleProps> = ({article}) => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`/useful`);
  }
  return (
    <div className={styles.article} onClick={routeChange}>
      <img src={article.banner} className={styles.image}/>
      {article.type === 'видео' ?
        <div className={styles.play}><img src={play} alt="play"/></div>
        :
        ""}
      <h3 className={styles.title}>{article.title}</h3>
      <div className={styles.container}>
        <p className={styles.text}>{article.type}</p>
        <p className={styles.text}>{article.length}</p>
      </div>
    </div>
  );
};
