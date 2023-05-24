import styles from "./main.module.css";
import { RightScreenMain } from "@/components/RightScreenMain/RightScreenMain.tsx";

export const Main = () => {
  return (
    <div className={styles.main}>
      {/* <p className={styles.text}>Main</p> */}
      <RightScreenMain />
    </div>
  );
};
