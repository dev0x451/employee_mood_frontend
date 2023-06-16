import styles from "./useful.module.scss";
import {Navbar} from "@/components/Navbar/Navbar";
import SearchUseful from "@/components/SearchUseful/SearchUseful.tsx";
import TagsList from "@/components/TagsList/TagsList.tsx";
import UsefulCard from "@/components/UsefulCard/UsefulCard.tsx";

export const Useful = () => {
  return (
    <div className="page-container">
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.useful}>
          <h2 className={styles.title}>Полезные статьи и видео</h2>
          <SearchUseful data={[]}/>
          <TagsList tags={['видео', 'статья', 'мотивация', 'психология', 'медитация', 'work&life balance',
            'time management', '< 10 минут']}/>
          <UsefulCard/>
          <p className={styles.text}>
            Скоро&nbsp;здесь&nbsp;будут&nbsp;статьи!
          </p>
        </div>
      </div>

    </div>
  );
};
