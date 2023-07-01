import { ResponsiveLine } from "@nivo/line";
import { useState, useEffect } from "react";
import { selectConditions } from "@/store/reducers/conditionsBurnout/conditionsBurnoutReducer";
import { useSelector } from "react-redux";

import {
  simpleSmileIcon,
  slightlySmileIcon,
  expressionlessIcon,
  confusedIcon,
  worriedIcon,
} from "@/assets";

import styles from "./MoodGraph.module.css";

interface renderData {
  x: number,
  y: number
}

export const MoodGraph = () => {
  const [data, setData] = useState <renderData[]>([{ x: 0, y: 0 }]);
  const [monthVisible, setMonthVisible] = useState <number>(0);
  const [currentYear, setCurrentYear] = useState<number>(2023);
  const [numberOfDays, setNumberOfDays] = useState<number>(30);

  const conditionsRecieved = useSelector(selectConditions);


  function handleSendMood(e: React.MouseEvent<HTMLElement>) {
    console.log(e.target)
  }

  function generateData () {

    //conditionsRecieved currentYear monthVisible numberOfDays
    const renderData: renderData[] = [];

    const yearFilteredArray = conditionsRecieved?.filter(item => {
     const conditionYear = new Date(item.date).getFullYear();
     return conditionYear === currentYear;
    })

    const monthFilteredArray = yearFilteredArray?.filter(item => {
      const conditionMonth = new Date(item.date).getMonth();
      return conditionMonth === monthVisible;
    })

      for (let i = 1; i <= numberOfDays; i++) {
        renderData.push({
          x: i,
          y: 0,
        })
      }

    if (monthFilteredArray) {
     monthFilteredArray?.forEach((item) => {
        const day = new Date(item.date).getUTCDate();

        //если на эту дату есть оценка настроения - подменяем её в результирующем массиве
        if (renderData[day - 1].x === day) renderData[day - 1].y = item.mood;
      })
    }

    return renderData;
  }

  function getMonthName (monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber);
    return date.toLocaleString('ru', { month: 'long' });
  }

  function decrease () {
    if (monthVisible - 1 >= 0) {
      setMonthVisible(prevstate => prevstate - 1)
    } else if (monthVisible - 1 < 0) setMonthVisible(11)
  }

  function increase () {
    if (monthVisible + 1 <= 11) {
      setMonthVisible(prevstate => prevstate + 1)
    } else if (monthVisible + 1 > 11) setMonthVisible(0)
  }

  function getNumberOfVisibleMonth (year: number, month: number): number {
    return new Date(year, month, 0).getDate()
  }

  useEffect(() => {
    setNumberOfDays(getNumberOfVisibleMonth(currentYear, monthVisible + 1))
    setData(generateData())
  }, [monthVisible]);

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    setMonthVisible(month);
    setCurrentYear(year);
    setNumberOfDays(getNumberOfVisibleMonth(year, month + 1))
    setData(generateData());
  }, []);


  const data3 = [{ id: "mood", data: data }];

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h3 className={styles.heading}>График настроения</h3>
        <div>
          <button className={styles.month} onClick={decrease}>
            {'< '}{getMonthName(monthVisible - 1)}
          </button>
            <strong className={styles.monthVisible}>{getMonthName(monthVisible).toUpperCase()}</strong>
          <button className={styles.month} onClick={increase}>
            {getMonthName(monthVisible + 1)}{' >'}
          </button>
        </div>

      </div>

      <div className={styles.stackedSmiles}>
        <div className={styles.smile} data-value={5} onClick={(e) => handleSendMood(e)}>{simpleSmileIcon}</div>
        <div className={styles.smile} data-value={4} onClick={(e) => handleSendMood(e)}>{slightlySmileIcon}</div>
        <div className={styles.smile} data-value={3} onClick={(e) => handleSendMood(e)}>{expressionlessIcon}</div>
        <div className={styles.smile} data-value={2} onClick={(e) => handleSendMood(e)}>{confusedIcon}</div>
        <div className={styles.smile} data-value={1} onClick={(e) => handleSendMood(e)}>{worriedIcon}</div>
      </div>
      <div className={styles.xAxis}></div>

      <ResponsiveLine
        data={data3}
        margin={{ top: 50, right: 0, bottom: 40, left: 33 }}
        // xScale={{ type: "point" }}
        curve="basis"
        lineWidth={1}
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
        enableArea={true}
        areaOpacity={0.1}
        colors={{ scheme: 'purple_orange' }}
        defs={[
          {
            id: 'gradient',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#4c239d' },
                { offset: 50, color: '#4c239d' },
                { offset: 100, color: 'white' },
            ],
          },
        ]}
        fill={[
          { match: '*', id: 'gradient' },
        ]}
        axisLeft={null}
        axisBottom={null}
      />
    </div>
  );
};
