import styles from "./psychologistInfo.module.css";
import Avatar from "/image.png";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  selectConstructor,
  toggleConstructorIsActive,
} from "@/store/reducers/constructor/constructorReducer";

export const PsychologistInfo = () => {
  //Пример работы редакс стора
  //useAppDispatch, useAppSelector стандартные функции из hooks
  const dispatch = useAppDispatch();
  //обращение к глобальной переменной state.constructorSlice.value, хранится в constructorReducer
  const isChief = useAppSelector(selectConstructor);
  //значение глоальной переменной с true меняется на false
  //обращаться к ней, менять или просто брать, можно из компонентов любого уровня
  const storeExample = () => {
    //по клику на button вызывается action toggleConstructorIsActive, который описан в constructorReducer
    dispatch(toggleConstructorIsActive());
    console.log(isChief, "отображение руководителя");
  };

  return (
    <div className={styles.psychologistInfo}>
      <div className={styles.container}>
        <img src={Avatar} alt="Avatar" className={styles.avatar} />
        <div className={styles.title}>
          <h3 className={styles.name}>Михаил Лихачёв</h3>
          <p className={styles.text}>Штатный психолог</p>
        </div>
      </div>
      <button onClick={storeExample} type="button" className={styles.button}>
        Записаться на консультацию
      </button>
    </div>
  );
};
