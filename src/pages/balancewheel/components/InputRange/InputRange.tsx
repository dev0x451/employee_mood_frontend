import {ChangeEvent, CSSProperties, ReactElement} from 'react';
import styles from "./inputrange.module.scss";

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: number;
  color: string;
}

export const InputRange = ({handleChange, value, color}: Props): ReactElement => {

  const valueStyle: CSSProperties = {
    position: 'absolute',
    top: '-15px',
    left: `${(value / 10) * 120}px`,
    transform: 'translateX(-50%)',
    fontSize: '14px',
    fontFamily: 'Roboto',
    lineHeight: '18px',
    color: '#99A2AD',
  };

  return (
    <div>
      <div className={styles.input}>
        <input value={value} className={color === 'purple' ? styles.slider : `${styles.slider} ${styles.sliderBlue}`} onChange={(e) => handleChange(e)} type="range" min="1" max="10" step="1"/>
        <div style={valueStyle}>{value}</div>
      </div>
    </div>
  );
};
