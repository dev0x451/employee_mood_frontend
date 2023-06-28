import styles from "./badInternetConnection.module.scss";

export const BadInternetConnection = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.containerTitle}>Проблемы с интернетом<br/> проверьте ваше подключение</h1>
    </div>
  );
};
