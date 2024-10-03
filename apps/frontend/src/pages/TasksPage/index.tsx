import { CalendarBar } from './CalendarBar';

import {
  StyleTask,
  StyleTask_block,
  StyleBlock_task,
  Style_task,
} from './style';

export function TasksPage() {
  const time = [...Array(24).keys()].map(
    (hr) => `${hr < 10 ? '0' + hr : hr}:00`
  );

  return (
    <StyleTask>
      <CalendarBar />
      <StyleTask_block>
        <StyleBlock_task>
          {time.map((hr) => (
            <Style_task>{hr}</Style_task>
          ))}
        </StyleBlock_task>
        <div>
          
        </div>
      </StyleTask_block>
    </StyleTask>
  );
}

export default TasksPage;
