import {Navbar} from "@/components/Navbar/Navbar";
import styles from "@/pages/usefulItem/usefulItem.module.scss";
import {BadInternetConnection} from "@/components/BadInternetConnection/BadInternetConnection";
import {useOnlineCheck} from "@/shared/hooks/useOnlineCheck";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Card} from "@/types";
import axios from "axios";


export const UsefulItem = ({}) => {
  const isOnline = useOnlineCheck();
  const {id} = useParams();
  const [card, setCard] = useState({} as Card);

  useEffect(() => {
    fetchId().then(r => r);

  }, []);
  const fetchId = async () => {
    try {
      const token = localStorage.getItem("jwt");

      const response = await axios.get(`https://em-dev.usolcev.com/api/v1/entries/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCard(response.data);
      // console.log(response.data)
      // console.log(card)
      // console.log(card.category)
    } catch (error) {
      console.error('Ошибка при загрузке категорий:', error);
    }
  };

  return (
    <div className="page-container">
      <Navbar/>
      {isOnline ?
        <div className={styles.container}>
          <div className={styles.content}>
            <img className={styles.image} src={card.preview_image} alt="{card.title}"/>
            <div className={styles.category}>
              {/*{card.category.map((category: Category) => (<p key={category.id}>{category.name}</p>))}*/}
              {/*{card.category.map() = ((item) => item.name)}*/}
            </div>
            <div className={styles.title}>{card.title}</div>
            <div className={styles.text}>{card.text}</div>
          </div>
        </div>
        : <BadInternetConnection/>}
    </div>
  );
}
