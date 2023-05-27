import styles from "./main.module.css";
import { CenterScreenMain } from "@/components/CenterScreenMain/centerScreenMain";
import { RightScreenMain } from "@/components/RightScreenMain/RightScreenMain";
// import { Header } from "@/components/Header/Header";
import { Navbar } from "@/components/Navbar/Navbar";

export const Main = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className={styles.container}>
        {/* <Header /> */}
        <main className={styles.main}>
          <CenterScreenMain />
          <RightScreenMain />
        </main>
      </div>
    </div>
  );
};
