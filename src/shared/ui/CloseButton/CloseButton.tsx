import styles from "./closebutton.module.scss";
import React from "react";

interface Props {
  handleClick: () => void;
}
export const CloseButton: React.FC<Props> = ({ handleClick }) => {
  return <button onClick={() => handleClick()} className={styles.closeBtn} />;
};
