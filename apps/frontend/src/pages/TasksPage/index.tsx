import CalendarBar from './CalendarBar';
import { GradientButton } from '../../components/UI';
import CircleLeftIcon from '../../assets/icons/circleLeft.svg';
import CircleRightIcon from '../../assets/icons/circleRight.svg';
import { useCalendar } from '../../hooks/useCalendar';

import {
  StyleTaskPage,
  StyleTask_block,
  StyleBlock_task,
  Style_task,
  StyleSection_button,
  StyleButtons,
  StyleIcons,
  StyleCalendar__img,
} from './style';

export function TasksPage() {
  const time = [...Array(24).keys()].map(
    (hr) => `${hr < 10 ? '0' + hr : hr}:00`
  );
  const calendar = useCalendar();

  return (
    <StyleTaskPage>
      <CalendarBar />
      <StyleTask_block>
        <StyleBlock_task>
          {time.map((hr) => (
            <Style_task key={`time_${hr}`}>{hr}</Style_task>
          ))}
        </StyleBlock_task>
        <StyleSection_button>
          <StyleButtons>
            <GradientButton>Выполненные</GradientButton>
            <GradientButton>Отложенные</GradientButton>
          </StyleButtons>
          <StyleIcons>
            <button onClick={calendar.getPreviousDay}>
              <StyleCalendar__img src={CircleRightIcon} alt="PreviousDay" />
            </button>
            <button onClick={calendar.getNextDay}>
              <StyleCalendar__img src={CircleLeftIcon} alt="NextDay" />
            </button>
          </StyleIcons>
        </StyleSection_button>
      </StyleTask_block>
    </StyleTaskPage>
  );
}

export default TasksPage;
