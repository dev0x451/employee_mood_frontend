import React, {useState} from "react";
import heart from "../../../public/Vector.svg";
import heartWhite from "../../../public/VectorWhite.svg";
import play from "../../../public/play.svg";
import styles from "./usefulCard.module.scss";
import {Card} from "@/types.ts";


const UsefulCard: React.FC<Card> = ({
                                      trailerLink,
                                      image,
                                      title,
                                      text,
                                      duration,
                                      tags,
                                      isLiked
                                    }) => {

  const [isLikedTemp, setIsLiked] = useState(isLiked);

  const handleLike = () => {
    setIsLiked(!isLikedTemp);
  };

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

        <div className={styles.like}><img onClick={handleLike} src={isLikedTemp ? heart : heartWhite} alt="heart"/>
        </div>
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
