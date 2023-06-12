import { useNavigate } from "react-router";
import styles from "./pagenotfound.module.scss";
import { Navbar } from "@/components/Navbar/Navbar";
import { Button } from "@/shared/ui/Button/Button";

export const Pagenotfound = () => {
  const navigate = useNavigate();

  function handleClick () {
    navigate('/')
  }

  return (
    <div className="page-container">
      <Navbar />
      <div className={styles.pagenotfound}>
        <div className={styles.container}>
          <h1 className={styles.containerTitle}>404: такой страницы<br/> у нас нет</h1>
          <p className={styles.containerText}>Но есть много других интересных и полезных штук </p>
          <Button
            title='Вернуться на главную'
            width="208px"
            height="44px"
            type='button'
            mode="primary"
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
