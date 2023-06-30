import styles from "./BurnoutLevel.module.css";
import { ResponsiveBar } from "@nivo/bar";
import { useState, useEffect } from "react";

export const BurnoutLevel = () => {
  // const data = [
  //   {
  //     day: "янв",
  //     degress: 50,
  //   },
  // ];

  const [data, setData] = useState([{ day: 0, degress: 20 }]);

  const generateData = () => {
    const data2 = [];
    for (let i = 0; i < 12; i++) {
      data2.push({
        day: i + 1,
        degress: Math.abs(Math.random()),
      });
    }
    return data2;
  };

  useEffect(() => {
    setData(generateData());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h3 className={styles.heading}>Уровень выгорания</h3>
        <button
          onClick={() => {
            setData(generateData());
          }}
        >
          месяц <strong>год</strong>
        </button>
      </div>
      <div className={styles.yAxis}></div>
      <div className={styles.xAxis}></div>
      <ResponsiveBar
        data={data}
        keys={["degress"]}
        indexBy="day"
        margin={{ top: 20, right: 50, bottom: 45, left: 20 }}
        padding={0.75}
        valueScale={{ type: "linear" }}
        colors="#8A32E0"
        borderRadius={5}
        animate={true}
        enableGridY={false}
        enableLabel={false}
        // axisTop={null}
        // axisRight={null}
        axisLeft={null}
        axisBottom={null}
      />{" "}
    </div>
  );
};
