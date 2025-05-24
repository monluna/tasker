import {
  StyleTask_top,
  StyleTask_topRight,
  StyleTask__img,
  StyleTask_textButton,
} from './style';

import { CalendarWeek, GradientButton } from '../../../components/UI';
import { TextDayTask } from '../../../components/UI';
import PlusIcon from '../../../assets/icons/plus.svg';
import { useModal } from '@ebay/nice-modal-react';
import { MODAL } from '../../../app/modals/const';

export default function CalendarBar() {
  const { show } = useModal(MODAL.CREATE_TASK_MODAL);

  return (
    <StyleTask_top>
      <TextDayTask />
      <StyleTask_topRight>
        <CalendarWeek />
        <GradientButton onClick={() => show()}>
          <StyleTask_textButton>
            Добавить
            <StyleTask__img src={PlusIcon} alt="Plus"/>
          </StyleTask_textButton>
        </GradientButton>
      </StyleTask_topRight>
    </StyleTask_top>
  );
}
