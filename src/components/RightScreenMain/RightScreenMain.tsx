import styles from "./rightScreenMain.module.css";
import { PsychologistInfo } from "../PsychologistInfo/PsychologistInfo";
import { Articles } from "../Articles/Articles";
import { Events } from "../Events/Events";
import { ArticleInterface } from "@/types";

export const RightScreenMain = () => {
  const articles: ArticleInterface[] = [
    {
      type: "видео",
      title: "Как понять, что у вас профессиональное выгорание",
      length: "5 минут",
      banner: "/image.png",
    },
    {
      type: "видео",
      title: "Как понять, что у вас профессиональное выгорание",
      length: "5 минут",
      banner: "/image.png",
    },
    {
      type: "видео",
      title: "Как понять, что у вас профессиональное выгорание",
      length: "5 минут",
      banner: "/image.png",
    },
  ];

  return (
    <div className={styles.container}>
      <PsychologistInfo />
      <Articles
        articles={articles}
        title={'Как улучшить ментальное здоровье'}
      />
      <Events />
    </div>
  );
};
