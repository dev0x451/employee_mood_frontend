import React from "react";
import UsefulCard from "@/components/UsefulCard/UsefulCard.tsx";
import styles from "./usefulCardList.module.scss";
import {Card} from "@/types.ts";
import NoSearchResult from "@/components/NoSearchResult/NoSearchResult.tsx";

export interface Props {
  cards: Card[];
  searchValue: string
  allEntries: Card[];
}

const UsefulCardsList: React.FC<Props> = ({cards, searchValue, allEntries}) => {

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
      {cards.length === 0 ? <NoSearchResult searchValue={searchValue}/> : ""}
      {cards.length === 0
        ? allEntries.slice(0, 3)
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
        : ""
      }

    </section>

  );
}

export default UsefulCardsList;
