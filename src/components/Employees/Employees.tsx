import styles from "./employees.module.css";
import React, { useState, useEffect } from "react";
import { EmployeeInterface } from "@/types";
import { sortIcon, greenIcon, orangeIcon, redIcon } from "@/assets";


import { BASE_URL_MEDIA, COUNT_EMPLOYEES_PAGE, usePagination } from "@/shared/constants";
interface Props {
  valueInputSort: string;
  employees: EmployeeInterface[];
  openEmployeeInfo: (id: number) => void;
  isChief: boolean;
}

export const Employees: React.FC<Props> = (
  {valueInputSort, employees, openEmployeeInfo, isChief}
  ) => {
  const [employeesSort, setEmployeesSort] = useState<EmployeeInterface[]>(employees);
  const { countCardPage, addCard } = usePagination(COUNT_EMPLOYEES_PAGE);
  const [isSortName, setIsSortName] = useState(true);
  const [isSortPosition, setIsSortPosition] = useState(true);
  const [isSortState, setIsSortState] = useState(true);

  useEffect(()=>{
    setEmployeesSort(employees)
  },[employees.length])

  useEffect(()=>{
    setEmployeesSort(employees.filter((employee)=>
      employee.first_name.toLowerCase().includes(valueInputSort.toLowerCase()) ||
      employee.last_name.toLowerCase().includes(valueInputSort.toLowerCase()) ||
      employee.position.name.toLowerCase().includes(valueInputSort.toLowerCase())
    ));
  },[valueInputSort]);

  const sortField =
    (
      a:{first_name: string, last_name: string, position: {name: string}, mental_state: {level: number}},
      b: {first_name: string, last_name: string, position: {name: string}, mental_state: {level: number}},
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
        x = (a.mental_state !== null ? `${a.mental_state.level}` : '');
        y = (b.mental_state !== null ? `${b.mental_state.level}` : '');
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

  const setIconMentalState = (level:number) => {
    switch (level) {
      case (1):
        return greenIcon;
      case (2):
        return orangeIcon;
      case (3):
        return redIcon;
      default:
        return null;
    }


  }
  return (
    <div className={styles.employees}>
      <div className={styles.sortContainer}>
        <button className={styles.sortButton} onClick={sortName}>Сотрудник {sortIcon}</button>
        <button className={styles.sortButton} onClick={sortPosition}>Должность {sortIcon}</button>
        <button className={styles.sortButton} onClick={sortState}>Состояние {sortIcon}</button>
      </div>
      {employeesSort &&
        employeesSort.map((employee, index) => (
          index < countCardPage ?
              <div key={employee.id} className={!isChief ? styles.employee : `${styles.employee} ${styles.employeeBtn}`} onClick={() => openEmployeeInfo(employee.id)}>
                <div className={styles.user}>
                  {employee.avatar !== null ?
                    <img
                      className={styles.image}
                      src={BASE_URL_MEDIA+employee.avatar}
                      alt="Avatar"
                    /> :
                    <p className={styles.noPhoto}><span className={styles.textNoAvatar}>{employee.first_name[0] + employee.last_name[0]}</span></p>
                  }
                  <p className={styles.textUser}>{employee.first_name} {employee.last_name}</p>
                </div>
                <p className={styles.textName}>{employee.position.name}</p>
                <p className={styles.textMentalState}>
                  <span>{setIconMentalState(employee.mental_state?.level)}</span>
                  {employee.mental_state?.name}
                </p>
              </div> :
          null
        ))
      }
      {countCardPage <= employeesSort.length &&
      <button className={styles.addButton} onClick={addCard}>Загрузить ещё ...</button>}

    </div>
  );
};
