import styles from "./MoodButton.module.css";
import cn from "classnames";

type Moods = "bad" | "so-so" | "normal" | "good" | "perfect";
interface MoodsProps {
  mood: Moods;
}

export const MoodButton: React.FC<MoodsProps> = ({ mood }) => {
  let caption: string;
  let imgUrl: string;
  let colorClass: string;

  switch (mood) {
    case "bad":
      caption = "Плохо";
      imgUrl = "/worried.svg";
      colorClass = styles.moodButtonRed;
      break;
    case "so-so":
      caption = "Так себе";
      imgUrl = "/confused.svg";
      colorClass = styles.moodButtonOrange;
      break;
    case "normal":
      caption = "В норме";
      imgUrl = "/expressionless.svg";
      colorClass = styles.moodButtonYellow;
      break;
    case "good":
      caption = "Хорошо";
      imgUrl = "/slightly-smile.svg";
      colorClass = styles.moodButtonGreen;
      break;
    case "perfect":
      caption = "Отлично";
      imgUrl = "/simple-smile.svg";
      colorClass = styles.moodButtonSupergreen;
      break;

    default:
      caption = "Отлично";
      imgUrl = "/simple-smile.svg";
      colorClass = styles.moodButtonSupergreen;
  }

  return (
    <button className={cn(styles.container, colorClass)}>
      <span>{caption}</span>
      <img src={imgUrl} alt="icon" />
    </button>
  );
};
