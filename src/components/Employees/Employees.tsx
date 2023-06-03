import styles from "./employees.module.css";
import React, { useState, useEffect } from "react";
import { EmployeeInterface } from "@/types";
import { sortIcon } from "@/assets";

interface Props {
  valueInputSort: string;
  employees: EmployeeInterface[];
}

export const Employees: React.FC<Props> = (
  {valueInputSort, employees}
) => {

  const [employeesSort, setEmployeesSort] = useState(employees)
  const [isSortName, setIsSortName] = useState(true)
  const [isSortPosition, setIsSortPosition] = useState(true)
  const [isSortState, setIsSortState] = useState(true)

  useEffect(()=>{
    setEmployeesSort(employees)
  },[employees.length])

  useEffect(()=>{
    setEmployeesSort(employees.filter((employee)=>
      employee.first_name.toLowerCase().includes(valueInputSort) ||
      employee.last_name.toLowerCase().includes(valueInputSort) ||
      employee.position.name.toLowerCase().includes(valueInputSort)
    ));
  },[valueInputSort]);

  const sortField =
    (
      a:{first_name: string, last_name: string, position: {name: string}, mental_state: string},
      b: {first_name: string, last_name: string, position: {name: string}, mental_state: string},
      field: string
    ) => {
    let x = '';
    let y = '';
    switch(field) {
      case 'name':
        x = a.first_name + a.last_name;
        y = b.first_name + b.last_name;
      break;
      case 'position':
        x = a.position.name;
        y = b.position.name;
      break;
      case 'state':
        x = a.mental_state;
        y = b.mental_state;
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

  const sortFields = (field: string, isSortField: boolean) => {
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
          <div key={employee.id} className={styles.employee}>
            <div className={styles.avatar}>
              <img
                className={styles.image}
                src={employee.avatar === null ? '/image.png' : employee.avatar}
                alt="Avatar"
              />
              <p className={styles.text}>{employee.first_name} {employee.last_name}</p>
            </div>
            <p className={styles.text}>{employee.position.name}</p>
            <p className={styles.text}>{employee.mental_state}</p>
          </div>
        ))}
    </div>
  );
};
