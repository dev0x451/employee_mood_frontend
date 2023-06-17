import React from "react";
import {cards} from "./cards.tsx";
import UsefulCard from "@/components/UsefulCard/UsefulCard.tsx";
import styles from "./usefulCardList.module.scss";


const UsefulCardsList: React.FC = () => {

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
            duration={card.duration}
          />
        ))
      }

    </section>

  );
}

export default UsefulCardsList;
