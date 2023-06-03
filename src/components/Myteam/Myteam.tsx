import styles from "./myteam.module.css";
import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import { Articles } from "../Articles/Articles";
import { Employees } from "../Employees/Employees";
import { ArticleInterface, EmployeeInterface } from "@/types";
import { Button } from "@/shared/ui/Button/Button";
import { AddEmployeePopup } from "@/components/AddEmployeePopup/AddEmployeePopup";
import { useAppSelector } from "@/store/hooks";
import { selectRole } from "@/store/reducers/currentUser/currentUserReducer";

interface Props {
  resetMessages: () => void;
  handleSendInviteCode: (email: string) => Promise<void>;
  success: string;
  error: string;
  closeErrorPopup: () => void;
  popupOpened: boolean;
  employees: EmployeeInterface[];
}
export const Myteam: React.FC<Props> = ({
  resetMessages,
  handleSendInviteCode,
  success,
  error,
  closeErrorPopup,
  popupOpened,
  employees,
}) => {
  const articles: ArticleInterface[] = [
    {
      type: "видео",
      title: "Как понять, что у вас профессиональное выгорание",
      length: "5 минут",
      banner: "/image.png",
    },
    {
      type: "видео",
      title: "Как понять, что у вас профессиональное выгорание",
      length: "5 минут",
      banner: "/image.png",
    },
    {
      type: "видео",
      title: "Как понять, что у вас профессиональное выгорание",
      length: "5 минут",
      banner: "/image.png",
    },
    {
      type: "видео",
      title: "Как понять, что у вас профессиональное выгорание",
      length: "5 минут",
      banner: "/image.png",
    },
    {
      type: "видео",
      title: "Как понять, что у вас профессиональное выгорание",
      length: "5 минут",
      banner: "/image.png",
    },
  ];

  const [addPopupVisible, setAddPopupVisible] = useState(false);
  const [textInput, setTextInput] = useState('')
  const [isChief, setIsChief] = useState(false)
  const user = useAppSelector(selectRole);

  const openAddPopup = () => {
    setAddPopupVisible(true);
  };

  const closeAddPopup = () => {
    setAddPopupVisible(false);
    resetMessages();
  };

  const handleInputSort = (e: {target:{value:string}}) => {
    setTextInput(e.target.value);
  }

  useEffect (() => {
    setIsChief(user === 'hr')
  }, [user])


  return (
    <div className="page-container">
      <Navbar />
      <div className={styles.myteam}>
        <div className={styles.leftScreen}>
          <div className={styles.topContent}>
            <h2 className={styles.title}>Моя команда</h2>
            {isChief && <Button
              title="Добавить сотрудника"
              mode="primary"
              width="236px"
              height="36px"
              openAddPopup={openAddPopup}
            />}
          </div>
          <input
            className={styles.input}
            name="myteam-search-input"
            placeholder="Начните вводить имя"
            value = {textInput}
            onChange={handleInputSort}
          />
          <Employees valueInputSort={textInput} employees={employees}/>
        </div>
        <div className={styles.rightScreen}>
          <Articles
            articles={articles}
            title={"Как помочь сотрудникам справиться со стрессом"}
          />
        </div>
      </div>
      <AddEmployeePopup
        closeAddPopup={closeAddPopup}
        addPopupVisible={addPopupVisible}
        handleSendInviteCode={handleSendInviteCode}
        success={success}
        error={error}
        closeErrorPopup={closeErrorPopup}
        popupOpened={popupOpened}
      />
    </div>
  );
};
