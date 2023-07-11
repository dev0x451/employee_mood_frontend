import styles from "./main.module.css";
import { EventInterface } from "@/types";
import { useOnlineCheck } from "@/shared/hooks/useOnlineCheck";
import { CenterScreenMain } from "@/components/CenterScreenMain/centerScreenMain";
import { RightScreenMain } from "@/components/RightScreenMain/RightScreenMain";
import { BadInternetConnection } from "@/components/BadInternetConnection/BadInternetConnection";
import { Navbar } from "@/components/Navbar/Navbar";

interface Props {
  events: EventInterface[];
}
export const Main: React.FC<Props> = ({events}) => {
  const isOnline = useOnlineCheck();

  return  (
    <div className="page-container">
      <Navbar />
      {isOnline ?
        <div className={styles.container}>
          {/* <Header /> */}
          <main className={styles.main}>
            <CenterScreenMain />
            <RightScreenMain events={events}/>
          </main>
        </div>
      : <BadInternetConnection/>}
    </div>
  )
};
