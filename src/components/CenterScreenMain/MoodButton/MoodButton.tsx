import styles from "./MoodButton.module.css";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSuccessMessage } from "@/store/reducers/alertSuccess/alertSuccessReducer";
import { setErrorMessage } from "@/store/reducers/alertError/alertErrorReducer";
import { sendButtonCondition, selectButtonConditions } from "@/store/reducers/conditionsBurnout/conditionsBurnoutReducer";

type Moods = "bad" | "so-so" | "normal" | "good" | "perfect";
interface MoodsProps {
  mood: Moods;
}

export const MoodButton: React.FC<MoodsProps> = ({ mood }) => {

  const dispatch = useAppDispatch();
  const buttonCondition = useAppSelector(selectButtonConditions);

  let caption: string;
  let imgUrl: string;
  let colorClass: string;
  let condition: number;

  switch (mood) {
    case "bad":
      caption = "Плохо";
      imgUrl = "/worried.svg";
      colorClass = styles.moodButtonRed;
      condition = 1;
      break;
    case "so-so":
      caption = "Так себе";
      imgUrl = "/confused.svg";
      colorClass = styles.moodButtonOrange;
      condition = 2;
      break;
    case "normal":
      caption = "В норме";
      imgUrl = "/expressionless.svg";
      colorClass = styles.moodButtonYellow;
      condition = 3;
      break;
    case "good":
      caption = "Хорошо";
      imgUrl = "/slightly-smile.svg";
      colorClass = styles.moodButtonGreen;
      condition = 4;
      break;
    case "perfect":
      caption = "Отлично";
      imgUrl = "/simple-smile.svg";
      colorClass = styles.moodButtonSupergreen;
      condition = 5;
      break;

    // default:
    //   caption = "Отлично";
    //   imgUrl = "/simple-smile.svg";
    //   colorClass = styles.moodButtonSupergreen;
    //   condition = 5;
  }


  function handleSendMood(e: React.MouseEvent<HTMLButtonElement>) {
    if (buttonCondition) {
      dispatch(setErrorMessage('Можно голосовать только один раз в день'))
    } else {
      const condition = +(e.currentTarget as HTMLButtonElement).value;
      const note = "Моё состояние сегодня";
      const date = new Date().toISOString()

      dispatch(sendButtonCondition({
        mood: condition,
        note: note,
        date: date
      }))
      dispatch(setSuccessMessage('Вы молодец!'))
    }
  }

  return (
    <button onClick={(e) => handleSendMood(e)} value={condition} className={cn(styles.container, colorClass)}>
      <span>{caption}</span>
      <img src={imgUrl} alt="icon" />
    </button>
  );
};
