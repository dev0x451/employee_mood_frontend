import * as React from "react";
import {useState} from "react";
import bookmark from "../../../public/bookmark.svg";
import bookmarkSaved from "../../../public/bookmark_saved.svg";
import play from "../../../public/play.svg";
import styles from "./usefulCard.module.scss";
import {Card} from "@/types";
// import {Link} from "react-router-dom";
import * as Api from "@/shared/api/Api";
import {Link} from "react-router-dom";

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
                                      // text,
                                      // created,
                                      // liked,
                                      // author,
                                      description,
                                      // url,


                                    }) => {

  const [isLikedTemp, setIsLiked] = useState(false);

  const handleLike = async () => {

    isLikedTemp ? setIsLiked(false) : setIsLiked(true);

    try {
      await Api.postUsefulLike(id)
        .then(() => {

          return;
        })
        .then(() => {

        })
      // }
    } catch (err: any) {
      // setIsDisabledLike(false);
      console.log(err);
    }
  }

  return (

    <article className={styles.card} key={id}>
      <div className={styles.like}><img onClick={handleLike} src={
        // liked !== null ? bookmarkSaved : bookmark
        isLikedTemp ? bookmarkSaved : bookmark
      }
                                        alt="heart"/>
      </div>
      <Link key={id} to={`/useful/${id}`} className={styles.link}>
        <div className={styles.container}>
          <div className="">
            <img className={styles.image} src={preview_image} height={175} width={292}
                 alt={title}/>
            {category.some((temp) => temp.id === 3) ?
              <div className={styles.play}><img src={play} alt="play"/></div>
              :
              ""}
          </div>


          <div className="">
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{description}</p>
          </div>
          <div className={styles.tags_container}>
            <div className={styles.tags}>
              {category
                .map((tag, id) => (
                  <div className={styles.tag} key={id}>{tag.name}</div>
                ))
              }

            </div>
            {/*<p className={styles.duration}>{created}</p>*/}
          </div>
        </div>
      </Link>
    </article>

  );
}

export default UsefulCard;
