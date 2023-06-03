import styles from "./employees.module.css";
import React, { useState, useEffect } from "react";
import { EmployeeInterface } from "@/types";
import { sortIcon } from "@/assets";

interface Props {
  valueInputSort: string;
}
// interface ArticlesListProps {
//   articles: ArticleInterface[];
//   title: string;
// }
export const Employees: React.FC<Props> = (
  {valueInputSort}
) => {
  const employees: EmployeeInterface[] = [
    {
      avatar: "/image.png",
      name: "Анастасия",
      position: "Столбовая дворянка",
      // colorball: 'blue';
      state: "удовлетворительное",
    },
    {
      avatar: "/image.png",
      name: "Роман",
      position: "Стольничий",
      // colorball: 'red';
      state: "в группе риска",
    },
    {
      avatar: "/image.png",
      name: "Аркадий",
      position: "Стремянной",
      // colorball: 'green',
      state: "в группе риска",
    },
  ];

  const [employeesSort, setEmployeesSort] = useState(employees)
  const [isSortName, setIsSortName] = useState(true)
  const [isSortPosition, setIsSortPosition] = useState(true)
  const [isSortState, setIsSortState] = useState(true)

  useEffect(()=>{
    setEmployeesSort(employees.filter((employee)=>
      employee.name.toLowerCase().includes(valueInputSort) || employee.position.toLowerCase().includes(valueInputSort)
    ));
  },[valueInputSort]);



  const sortField = (a, b, field) => {
    let x = '';
    let y = '';
    switch(field) {
      case 'name':
        x = a.name;
        y = b.name;
      break;
      case 'position':
        x = a.position;
        y = b.position;
      break;
      case 'state':
        x = a.state;
        y = b.state;
      break;
      default:
        x = '';
        y = '';
      break;
    }
    if (x < y) {return -1}
    if (x > y) {return 1}
    return 0;

  }

  const sortFields = (field, isSortField) => {
    isSortField ?
    setEmployeesSort(employeesSort.sort((a, b)=>sortField(a, b, field))) :
    setEmployeesSort(employeesSort.sort((b, a)=>sortField(a, b, field)))
  }

  const sortName = () => {
    setIsSortName(!isSortName);
    sortFields('name', isSortName);
  }
  const sortPosition = () => {
    setIsSortPosition(!isSortPosition);
    sortFields('position', isSortPosition);
  }
  const sortState = () => {
    setIsSortState(!isSortState);
    sortFields('state', isSortState);
  }

  return (
    <div className={styles.employees}>
      <div className={styles.sortContainer}>
        <button className={styles.sortButton} onClick={sortName}>Сотрудник {sortIcon}</button>
        <button className={styles.sortButton} onClick={sortPosition}>Должность {sortIcon}</button>
        <button className={styles.sortButton} onClick={sortState}>Состояние {sortIcon}</button>
      </div>
      {employeesSort &&
        employeesSort.map((employee) => (
          <div key={employee.name.slice(-10)} className={styles.employee}>
            <div className={styles.avatar}>
              <img
                className={styles.image}
                src={employee.avatar}
                alt="Avatar"
              />
              <p className={styles.text}>{employee.name}</p>
            </div>
            <p className={styles.text}>{employee.position}</p>
            <p className={styles.text}>{employee.state}</p>
          </div>
        ))}
    </div>
  );
};
