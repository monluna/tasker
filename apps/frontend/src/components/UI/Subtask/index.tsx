import { Draggable } from '@hello-pangea/dnd';
import DragHandleIcon from '../../../assets/icons/dragHandle.svg';

import {
  StyledSelect,
  StyledOption,
  StyleInput,
  StyleError,
  StyleSpaceSubtask,
  StyleFormItem,
  StyledInputNumber,
} from './style';
import { MinusCircleOutlined } from '@ant-design/icons';
import React from 'react';

interface Props {
  name: number;
  subtaskId: number;
  remove: (index: number | number[]) => void;
}

const Subtask = React.memo(
  ({ name, remove, subtaskId, ...restFields }: Props) => {
    return (
      <Draggable draggableId={subtaskId.toString()} index={name}>
        {(provided) => {
          return (
            <StyleSpaceSubtask
              align="baseline"
              {...provided.draggableProps}
              ref={provided.innerRef}
              {...provided.dragHandleProps}
            >
              <StyleFormItem>
                <img src={DragHandleIcon} alt="Drag" />
              </StyleFormItem>
              <StyleError
                {...restFields}
                name={[name, 'nameSubtask']}
                rules={[
                  {
                    required: true,
                    message: 'Введите название подзадачи!',
                    whitespace: true,
                  },
                ]}
              >
                <StyleInput size="small" width="100%" placeholder="Подзадача" />
              </StyleError>
              <StyleFormItem>
                <StyledInputNumber min={0} defaultValue="15" />
              </StyleFormItem>
              <StyleFormItem>
                <StyledSelect defaultValue="мин" width="100%">
                  <StyledOption value="minute">мин</StyledOption>
                  <StyledOption value="hour">ч</StyledOption>
                  <StyledOption value="day">д</StyledOption>
                  <StyledOption value="week">нед</StyledOption>
                  <StyledOption value="month">мес</StyledOption>
                  <StyledOption value="year">г</StyledOption>
                </StyledSelect>
              </StyleFormItem>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </StyleSpaceSubtask>
          );
        }}
      </Draggable>
    );
  }
);

export { Subtask };
