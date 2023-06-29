import styles from './addmeetingform.module.scss';
import {MeetingDatePicker} from "@/pages/profile/components/MeetingDatePicker/MeetingDatePicker";
import {CloseButton} from "@/shared/ui/CloseButton/CloseButton";
import React, {ReactElement, useState} from "react";
import {MoodDropdown} from "@/pages/profile/components/MoodDropdown/MoodDropdown";
import {getMentalStates} from "@/shared/api/Api";
import {useRequest} from "@/shared/hooks/useRequest";

interface Props {
  closePopup: () => void;
}

export const AddMeetingForm = ({closePopup}: Props): ReactElement => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [value, setValue] = React.useState<string>();
  const [level, setLevel] = React.useState<number>();
  const [moodStates] = useRequest(() => getMentalStates());

  const setDropDownValue = (val: string, lev: number) => {
    setValue(val);
    setLevel(lev);
  }

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className={styles.form}>
      <CloseButton handleClick={closePopup} />
      <h2 className={styles.formTitle}>Оцените состояние сотрудника</h2>
      <div className={styles.inputArea}>
        <div className={styles.inputItem}>
          <label className={styles.formLabel}>Дата встречи</label>
          <MeetingDatePicker selectedDate={selectedDate} handleDateChange={handleDateChange}/>
        </div>
        <div className={styles.inputItem}>
          <p className={styles.formLabel}>Оценка состояния</p>
          <MoodDropdown data={moodStates} setDropDownValue={setDropDownValue} value={value} level={level} />
        </div>
      </div>
    </div>
  );
};
