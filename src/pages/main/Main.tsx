import styles from "./main.module.css";
import { CenterScreenMain } from "@/components/CenterScreenMain/centerScreenMain";
import { RightScreenMain } from "@/components/RightScreenMain/RightScreenMain";
import { Header } from "@/components/Header/Header";

export const Main = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <CenterScreenMain />
        <RightScreenMain />
      </main>
    </div>
  );
};
