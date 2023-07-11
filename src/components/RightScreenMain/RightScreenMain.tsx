import styles from "./rightScreenMain.module.css";
import { EventInterface } from "@/types";
import {PsychologistInfo} from "../PsychologistInfo/PsychologistInfo";
import { Articles } from "./Articles/Articles";
import { EventsMain } from "../EventsMain/EventsMain";
import {ArticleInterface} from "@/types";

interface Props {
  events: EventInterface[];
}
export const RightScreenMain: React.FC<Props> = ({events}) => {
  const articles: ArticleInterface[] = [
    {
      type: "видео",
      title: "Как понять, что у вас профессиональное выгорание",
      length: "5 минут",
      banner: "/image.png",
    },
    {
      type: "статья",
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
      <PsychologistInfo/>
      <Articles
        articles={articles}
        title={'Как улучшить ментальное здоровье'}
      />
      <EventsMain  events={events}/>
    </div>
  );
};
