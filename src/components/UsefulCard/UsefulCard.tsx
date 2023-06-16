// import React from "react";
// import girl from "/girl.jpg";
import styles from "./usefulCard.module.scss";


// interface UsefulCardProps {
//   usefulItem: ;
//   onSaveUsefulItem: ;
//   onDeleteUsefulItem: ;
//   savedUsefulItems:
// }
interface IItems {
  trailerLink: string;
  image: string;
  title: string;
  text: string;
  duration: string;
}


const usefulItem: IItems = {
  trailerLink: "https://www.youtube.com/watch?v=-xDZwb-PY0M",
  image: 'girl',
  title: 'Как понять, что у вас профессиональное выгорание',
  text: `В этом выпуске Маша расскажет,
      как выявить выгорание на начальных этапах,
      чем опасна многозадачность и какие четыре
      стадии есть у синдрома переутомления.`,
  duration: '30 минут',
}


function UsefulCard(
  // {usefulItem, onSaveUsefulItem, onDeleteUsefulItem, savedUsefulItems}:{  usefulItem: string[];
  // onSaveUsefulItem: string;
  // onDeleteUsefulItem: string;
  // savedUsefulItems: string}
) {

  // const isSaved = savedUsefulItems.find((item) => item.Id === usefulItem.id);

  // function handleSaveUsefulItem() {
  //
  //   if (!isSaved) {
  //     onSaveUsefulItem(usefulItem);
  //   } else {
  //     onDeleteUsefulItem(usefulItem);
  //   }
  // }

  // function handleDeleteUsefulItem() {
  //
  //   onDeleteUsefulItem(usefulItem);
  // }

  return (

    <article className={styles.card}>
      <div className="">
        <a className="" href={usefulItem.trailerLink} target="blank">
          <img className="" src={usefulItem.image}
               alt={usefulItem.title}/>
        </a>
        {/*<button type="button"*/}
        {/*        className={`usefulItem__button${isSaved ? ' usefulItem__button_saved' : ''}${(window.location.pathname === '/bookmarks') ? ' usefulItem__button_delete' : ''}`}*/}
        {/*        onClick={(window.location.pathname === '/bookmarks') ? (handleDeleteUsefulItem) : (handleSaveUsefulItem)}*/}
        {/*></button>*/}
        <div className="">
          <h2 className={styles.title}>{usefulItem.title}</h2>
          <p className={styles.text}>{usefulItem.text}</p>
          <p className={styles.duration}>{usefulItem.duration}</p>
        </div>
        <div className={styles.tags}>
          <div className={styles.tag}>Видео</div>
          <div className={styles.tag}>Психология</div>
        </div>
      </div>


    </article>
  );
}

export default UsefulCard;
