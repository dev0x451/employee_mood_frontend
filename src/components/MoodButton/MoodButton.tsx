import styles from "./MoodButton.module.css";

type Moods = "bad" | "so-so" | "normal" | "good" | "perfect";
interface MoodsProps {
  mood: Moods;
}

export const MoodButton: React.FC<MoodsProps> = ({ mood }) => {
  let caption: string;

  switch (mood) {
    case "bad":
      caption = "Плохо";
      break;
    case "so-so":
      caption = "Так себе";
      break;
    case "normal":
      caption = "В норме";
      break;
    case "good":
      caption = "Хорошо";
      break;
    case "perfect":
      caption = "Отлично";
      break;

    default:
      caption = "";
  }

  return (
    <button className={styles.container}>
      <span>{caption}</span>
      <div>:/</div>
    </button>
  );
};
