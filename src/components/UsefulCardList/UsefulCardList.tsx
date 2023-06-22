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
        .map((card) => (
          <UsefulCard
            key={card.id}
            category={card.category}
            title={card.title}
            preview_image={card.preview_image}
            text={card.text}
            created={card.created}
          />
        ))
      }

    </section>

  );
}

export default UsefulCardsList;
