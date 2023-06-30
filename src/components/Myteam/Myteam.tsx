import styles from "./myteam.module.css";
import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import { Articles } from "../RightScreenMain/Articles/Articles";
import { Employees } from "../Employees/Employees";
import { ArticleInterface, EmployeeInterface } from "@/types";
import { Button } from "@/shared/ui/Button/Button";
import { PopupWithBackground } from "@/shared/ui/PopupWithBackground/PopupWithBackground";
import { BadInternetConnection } from "../BadInternetConnection/BadInternetConnection";
import { useAppSelector } from "@/store/hooks";
import { selectRole } from "@/store/reducers/currentUser/currentUserReducer";
import { useOnlineCheck } from "@/shared/hooks/useOnlineCheck";
import { AddEmployeeForm } from "../AddEmployeeForm/AddEmployeeForm";

interface Props {
  handleSendInviteCode: (email: string) => Promise<void>;
  employees: EmployeeInterface[];
  takeNewEmployeesList: () => Promise<void>;
}
export const Myteam: React.FC<Props> = ({
  handleSendInviteCode,
  employees,
  takeNewEmployeesList
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

  const isOnline = useOnlineCheck();

  const [addPopupVisible, setAddPopupVisible] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [isChief, setIsChief] = useState(false);
  const user = useAppSelector(selectRole);
  const reg = /[a-zA-Zа-яА-Я0-9- ]/;

  const openAddPopup = () => {
    setAddPopupVisible(true);
  };

  const refreshEmloyees = () => {
    takeNewEmployeesList();
  };

  const handleInputSort = (e: {target: { value: string }}) => {
    const value = e.target.value;
    console.log(value);
    console.log(value.match(reg));
    !(value.substring(value.length-2, value.length-1) === '-' && value.substring(value.length-1) === '-') &&
    (value === '' || value.substring(value.length-1).match(reg) !== null) &&
    setTextInput(value);
  };

  useEffect(() => {
    setIsChief(user === "hr");
  }, [user]);

  useEffect(() => {
    refreshEmloyees();
  }, []);

  return (
    <div className="page-container">
      <Navbar />
      {isOnline ?
      <div className={styles.myteam}>
        <div className={styles.leftScreen}>
          <div className={styles.topContent}>
            <h2 className={styles.title}>Моя команда</h2>
            {isChief && (
              <Button
                title="Добавить сотрудника"
                mode="primary"
                width="236px"
                height="36px"
                padding="0"
                handleClick={openAddPopup}
              />
            )}
          </div>
          <input
            className={styles.input}
            name="myteam-search-input"
            minLength={2}
            maxLength={32}
            placeholder="Начните вводить имя"
            value={textInput}
            onChange={handleInputSort}
          />
          <Employees valueInputSort={textInput} employees={employees} />
        </div>
        <div className={styles.rightScreen}>
          <Articles
            articles={articles}
            title={"Как помочь сотрудникам справиться со стрессом"}
          />
        </div>
      </div>
      : <BadInternetConnection/>}
      <PopupWithBackground
        closePopup={() => setAddPopupVisible(false)}
        popupVisible={addPopupVisible}
      >
        <AddEmployeeForm
          closeAddPopup={() => setAddPopupVisible(false)}
          handleSendInviteCode={handleSendInviteCode}
          addPopupVisible={addPopupVisible}
        />
      </PopupWithBackground>
    </div>
  );
};
