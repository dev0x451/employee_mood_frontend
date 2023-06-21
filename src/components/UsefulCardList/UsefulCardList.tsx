import React from "react";
import UsefulCard from "@/components/UsefulCard/UsefulCard.tsx";
import styles from "./usefulCardList.module.scss";
import {Card} from "@/types.ts";

export interface Props {
  cards: Card[];
}

const UsefulCardsList: React.FC<Props> = ({cards}) => {

  return (

    <section className={styles.cards}>

      {cards
        .map((card, index) => (
          <UsefulCard
            key={index}
            trailerLink={card.trailerLink}
            image={card.image}
            title={card.title}
            text={card.text}
            tags={card.tags}
            duration={card.duration}
            isLiked={card.isLiked}
          />
        ))
      }

    </section>

  );
}

export default UsefulCardsList;
