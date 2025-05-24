import { useCalendar } from '../../../hooks/useCalendar';
import {
  StyleCalendar,
  StyleCalendarMonth,
  StyleCalendar__img,
  StyleCalendar_line,
  StyleCalendar_weekday,
  StyleCalendar_days,
  StyleCalendar_day,
  StyleDay,
} from './style';

import { isSameMonth} from 'date-fns';

import LeftIcon from '../../../assets/icons/left.svg';
import RightIcon from '../../../assets/icons/right.svg';
import { capitalizeFirstLetter } from '../../../helpers';
import { forwardRef } from 'react';

const CalendarMonth = forwardRef<HTMLDivElement>(({}, ref) => {
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const calendar = useCalendar();
  const calendarDay = calendar.firstDayOfMonth;
  const calendarMonth = new Intl.DateTimeFormat('ru-RU', {
    month: 'long',
  }).format(calendarDay);
  const calendarYear = calendarDay.getFullYear();
  const calendarIntervalDay = calendar.month;

  const onDayClick = (day: Date) => {
    !isSameMonth(day, calendar.firstDayOfMonth)
      ? calendar.firstDayOfMonth < day
        ? calendar.getNextMonth()
        : calendar.getPreviousMonth()
      : null;
    calendar.setActiveDay(day);
    calendar.setActiveWeek(day);
  };

  return (
    <StyleCalendar ref={ref}>
      <StyleCalendarMonth>
        <p>
          {capitalizeFirstLetter(calendarMonth)} {calendarYear}
        </p>
        <div>
          <button onClick={calendar.getPreviousMonth}>
            <StyleCalendar__img src={LeftIcon} alt="Left" />
          </button>
          <button onClick={calendar.getNextMonth}>
            <StyleCalendar__img src={RightIcon} alt="Right" />
          </button>
        </div>
      </StyleCalendarMonth>
      <StyleCalendar_line />
      <StyleCalendar_weekday>
        {days.map((day) => {
          return <div key={day}>{day}</div>;
        })}
      </StyleCalendar_weekday>
      <StyleCalendar_days>
        {calendarIntervalDay.map((day) => (
          <StyleCalendar_day key={day.toDateString()} colStart={day.getDay()}>
            <StyleDay
              isToday={day.toDateString() === calendar.today.toDateString()}
              isMonth={isSameMonth(day, calendar.firstDayOfMonth)}
              isActiveDay={
                day.toDateString() === calendar.activeDay.toDateString()
              }
              onClick={() => onDayClick(day)}
            >
              {day.getDate()}
            </StyleDay>
          </StyleCalendar_day>
        ))}
      </StyleCalendar_days>
    </StyleCalendar>
  );
});

export default CalendarMonth;
