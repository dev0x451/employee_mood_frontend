import {ReactElement, useState, forwardRef, Ref, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import { isSameDay } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.scss';
import ru from 'date-fns/locale/ru';
import { registerLocale } from 'react-datepicker';

registerLocale('ru', ru);

interface Props {
  selectedDate: Date | null;
  handleDateChange: (date: Date | null) => void;
}

export const MeetingDatePicker = ({ selectedDate, handleDateChange }: Props): ReactElement => {
  const [isCalendarOpen, setCalendarOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(isCalendarOpen);
  }, [])

  const dayClassName = (date: Date) => {
    if (selectedDate && isSameDay(selectedDate, date)) {
      return 'selected-date';
    }
    return '';
  };

  const CustomInput = forwardRef(({ selectedDate, onClick }: any, ref: Ref<HTMLInputElement>) => (
    <div className="custom-input">
      <input
        ref={ref}
        type="text"
        value={selectedDate ? selectedDate.toLocaleDateString('ru') : ''}
        placeholder="__.__.____"
        readOnly
        onClick={onClick}
      />
      {!selectedDate && <div className="custom-icon" onClick={onClick}></div>}
    </div>
  ));

  const CustomHeader = ({ date, decreaseMonth, increaseMonth }: any) => (
    <div className="custom-header">
      <div className="prev-month" onClick={decreaseMonth}></div>
      <div className="current-month-year">
        {date.toLocaleString('ru', {
          month: 'long',
          year: 'numeric',
        })}
      </div>
      <div className="next-month" onClick={increaseMonth}></div>
    </div>
  );

  return (
    <DatePicker
      placeholderText="__.__.____"
      dateFormat="dd.MM.yyyy"
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      todayButton={null}
      locale="ru"
      selected={selectedDate}
      onChange={handleDateChange}
      onFocus={() => setCalendarOpen(true)}
      onBlur={() => setCalendarOpen(false)}
      customInput={<CustomInput selectedDate={selectedDate} onClick={() => setCalendarOpen(true)} />}
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
        <CustomHeader
          date={date}
          decreaseMonth={decreaseMonth}
          increaseMonth={increaseMonth}
        />
      )}
      dayClassName={dayClassName}
      calendarClassName="custom-datepicker"
    />
  );
};

