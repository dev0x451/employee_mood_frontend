import React from "react";
import heart from "../../../public/unlike.svg";
import play from "../../../public/play.svg";
import styles from "./usefulCard.module.scss";

interface CardProps {
  trailerLink?: string;
  image: string;
  title: string;
  text: string;
  duration: string;
}

const UsefulCard: React.FC<CardProps> = ({trailerLink, image, title, text, duration}) => {
  // {usefulItem, onSaveUsefulItem, onDeleteUsefulItem, savedUsefulItems}:{  usefulItem: string[];
  // onSaveUsefulItem: string;
  // onDeleteUsefulItem: string;
  // savedUsefulItems: string}
// ) {

  // const isSaved = savedUsefulItems.find((item) => item.Id === usefulItem.id);

  // function handleSaveUsefulItem() {
  //
  //   if (!isSaved) {
  //     onSaveUsefulItem(usefulItem);
  //   } else {
  //     onDeleteUsefulItem(usefulItem);
  //   }
  // }

  // function handleDeleteUsefulItem() {
  //
  //   onDeleteUsefulItem(usefulItem);
  // }

  return (

    <article className={styles.card}>
      <div className={styles.container}>
        <a className="" href={trailerLink} target="blank">
          <img className="" src={image}
               alt={title}/>
          <div className={styles.play}><img src={play} alt="play"/></div>
        </a>

        <div className={styles.like}><img src={heart} alt="heart"/></div>
        {/*<button type="button"*/}
        {/*        className={`usefulItem__button${isSaved ? ' usefulItem__button_saved' : ''}${(window.location.pathname === '/bookmarks') ? ' usefulItem__button_delete' : ''}`}*/}
        {/*        onClick={(window.location.pathname === '/bookmarks') ? (handleDeleteUsefulItem) : (handleSaveUsefulItem)}*/}
        {/*></button>*/}
        <div className="">
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          <p className={styles.duration}>{duration}</p>
        </div>
        <div className={styles.tags}>
          <div className={styles.tag}>Видео</div>
          <div className={styles.tag}>Психология</div>
        </div>
      </div>

    </article>
  );
}

export default UsefulCard;
