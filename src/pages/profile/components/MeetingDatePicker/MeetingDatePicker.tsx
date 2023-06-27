import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
import ru from 'date-fns/locale/ru';
import { registerLocale } from 'react-datepicker';

registerLocale('ru', ru);

export const MeetingDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isCalendarOpen, setCalendarOpen] = useState<boolean>(false);

  console.log(isCalendarOpen);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const dayClassName = (date: Date) => {
    if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
      return 'selected-date';
    }
    return '';
  };

  const CustomInput = ({ selectedDate, onClick }: any) => (
    <div className="custom-input">
      <input
        type="text"
        value={selectedDate ? selectedDate.toLocaleDateString('ru') : ''}
        placeholder="__.__.____"
        readOnly
        onClick={onClick}
      />
      {!selectedDate && <div className="custom-icon" onClick={onClick}></div>}
    </div>
  );

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
      highlightDates={[new Date()]}
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
