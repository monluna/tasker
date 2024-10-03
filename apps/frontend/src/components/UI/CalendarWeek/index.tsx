import { useCalendar } from '../../../hooks/useCalendar';
import {
  StyleCalendarWeek,
  StyleCalendar_day,
  StyleCalendar_btn,
  StyleCalendar__img,
  ButtonContainer,
} from './style';

import LeftIcon from '../../../assets/icons/left.svg';
import RightIcon from '../../../assets/icons/right.svg';
import DownIcon from '../../../assets/icons/down.svg';
import { useEffect, useRef, useState } from 'react';
import CalendarMonth from '../CalendarMonth';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

export default function CalendarWeek() {
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const calendar = useCalendar();

  const modalRef = useRef<HTMLDivElement>(null!);
  const switchRef = useRef<HTMLButtonElement>(null!);
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
  const onExpand = () => {
    setCalendarOpen((prev) => !prev);
  };

  useOnClickOutside(() => {
    setCalendarOpen(false)
}, modalRef, switchRef);

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
      <ButtonContainer>
        <StyleCalendar_btn onClick={onExpand} ref={switchRef}>
          <StyleCalendar__img src={DownIcon} alt="Down" isOpen={calendarOpen} />
        </StyleCalendar_btn>
        {calendarOpen ? <CalendarMonth ref={modalRef} /> : null}
      </ButtonContainer>

      {calendar.week.map((weekDay) => (
        <StyleCalendar_day
          key={weekDay.toDateString()}
          isToday={weekDay.toDateString() === calendar.today.toDateString()}
          isActiveDay={
            weekDay.toDateString() === calendar.activeDay.toDateString()
          }
          onClick={() => calendar.setActiveDay(weekDay)}
        >
          {weekDay.getDate()}
        </StyleCalendar_day>
      ))}
    </StyleCalendarWeek>
  );
}
