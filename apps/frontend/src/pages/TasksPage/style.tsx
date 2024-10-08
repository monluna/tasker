import styled from 'styled-components';

export const StyleTaskPage = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const StyleTask_block = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  overflow: auto;
  column-gap: 10px;
`;

export const StyleBlock_task = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 0 40px 0;
  padding: 0 10px;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(213, 213, 213);
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.text};
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(125, 116, 109, 0.2);
    border-radius: 10px;
  }
  `;

export const Style_task = styled.div`
  font-size: 1.5rem;
  width: 20%;
  padding: 12px;
  box-shadow: 0 0 0 1px inset ${({ theme }) => theme.colors.text};
  background-color: rgb(125, 116, 109, 0.2);
`;

export const StyleSection_button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
`;

export const StyleButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  padding: 20px 0;
`;