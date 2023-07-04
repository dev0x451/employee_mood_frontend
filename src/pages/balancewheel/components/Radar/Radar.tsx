import { ResponsiveRadar } from '@nivo/radar';
import { WheelResultItem } from "@/types";

interface Props {
  chartData: WheelResultItem[];
  step: number;
}

export const Radar = ({ chartData, step }: Props) => {
  const formattedData = chartData.map((item) => {
    if (step === 2) {
      return {
        "life-direction": item["life-direction"],
        "Приоритет": item["Приоритет"],
        "Текущее состояние": item["Текущее состояние"],
      };
    } else {
      return {
        "life-direction": item["life-direction"],
        "Результат": item["Результат"],
      };
    }
  });

  return (
    <ResponsiveRadar
      data={formattedData}
      keys={step === 2 ? ["Приоритет", "Текущее состояние"] : ["Результат"]}
      indexBy="life-direction"
      maxValue={10}
      valueFormat=">-.2f"
      margin={{ top: 0, right: 100, bottom: 0, left: 80 }}
      borderColor={{ from: 'color' }}
      gridLabelOffset={20}
      dotSize={7}
      dotColor={{ from: 'color', modifiers: [] }}
      dotBorderWidth={2}
      colors={
        step === 0
          ? ['rgba(138, 50, 224, 1)']
          : step === 1
            ? ['rgba(50, 94, 224, 1)']
            : ['rgba(138, 50, 224, 1)', 'rgba(50, 94, 224, 1)']
      }
      gridLevels={10}
    />
  );
};
