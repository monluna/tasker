import CalendarBar from './CalendarBar';
import { GradientButton } from '../../components/UI';

import {
  StyleTaskPage,
  StyleTask_block,
  StyleBlock_task,
  Style_task,
  StyleSection_button,
  StyleButtons
} from './style';

export function TasksPage() {
  const time = [...Array(24).keys()].map(
    (hr) => `${hr < 10 ? '0' + hr : hr}:00`
  );

  return (
    <StyleTaskPage>
      <CalendarBar />
      <StyleTask_block>
        <StyleBlock_task>
          {time.map((hr) => (
            <Style_task>{hr}</Style_task>
          ))}
        </StyleBlock_task>
        <StyleSection_button>
          <StyleButtons>
            <GradientButton>Выполненные</GradientButton>
            <GradientButton>Отложенные</GradientButton>
          </StyleButtons>
          <StyleButtons>
            <GradientButton>Вчера</GradientButton>
            <GradientButton>Завтра</GradientButton>
          </StyleButtons>
        </StyleSection_button>
      </StyleTask_block>
    </StyleTaskPage>
  );
}

export default TasksPage;
