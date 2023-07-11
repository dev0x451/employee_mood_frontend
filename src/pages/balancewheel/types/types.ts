import {ChangeEvent} from "react";

export interface ControlProps {
  handleRelationsValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePeopleValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleWorkValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMoneyValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBrightLifeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelfDevelopmentValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSpiritualityValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleHealthValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface Direction {
  name: string;
  num: number;
  description?: string;
}
