import styles from "./main.module.css";
import { CenterScreenMain } from "@/components/CenterScreenMain/centerScreenMain.tsx";
import { RightScreenMain } from "@/components/RightScreenMain/RightScreenMain.tsx";

export const Main = () => {
  return (
    <div className={styles.main}>
      <CenterScreenMain />
      <RightScreenMain />
    </div>
  );
};
