// import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import { useState, useEffect } from "react";

import {
  simpleSmileIcon,
  slightlySmileIcon,
  expressionlessIcon,
  confusedIcon,
  worriedIcon,
} from "@/assets";

import styles from "./MoodGraph.module.css";

export const MoodGraph = () => {
  const [data, setData] = useState([{ x: 0, y: 0 }]);

  const generateData = () => {
    const data2 = [];
    for (let i = 0; i < 30; i++) {
      data2.push({
        x: i + 1,
        y: Math.abs(Math.random()),
      });
    }
    return data2;
  };

  useEffect(() => {
    setData(generateData());
  }, []);

  const data3 = [{ id: "mood", data: data }];

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h3 className={styles.heading}>График настроения</h3>
        <button onClick={() => setData(generateData())}>
          - март <strong>апрель</strong> май -
        </button>
      </div>

      <div className={styles.stackedSmiles}>
        <div>{simpleSmileIcon}</div>
        <div>{slightlySmileIcon}</div>
        <div>{expressionlessIcon}</div>
        <div>{confusedIcon}</div>
        <div>{worriedIcon}</div>
      </div>
      <ResponsiveLine
        data={data3}
        margin={{ top: 50, right: 0, bottom: 40, left: 33 }}
        // xScale={{ type: "point" }}
        curve="natural"
        lineWidth={2}
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
        enableArea={true}
        areaOpacity={0.1}
        colors={{ scheme: "pink_yellowGreen" }}
        isInteractive={false}
        axisLeft={null}
      />
    </div>
  );
};
