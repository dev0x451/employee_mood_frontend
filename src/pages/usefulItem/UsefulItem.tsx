import {Navbar} from "@/components/Navbar/Navbar";
import styles from "@/pages/usefulItem/usefulItem.module.scss";
import {BadInternetConnection} from "@/components/BadInternetConnection/BadInternetConnection";
import {useOnlineCheck} from "@/shared/hooks/useOnlineCheck";
// import {useParams} from "react-router-dom";
// import * as React from "react";
// import {allEntries} from "@/pages/usefulItem/temp";

debugger

export const UsefulItem = ({}) => {
  const isOnline = useOnlineCheck();
  // const {id} = useParams();

  // const card: object = allEntries.find((card: object) => card.id === id);

  return (
    <div className="page-container">
      <Navbar/>
      {isOnline ?
        <div className={styles.container}>
          <div className={styles.content}>
            <img className={styles.image} src="" alt=""/>
            {/*<div className={styles.category}>{card.category}</div>*/}
            <div className={styles.title}>{}</div>
            <div className={styles.text}></div>
          </div>
        </div>
        : <BadInternetConnection/>}
    </div>
  );
}
