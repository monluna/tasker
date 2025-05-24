import styled from 'styled-components';

interface Props {
  background: string;
  height: string;
}


export const StyleTask = styled.div<Props>`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-width: 150px;
  max-width: 300px;
  height: ${({ height }) => height};
  background-color: ${({ background }) => background};
  box-shadow: 0 0 0 1px inset ${({ theme }) => theme.colors.text};

  transition: all 275ms ease-out;
  &:hover {
    transform: scale(105%);
  }

  &:hover > div {
    opacity: 1;
  }
`;

export const StyleInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

export const StyleInputTask = styled.input`
  display: none;

  & + label {
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
  }

  & + label:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 50%;
  }

  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: #d5d5d5;
  }

  &:checked + label::before {
    border-color: ${({ theme }) => theme.colors.text};
    filter: ${({ theme }) => theme.colors.text};
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="%23${({ theme }) => theme.colors.text.slice(1)}"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>');
    background-size: contain;
  }
`;

export const StyleButtonTask = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyleTitleTask = styled.h2`
  font-size: 1rem;
  padding: 10px 5px;
`;

export const StyleSectionIcon = styled.div`
  opacity: 0;
  transition: opacity 0.25s ease-out;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  padding: 5px 10px;
`;

export const StyleIcon = styled.img`
  height: 1.5rem;
  filter: ${({ theme }) =>
    theme.name === 'light' ? 'brightness(100%)' : theme.colors.svg_color};
  transition: all 275ms ease-out;
  &:hover {
    transform: scale(110%);
  }
`;
