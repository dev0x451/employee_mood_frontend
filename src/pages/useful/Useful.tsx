import styles from "./useful.module.scss";
import {Navbar} from "@/components/Navbar/Navbar";
import SearchUseful from "@/components/SearchUseful/SearchUseful.tsx";
import TagsList from "@/components/TagsList/TagsList.tsx";
import UsefulCardList from "@/components/UsefulCardList/UsefulCardList.tsx";
import {useEffect, useState} from "react";
import {cards} from "../../components/UsefulCardList/cards.tsx"
import {Card} from "@/types.ts";

export const Useful = () => {

  const [tempCards, setTempCards] = useState(cards);
  const [tempCheckedCards, setTempCheckedCards] = useState(cards);
  const [chosenCardList, setChosenCardList] = useState(cards);

  useEffect(() => {
    matchedItems(tempCards, tempCheckedCards)
  }, [tempCards, tempCheckedCards])


  function handleSearchCards(value: string) {
    const searchedCards = cards.filter((item) =>
      item.title.toLowerCase().includes(value));
    setTempCards(searchedCards);
  }

  function matchedItems(tempCards: Card[] = cards, tempCheckedCards: Card[] = cards) {
    const ret = tempCards.filter((item1) =>
      tempCheckedCards.some((item2) =>
        item1.title === item2.title &&
        item1.image === item2.image &&
        item1.tags === item2.tags &&
        item1.text === item2.text &&
        item1.trailerLink === item2.trailerLink &&
        item1.duration === item2.duration
      )
    );

    setChosenCardList(ret);
  }

  function handleCheckedList(tags: string[]) {
    if (tags.length) {
      let result = cards.filter(({tags: arr}) => arr.some(tag => tags.includes(tag)));
      setTempCheckedCards(result)
    } else {
      setTempCheckedCards(cards)
    }
  }


  return (
    <div className="page-container">
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.useful}>
          <h2 className={styles.title}>Полезные статьи и видео</h2>
          <SearchUseful onSearch={handleSearchCards}/>
          <TagsList tags={['видео', 'статья', 'мотивация', 'психология', 'медитация', 'work&life balance',
            'time management', '< 10 минут']} onChecked={handleCheckedList}/>
          <UsefulCardList cards={chosenCardList}/>

        </div>
      </div>

    </div>
  );
};
