import styles from './nothingtorender.module.scss';
import {ReactElement} from "react";

interface Props {
  text: string;
}
export const NothingToRender = ({text}: Props): ReactElement => {
  return <p className={styles.emptyMessage}>{text}</p>;
};
