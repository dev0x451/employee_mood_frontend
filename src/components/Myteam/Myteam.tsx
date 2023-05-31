import styles from "./myteam.module.css";
import React from "react";
import icon from "@/assets/search_icon.svg";
import { Navbar } from "@/components/Navbar/Navbar";
import { Articles } from "../Articles/Articles";
import { Employees } from "../Employees/Employees";
import { ArticleInterface } from "@/types";
import { Button } from "@/shared/ui/Button/Button";

export const Myteam: React.FC = () => {
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

  return (
    <div className="page-container">
      <Navbar />
      <div className={styles.myteam}>
        <div className={styles.leftScreen}>
          <div className={styles.topContent}>
            <h2 className={styles.title}>Моя команда</h2>
            <Button
              title="Добавить сотрудника"
              mode="primary"
              width="236px"
              height="36px"
            />
          </div>
          <input
            className={styles.input}
            name="myteam-search-input"
            placeholder="Начните вводить имя"
          />
          <img className={styles.searchIcon} src={icon} alt="search icon" />
          <Employees />
        </div>
        <div className={styles.rightScreen}>
          <Articles
            articles={articles}
            title={"Как помочь сотрудникам справиться со стрессом"}
          />
        </div>
      </div>
    </div>
  );
};
