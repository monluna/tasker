import { capitalizeFirstLetter } from '../../../helpers';
import { useCalendar } from '../../../hooks/useCalendar';
import { StyleDay_text, StyleDay_titleDay, StyleDay_title } from './style';

export default function TextDayTask() {
  const calendar = useCalendar();
  const today = calendar.activeDay;
  const day = today.getDate();
  const month = new Intl.DateTimeFormat('ru-RU', {
    month: 'long',
  }).format(today);
  const year = today.getFullYear();
  const weekday = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(
    today
  );

  return (
    <StyleDay_text>
      <StyleDay_titleDay>{day}</StyleDay_titleDay>
      <StyleDay_title>
        {capitalizeFirstLetter(weekday)}, {capitalizeFirstLetter(month)} {year}
      </StyleDay_title>
    </StyleDay_text>
  );
}
