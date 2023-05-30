import styles from "./employees.module.css";
import React from "react";
import { EmployeeInterface } from "@/types";
import { sortIcon } from "@/assets";

export const Employees: React.FC = () => {

  const employees: EmployeeInterface[] = [
    {
      avatar: "/image.png",
      name: 'Анастасия',
      position: 'Столбовая дворянка',
      // colorball: 'blue';
      state: 'удовлетворительное',
    },
    {
      avatar: "/image.png",
      name: 'Роман',
      position: 'Стольничий',
      // colorball: 'red';
      state: 'в группе риска',
    },
    {
      avatar: "/image.png",
      name: 'Аркадий',
      position: 'Стремянной',
      // colorball: 'green',
      state: 'в группе риска',
    },

  ];

  return (
    <div className={styles.employees}>
      <div className={styles.sortContainer}>
        <button className={styles.sortButton}>Сотрудник {sortIcon}</button>
        <button className={styles.sortButton}>Должность {sortIcon}</button>
        <button className={styles.sortButton}>Состояние {sortIcon}</button>
      </div>
      {employees && employees.map((employee) => (
        <div className={styles.employee}>
          <div className={styles.avatar}>
            <img className={styles.image} src={employee.avatar} alt='Avatar'/>
            <p className={styles.text}>{employee.name}</p>
          </div>
          <p className={styles.text}>{employee.position}</p>
          <p className={styles.text}>{employee.state}</p>
        </div>
      ))}
    </div>
  );
};
