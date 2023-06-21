import React, {useEffect} from "react";
import heart from "../../../public/unlike.svg";
import play from "../../../public/play.svg";
import styles from "./usefulCard.module.scss";
import {Card} from "@/types.ts";


const UsefulCard: React.FC<Card> = ({
                                      trailerLink,
                                      image,
                                      title,
                                      text,
                                      duration,
                                      tags
                                    }) => {
  useEffect(() => {

  }, [])
  //
  // const handleClick = (event: Event) => {
  //   event.target.closest(`.like`).querySelector(`[name=price]`)
  //   console.log('Сердечко нажато!', event.target);
  // }
  //
  // const likes = document.querySelectorAll('.like')
  //
  // likes.forEach((element) => {
  //   element.addEventListener('click', handleClick);
  // });


  return (

    <article className={styles.card}>
      <div className={styles.container}>
        <a className="" href={trailerLink} target="blank">
          <img className="" src={image}
               alt={title}/>
          {tags.some((tag) => tag === 'видео') ?
            <div className={styles.play}><img src={play} alt="play"/></div>
            :
            ""}
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
          {tags
            .map((tag, index) => (
              <div className={styles.tag} key={index}>{tag}</div>
            ))
          }
        </div>
      </div>

    </article>
  );
}

export default UsefulCard;
