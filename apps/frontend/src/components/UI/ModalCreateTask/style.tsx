import { Form, Input, Select, InputNumber } from 'antd';
import styled from 'styled-components';

interface props {
  bordercolor?: string;
  width: string;
}

export const StyleBackgroundModal = styled.div`
  &:before {
    content: '';
    background: #000;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    z-index: 10;
  }
`;

export const StyleModalCreate = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 90%;
  background-color: #fffcfc;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  opacity: 1;
  border-radius: 5px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d5d5d5;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.text};
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(125, 116, 109, 0.2);
    border-radius: 10px;
  }
`;

export const StyleBlockTitle = styled.div`
  padding: 24px 24px 16px;
`;

export const StyleModalCreate_title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const StyleModalCreate_input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 24px;
`;

export const StyleLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  cursor: default;
`;

export const StyleFormItem = styled(Form.Item)`
  margin: 0;
  padding: 0;
`;

export const StyleError = styled(StyleFormItem)`
  margin: 0;
  padding: 0;
  .ant-form-item-explain-error {
    color: #fc5c7d;
  }
  .ant-input-status-error:not(.ant-input-disabled) {
    border-color: #fc5c7d;
  }
`;

export const StyleInput = styled(Input)<props>`
  width: ${(props) => props.width};
  border: 1px solid #bdbdbd;
  font-size: 1rem;
  border-radius: 10px;

  &:focus {
    border-color: #6a82fb;
  }
  &:hover {
    border-color: #6a82fb;
  }
`;

export const StyleTextarea = styled(Input.TextArea)`
  padding: 10px 10px;
  border: 1px solid #bdbdbd;
  font-size: 1rem;
  resize: none;

  &:focus {
    border-color: #6a82fb;
  }
  &:hover {
    border-color: #6a82fb;
  }

  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d5d5d5;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.text};
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(125, 116, 109, 0.2);
    border-radius: 10px;
  }
`;

export const StyleAddSubtask = styled.img`
  width: 1.5rem;
  filter: ${({ theme }) =>
    theme.name === 'light' ? 'brightness(100%)' : theme.colors.svg_color};
`;

export const StyleAddSubtaskBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledSelect = styled(Select)<props>`
  width: ${(props) => props.width};
  .ant-select-selector {
    border: 1px solid ${(props) => props.bordercolor || '#bdbdbd'} !important;
    border-radius: 10px !important;
    padding: 5px 10px !important;
    height: 28px !important;
    display: flex;
    align-items: center;
    &:hover {
      border-color: #6a82fb !important;
    }
    &:focus {
      border-color: #6a82fb !important;
    }
  }
  .ant-select-arrow {
    color: #bdbdbd;
  }

  .ant-select-selection-search-input {
    height: auto !important; /* Сбрасываем высоту на auto */
  }

  &.ant-select-single {
    height: auto !important; /* Убираем фиксированную высоту */
  }
`;

export const StyledOption = styled(Select.Option)``;

export const StyledInputNumber = styled(InputNumber)`
  width: 100%;
  border: 1px solid #bdbdbd;
  font-size: 1rem;
  border-radius: 10px !important;
  .ant-input-number-input {
    line-height: 0;
    border-radius: 10px !important;
  }
  &:focus {
    border-color: #6a82fb;
  }
  &:hover {
    border-color: #6a82fb;
  }
`;

export const StyledTimeDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
