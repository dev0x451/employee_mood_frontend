import React, {useState} from "react";
import heart from "../../../public/Vector.svg";
import heartWhite from "../../../public/VectorWhite.svg";
import play from "../../../public/play.svg";
import styles from "./usefulCard.module.scss";
import {Card} from "@/types.ts";

export interface Category {
  id: number,
  name: string,
  slug: string,
  description: string;
}


const UsefulCard: React.FC<Card> = ({
                                      id,
                                      category,
                                      title,
                                      preview_image,
                                      text,
                                      created,
                                      isLiked
                                    }) => {

  const [isLikedTemp, setIsLiked] = useState(isLiked);

  const handleLike = () => {
    setIsLiked(!isLikedTemp);
  };

  return (

    <article className={styles.card} key={id}>
      <div className={styles.container}>
        <a className="" href={'/'} target="blank">
          <img className={styles.image} src={preview_image} height={175} width={292}
               alt={title}/>
          {category.some((temp) => temp.id === 3) ?
            <div className={styles.play}><img src={play} alt="play"/></div>
            :
            ""}
        </a>

        <div className={styles.like}><img onClick={handleLike} src={isLikedTemp ? heart : heartWhite} alt="heart"/>
        </div>
        <div className="">
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.tags_container}>
          <div className={styles.tags}>
            {category
              .map((tag, id) => (
                <div className={styles.tag} key={id}>{tag.name}</div>
              ))
            }

          </div>
          <p className={styles.duration}>{created}</p>
        </div>
      </div>

    </article>
  );
}

export default UsefulCard;
