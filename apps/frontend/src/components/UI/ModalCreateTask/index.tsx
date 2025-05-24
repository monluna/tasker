import { useState } from 'react';
import {
  StyleBackgroundModal,
  StyleModalCreate,
  StyleBlockTitle,
  StyleModalCreate_title,
  StyleModalCreate_input,
  StyleLabel,
  StyleTextarea,
  StyledSelect,
  StyledOption,
  StyleInput,
  StyleFormItem,
  StyleError,
  StyleAddSubtask,
  StyleAddSubtaskBlock,
  StyledTimeDiv,
  StyledInputNumber,
} from './style';
import GradientButton from '../GradientButton';
import { create, useModal } from '@ebay/nice-modal-react';
import { Form, FormListFieldData } from 'antd';
import PlusIcon from '../../../assets/icons/plus.svg';
import { SelectProps } from 'antd';
import { Subtask } from '../Subtask';
import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd';
import { useForm } from 'antd/es/form/Form';

const borderColorByPriority: { [key: string]: string } = {
  low: 'green',
  medium: 'orange',
  high: 'red',
};

const ModalCreateTaskChild = ({ hide }: { hide: () => Promise<unknown> }) => {
  const [priority, setPriority] = useState<string>('');
  const borderColor = borderColorByPriority[priority] || '#bdbdbd';
  const form = useForm();

  if (form) {
    const nameTask = form[0].getFieldValue('nameTask');
    console.log(nameTask);
  }

  const handleChange: SelectProps['onChange'] = (value) => {
    setPriority((value as string) || '');
  };

  const onDragEnd = (
    result: DropResult,
    listItems: FormListFieldData[],
    move: (from: number, to: number) => void
  ) => {
    const { destination, source, draggableId } = result;
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }
    move(source.index, destination.index);
  };

  return (
    <StyleModalCreate>
      <StyleBlockTitle>
        <StyleModalCreate_title>Создание задачи</StyleModalCreate_title>
      </StyleBlockTitle>
      <StyleModalCreate_input>
        <div>
          <StyleLabel htmlFor="nameTask">Наименование задачи*</StyleLabel>
          <StyleError
            name="nameTask"
            rules={[
              {
                required: true,
                message: 'Введите название задачи!',
                whitespace: true,
              },
            ]}
          >
            <StyleInput
              type="text"
              id="nameTask"
              name="nameTask"
              placeholder="Задача"
              size="large"
              width="100%"
            />
          </StyleError>
        </div>
        <div>
          <StyleLabel htmlFor="description">Описание</StyleLabel>
          <StyleFormItem>
            <StyleTextarea
              id="description"
              name="description"
              autoSize={{ minRows: 3, maxRows: 3 }}
            />
          </StyleFormItem>
        </div>
        <div>
          <StyleLabel htmlFor="subitems">Подзадачи</StyleLabel>
          <Form.List name="subitems">
            {(fields, { add, remove, move }) => (
              <>
                <DragDropContext
                  onDragEnd={(result) => onDragEnd(result, fields, move)}
                >
                  <Droppable droppableId="subtasks-dnd">
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {fields.map(({ key, name, ...restFields }) => (
                          <Subtask
                            subtaskId={key}
                            name={name}
                            remove={remove}
                            key={key}
                          />
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
                <StyleFormItem>
                  <StyleAddSubtaskBlock>
                    <GradientButton onClick={() => add()}>
                      <StyleAddSubtask src={PlusIcon} alt="Plus" />
                    </GradientButton>
                  </StyleAddSubtaskBlock>
                </StyleFormItem>
              </>
            )}
          </Form.List>
        </div>

        <div>
          <StyleLabel htmlFor="priority">Приоритет</StyleLabel>
          <StyledSelect
            value={priority || undefined}
            onChange={handleChange}
            bordercolor={borderColor}
            width="70%"
            defaultValue="-"
          >
            <StyledOption value="default">-</StyledOption>
            <StyledOption value="low">Низкий</StyledOption>
            <StyledOption value="medium">Средний</StyledOption>
            <StyledOption value="high">Высокий</StyledOption>
          </StyledSelect>
        </div>
        <div>
          <StyleLabel htmlFor="taskType">Тип задачи</StyleLabel>
          <StyledSelect defaultValue="Главная" width="70%">
            <StyledOption value="main">Главная</StyledOption>
            <StyledOption value="secondary">Второстепенная</StyledOption>
          </StyledSelect>
        </div>
        <div>
          <StyleLabel htmlFor="additionalTasks">
            Возможны второстепенные задачи?
          </StyleLabel>
          <StyledSelect defaultValue="Нет" width="70%">
            <StyledOption value="no">Нет</StyledOption>
            <StyledOption value="yes">Да</StyledOption>
          </StyledSelect>
        </div>
        <div>
          <StyleLabel htmlFor="countAdditionalTasks">
            Количество второстепенных задач
          </StyleLabel>
          <StyledSelect defaultValue="1" width="70%">
            <StyledOption value="one">1</StyledOption>
            <StyledOption value="second">2</StyledOption>
          </StyledSelect>
        </div>
        <div>
          <StyleLabel htmlFor="countAdditionalTasks">
            У задачи есть дата окончания?
          </StyleLabel>
          <StyledSelect defaultValue="нет" width="70%">
            <StyledOption value="one">да</StyledOption>
            <StyledOption value="second">нет</StyledOption>
          </StyledSelect>
        </div>
        <div>
          <StyleLabel htmlFor="countAdditionalTasks">
            Задача повторяющаяся?
          </StyleLabel>
          <StyledSelect defaultValue="нет" width="70%">
            <StyledOption value="one">да</StyledOption>
            <StyledOption value="second">нет</StyledOption>
          </StyledSelect>
        </div>
        <div>
          <StyleLabel htmlFor="countAdditionalTasks">Укажите период</StyleLabel>
          <StyledSelect defaultValue="ежедневно" width="70%">
            <StyledOption value="one">ежедневно</StyledOption>
            <StyledOption value="second">еженедельно</StyledOption>
            <StyledOption value="second">ежемесячно</StyledOption>
            <StyledOption value="second">свой вариант</StyledOption>
          </StyledSelect>
          {/* должно появляться только когда выбран свой вариант */}
          <StyleFormItem label="Каждый">
            <StyledInputNumber min={0} defaultValue="1" />
            <StyledSelect defaultValue="день" width="70%">
              <StyledOption value="one">день</StyledOption>
              <StyledOption value="second">неделю</StyledOption>
              <StyledOption value="second">месяц</StyledOption>
            </StyledSelect>
          </StyleFormItem>
          {/* необходимы дни исключения */}
          {/* в какое время задача выполняется */}
        </div>
        <StyledTimeDiv>
          <StyleLabel htmlFor="countAdditionalTasks">
            Время выполнения задачи в день
          </StyleLabel>
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
        </StyledTimeDiv>
        <StyleLabel htmlFor="countAdditionalTasks">
          Задача накапливаемая?
        </StyleLabel>
      </StyleModalCreate_input>
      <GradientButton onClick={hide}>Отмена</GradientButton>
    </StyleModalCreate>
  );
};

const ModalCreateTask = create(({ id }: { id: string }) => {
  const { visible, hide } = useModal(id);

  if (!visible) {
    return null;
  }
  return (
    <StyleBackgroundModal>
      <Form>
        <ModalCreateTaskChild hide={hide} />
      </Form>
    </StyleBackgroundModal>
  );
});

export default ModalCreateTask;
