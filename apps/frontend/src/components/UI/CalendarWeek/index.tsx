import { useCalendar } from '../../../hooks/useCalendar';
import {
  StyleCalendarWeek,
  StyleCalendar_day,
  StyleCalendar_btn,
  StyleCalendar__img,
} from './style';

import LeftIcon from '../../../assets/icons/left.svg';
import RightIcon from '../../../assets/icons/right.svg';
import DownIcon from '../../../assets/icons/down.svg';

export default function CalendarWeek() {
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const calendar = useCalendar();
  const calendarWeer = calendar.week;

  return (
    <StyleCalendarWeek>
      <StyleCalendar_btn onClick={calendar.getPreviousWeek}>
        <StyleCalendar__img src={LeftIcon} alt="Left" />
      </StyleCalendar_btn>
      {days.map((day) => (
        <div key={day}>{day}</div>
      ))}
      <StyleCalendar_btn onClick={calendar.getNextWeek}>
        <StyleCalendar__img src={RightIcon} alt="Right" />
      </StyleCalendar_btn>
      <StyleCalendar_btn>
        <StyleCalendar__img src={DownIcon} alt="Down" />
      </StyleCalendar_btn>

      {calendarWeer.map((weekDay) => (
        <StyleCalendar_day
          key={weekDay.toDateString()}
          isToday={weekDay.toDateString() === calendar.today.toDateString()}
        >
          {weekDay.getDate()}
        </StyleCalendar_day>
      ))}
    </StyleCalendarWeek>
  );
}
