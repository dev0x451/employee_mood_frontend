import { useState } from "react";

export const BASE_URL_MEDIA = "https://em-dev.usolcev.com/";

export const BASE_URL_REQUEST = `${BASE_URL_MEDIA}api/v1`;

export const BASE_URL_WSS = "wss://em-dev.usolcev.com/ws";

export const COUNT_EMPLOYEES_PAGE = 6;

// примение: импортировать и деструктиурировать countCardPage, addCard, на вход принимает требуемое количество отображаемых карточек первоначально
// countCardPage: количество отображаемых на экране карточек при приходе по общему массиву карточек сравниваем с индексом массива,
//                сравниваем с длиной общего массива для показа/удаления на экране кнопки пагинации
// addCard: функция для кнопки добавления карточек
// пример реализации в Employees
// {arr.map((item, index) => (
//   index < countCardPage ?
//   <>разметка карточки</> :
//   null
// ))}
// {countCardPage <= arr.length && <button onClick={addCard}>Кнопочка</button>}
export function usePagination(CONSTANT_PAGE: number) {
  const [countCardPage, setCountCardPage] = useState(CONSTANT_PAGE);
  const addCard = () => {
    setCountCardPage(countCardPage + CONSTANT_PAGE)
  }
  return {countCardPage, addCard}
}



// не удачный эксперемент с хуком сортировки, оставлена на еще подумать
// export function useSort(arr: EmployeeInterface[]) {
//   // eсли survey код вида тестирования, то в этот массив нужно записать названия видов тестирования в зависимости от кода
//   const arrSurvey = ['Проверка', 'Диагностика эмоционального выгорания', 'Что-то', 'Задача', "Тестирование", 'Психолог', 'Врач', 'Психолог', 'Разговор', 'Финал'];
//   const [arrSort, setArrSort] = useState(arr);
//   const [isClick, setIsClick] = useState(false);

//   const [isSortName, setIsSortName] = useState(true);
//   const [isSortPosition, setIsSortPosition] = useState(true);
//   const [isSortState, setIsSortState] = useState(true);
//   const [isSortTest, setIsSortTest] = useState(true)
//   const [isSortData, setIsSortData] = useState(true)
//   const [isSortResult, setIsSortResult] = useState(true)

//   useEffect(()=>{
//     setArrSort(arr)
//   },[arr.length])

//   const sortField =
//   (
//     a:{
//       first_name: string, last_name: string, position: {name: string}, mental_state: {name: string},
//       survey: number, completion_date: string, result: string
//     },
//     b:{
//       first_name: string, last_name: string, position: {name: string}, mental_state: {name: string},
//       survey: number, completion_date: string, result: string
//     },
//     field: string
//   ) => {
//     let x = '';
//     let y = '';
//     switch(field) {
//       case 'name':
//         x = a.first_name + a.last_name;
//         y = b.first_name + b.last_name;
//       break;
//       case 'position':
//         x = a.position.name;
//         y = b.position.name;
//       break;
//       case 'state':
//         x = (a.mental_state !== null ? a.mental_state.name : 'яяя');
//         y = (b.mental_state !== null ? b.mental_state.name : 'яяя');
//       break;
//       case 'test':
//         x = arrSurvey[a.survey];
//         y = arrSurvey[b.survey];
//       break;
//       case 'data':
//         x = a.completion_date;
//         y = b.completion_date;
//       break;
//       case 'result':
//         x = a.result;
//         y = b.result;
//       break;
//       default:
//         x = '';
//         y = '';
//       break;
//     }
//     if (x < y) {return -1}
//     if (x > y) {return 1}
//     return 0;
//   }

//   const sortFields = (field: string, isSortField: boolean) => {
//     isSortField ?
//     setArrSort(arrSort.sort((a, b)=>sortField(a, b, field))) :
//     setArrSort(arrSort.sort((b, a)=>sortField(a, b, field)))
//   }

//   const sortName = () => {
//     setIsClick(!isClick);
//     setIsSortName(!isSortName);
//     sortFields('name', isSortName);
//   }
//   const sortPosition = () => {
//     setIsClick(!isClick);
//     setIsSortPosition(!isSortPosition);
//     sortFields('position', isSortPosition);
//   }
//   const sortState = () => {
//     setIsClick(!isClick);
//     setIsSortState(!isSortState);
//     sortFields('state', isSortState);
//   }
//   const sortTest = () => {
//     setIsSortTest(!isSortTest);
//     sortFields('test', isSortTest);
//   }
//   const sortData = () => {
//     setIsSortData(!isSortData);
//     sortFields('data', isSortData);
//   }
//   const sortResult = () => {
//     setIsSortResult(!isSortResult);
//     sortFields('result', isSortResult);
//   }
//   return {arrSort, isClick, sortName, sortPosition, sortState, sortTest, sortData, sortResult}
// }
