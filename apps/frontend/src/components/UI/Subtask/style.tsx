import { Form, Input, Space, Select, InputNumber } from 'antd';
import styled from 'styled-components';

interface props {
  borderColor?: string;
  width: string;
}

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

export const StyleSpaceSubtask = styled(Space)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  gap: 10px;
  top: auto !important;
  left: auto !important;
  & .ant-space-item:first-child {
    width: 3%;
  }
  .ant-space-item:nth-child(2) {
    width: 70%;
  }
  .ant-space-item:nth-child(3) {
    width: 15%;
  }
  .ant-space-item:nth-child(4) {
    width: 10%;
  }
  .ant-space-item:nth-child(5) {
    width: 2%;
  }
`;

export const StyledSelect = styled(Select)<props>`
  width: ${(props) => props.width};
  .ant-select-selector {
    border: 1px solid ${(props) => props.borderColor || '#bdbdbd'} !important;
    border-radius: 10px !important;
    padding: 5px 10px !important;
    height: 28px !important;
    display: flex;
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
    height: auto !important;
  }

  &.ant-select-single {
    height: auto !important;
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
