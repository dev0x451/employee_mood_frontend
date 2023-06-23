import React from "react";
import styles from "./noSearchResult.module.scss";


export interface NOProps {
  searchValue: string
}

const NoSearchResult: React.FC<NOProps> = ({searchValue}) => {

  return (
    <div className={styles.container}>
      <p className={styles.text}>По вашему запросу <span className={styles.span}>«{searchValue}»</span> ничего не
        найдено
      </p>
      <p className={styles.text}>Возможно, вам будут интересны эти статьи и видео:</p>
    </div>
  )
}
export default NoSearchResult;
