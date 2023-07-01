import styles from "./textarea.module.scss";
import {ChangeEvent, ReactElement} from "react";

interface Props {
  comment: string;
  handleComment: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({comment, handleComment}: Props): ReactElement => {
  return (
    <textarea
      placeholder="Опишите подробнее состояние сотрудника после встречи"
      className={styles.textarea}
      value={comment}
      name={comment}
      onChange={(e) => handleComment(e)}
      maxLength={257}
    />
  );
};
