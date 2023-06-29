import styles from './addmeetingform.module.scss';
import {MeetingDatePicker} from "@/pages/profile/components/MeetingDatePicker/MeetingDatePicker";
import {CloseButton} from "@/shared/ui/CloseButton/CloseButton";
import {ChangeEvent, ReactElement, useEffect, useRef, useState} from "react";
import {MoodDropdown} from "@/pages/profile/components/MoodDropdown/MoodDropdown";
import {getMentalStates} from "@/shared/api/Api";
import {useRequest} from "@/shared/hooks/useRequest";
import {ErrorMessage} from "@/shared/ui/ErrorMessage/ErrorMessage";
import {Textarea} from "@/pages/profile/components/Textarea/Textarea";
import {ButtonsList} from "@/pages/profile/components/ButtonsList/ButtonsList";
import {MeetingInfo} from "@/types";
import {useEscapeKey} from "@/shared/hooks/useEscapeKey";
import {useOutsideClick} from "@/shared/hooks/useOutsideClick";

interface Props {
  closePopup: () => void;
  userId: string | undefined;
  handleAddMeetingInfo: ({userId, formattedDate, comment, level}: MeetingInfo) => void;
  updateMeetingsList: () => void;
}

export const AddMeetingForm = ({closePopup, userId, handleAddMeetingInfo, updateMeetingsList }: Props): ReactElement => {
  const ref = useRef<null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [level, setLevel] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [commentError, setCommentError] = useState<string>('');
  const [moodStates] = useRequest(() => getMentalStates());
  const [disabledButton, setDisabledButton] = useState<boolean>(true);

  useEffect(() => {
    if(value && selectedDate && comment && !commentError) {
      setDisabledButton(false);
    }
  }, [value, comment, commentError, selectedDate]);

  useEffect(() => {
    formatDate();
  }, [selectedDate])

  const setDropDownValue = (val: string, lev: number) => {
    setValue(val);
    setLevel(lev);
  }

  const resetForm = () => {
    setValue("");
    setLevel(0);
    setComment("");
    setSelectedDate(null);
    setDisabledButton(true);
  }

  const closeAndResetForm = () => {
    closePopup();
    resetForm();
  }

  useEscapeKey(closeAndResetForm);
  useOutsideClick(closeAndResetForm, ref);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleComment = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const target = e.target as HTMLTextAreaElement;
    setComment(target.value);
    if (target.value.length < 2) {
      setCommentError("Минимальное количество символов: 2");
      setDisabledButton(true);
    } else if (target.value.length > 256) {
      setCommentError("Максимальное количество символов: 256");
      setDisabledButton(true);
    } else {
      setCommentError("");
    }
  };

  const formatDate = () => {
    if(selectedDate) {
      const dateObj = new Date(selectedDate);
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const day = String(dateObj.getDate()).padStart(2, '0');
      setFormattedDate(`${year}-${month}-${day}`);
    }
  }

  const addNewMeeting = () => {
    if(userId && comment && formattedDate && level) {
      handleAddMeetingInfo({userId, comment, formattedDate, level});
      closeAndResetForm();
      updateMeetingsList();
    }
  }

  return (
    <div className={styles.form} ref={ref}>
      <CloseButton handleClick={closeAndResetForm} />
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
      <div className={styles.textareaItem}>
        <label className={styles.formLabel}>Добавьте комментарии</label>
        <Textarea comment={comment} handleComment={(e: ChangeEvent<HTMLTextAreaElement>) => handleComment(e)}/>
        {commentError && (
          <div>
            <ErrorMessage>{commentError}</ErrorMessage>
          </div>
        )}
      </div>
      <ButtonsList disabled={disabledButton} addNewMeeting={addNewMeeting} closeAndResetForm={closeAndResetForm}/>
    </div>
  );
};
