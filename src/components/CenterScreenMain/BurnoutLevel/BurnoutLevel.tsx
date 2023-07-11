import styles from "./BurnoutLevel.module.css";
import { ResponsiveBar } from "@nivo/bar";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { selectBurnoutLevel } from "@/store/reducers/conditionsBurnout/conditionsBurnoutReducer";

interface DataInreface {
  [day: string]: number,
  degress: number,
}
export const BurnoutLevel = () => {

  const [data, setData] = useState<DataInreface[]>([]);
  const burnoutLevel = useAppSelector(selectBurnoutLevel);

  const generateData = () => {
    setData([]);
    burnoutLevel?.map((item, index) => {
      const burnout: DataInreface = {
        day: index + 1,
        degress: item.percentage
      }
      setData(prevState => [...prevState, burnout])
    })
  };

  useEffect(() => {
    generateData();
  }, []);

  useEffect(() => {
    generateData();
  }, [burnoutLevel]);

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h3 className={styles.heading}>Уровень выгорания</h3>
      </div>
      <div className={styles.yAxis}></div>
      <div className={styles.xAxis}></div>
      <ResponsiveBar
        data={data}
        keys={["degress"]}
        indexBy="day"
        margin={{ top: 20, right: 20, bottom: 45, left: 20 }}
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
