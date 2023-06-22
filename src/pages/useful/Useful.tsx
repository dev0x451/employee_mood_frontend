import styles from "./useful.module.scss";
import {Navbar} from "@/components/Navbar/Navbar";
import SearchUseful from "@/components/SearchUseful/SearchUseful.tsx";
import TagsList from "@/components/TagsList/TagsList.tsx";
import UsefulCardList from "@/components/UsefulCardList/UsefulCardList.tsx";
import {useEffect, useState} from "react";
import {Card, Category} from "@/types.ts";
import axios from 'axios';

// interface Entry {
//   id:number;
//   category:object[];
//   author:string;
//   title:string;
//   preview_image:string;
//   text:string;
//   created:string;
// }

export const Useful = () => {
  const [entries, setEntries] = useState<Card[]>([]);
  // const [isLoading, setIsLoading] = useState(true);

  const [tempCards, setTempCards] = useState(entries);
  const [tempCheckedCards, setTempCheckedCards] = useState(entries);
  const [chosenCardList, setChosenCardList] = useState(entries);

  const [categories, setCategories] = useState<Category[]>([]);


  const fetchData = async () => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3NTAyODQ0LCJpYXQiOjE2ODc0MTY0NDQsImp0aSI6IjM4ZDYwOTNjZDAxYTRlYzM4NTZmZWNhY2NkOTNkNmYwIiwidXNlcl9pZCI6NH0.DRpIjF7F4arYdFSwTGrg5Yg0wNzf9sQqxXQvQLoTxeE'; // Замените на свой JWT Bearer Token
      const headers = {Authorization: `Bearer ${token}`};
      const response = await axios.get('https://em-dev.usolcev.com/api/v1/entries/', {headers});
      setEntries(response.data.results);
      // console.log(entries)
      // console.log(chosenCardList)
      // setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData().then(r => r);
  }, []);


  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  //-------------------------------------
  //--------------------------------------


  const fetchCategories = async () => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3NTAyODQ0LCJpYXQiOjE2ODc0MTY0NDQsImp0aSI6IjM4ZDYwOTNjZDAxYTRlYzM4NTZmZWNhY2NkOTNkNmYwIiwidXNlcl9pZCI6NH0.DRpIjF7F4arYdFSwTGrg5Yg0wNzf9sQqxXQvQLoTxeE'; // Замените на ваш реальный JWT Bearer Token

      const response = await axios.get('https://em-dev.usolcev.com/api/v1/entries/categories', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.data)
      setCategories(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке категорий:', error);
    }
  };

  useEffect(() => {
    fetchCategories().then(r => r);

  }, []);

  //--------------------------------------
  // ----------------------------------------
  useEffect(() => {
    matchedItems(tempCards, tempCheckedCards)
    console.log(tempCards)
    console.log(tempCheckedCards)
  }, [tempCards, tempCheckedCards])


  useEffect(() => {
    console.log(entries)
    setTempCards(entries)
    setTempCheckedCards(entries)
  }, [entries])


  function handleSearchCards(value: string) {
    const searchedCards = entries.filter((item) =>
      item.title.toLowerCase().includes(value));
    // console.log(searchedCards)
    setTempCards(searchedCards);
  }

  function matchedItems(tempCards: Card[] = entries, tempCheckedCards: Card[] = entries) {
    // console.log(tempCards)
    // console.log(tempCheckedCards)
    const ret = tempCards.filter((item1) =>
      tempCheckedCards.some((item2) =>
        item1.title === item2.title &&
        // item1.image === item2.image &&
        // item1.tags === item2.tags &&
        // item1.text === item2.text &&
        // item1.trailerLink === item2.trailerLink &&
        // item1.duration === item2.duration
        item1.id === item2.id &&
        item1.category === item2.category &&
        item1.author === item2.author &&
        item1.text === item2.text &&
        item1.preview_image === item2.preview_image &&
        item1.text === item2.text &&
        item1.created === item2.created
      )
    );

    setChosenCardList(ret);
  }

  function handleCheckedList(tags: string[]) {
    if (tags.length) {
      let result: Card[] = entries.filter((card) => {
        return card.category.some((category) => tags.includes(category.name))
      });
      setTempCheckedCards(result)
      // console.log(tempCheckedCards)
    } else {
      setTempCheckedCards(entries)
    }
  }


  return (
    <div className="page-container">
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.useful}>
          <h2 className={styles.title}>Полезные статьи и видео</h2>
          <SearchUseful onSearch={handleSearchCards}/>
          <TagsList tags={categories}
                    onChecked={handleCheckedList}
          />
          <UsefulCardList cards={chosenCardList}/>

        </div>
      </div>

    </div>
  );
};
