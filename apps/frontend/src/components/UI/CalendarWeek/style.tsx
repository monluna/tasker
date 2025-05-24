import styled from 'styled-components';

export interface Props {
  isToday: boolean;
  isActiveDay: boolean;
}

export interface Props_button {
  isOpen?: boolean;
}

export const StyleCalendarWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 5px;
  place-items: center;
`;

export const StyleCalendar_day = styled.button<Props>`
  width: 120%;
  height: 120%;
  border-radius: 5px;
  ${({ isToday }) => isToday && 'color: #fc5c7d;'}
  ${({ isActiveDay }) => isActiveDay && 'box-shadow: 0 0 2px 2px rgb(252, 92, 125);'}

  &:hover {
    box-shadow: 0 0 2px 1px ${({ theme }) => theme.colors.text} inset;
  }
`;

export const StyleCalendar_btn = styled.button`
  grid-row: span 2;
`;

export const StyleCalendar__img = styled.img<Props_button>`
  width: 1.5rem;
  filter: ${({ theme }) => theme.colors.svg_color};
  transition: filter 275ms ease-out, transform 0.2s ease;

  transform: rotate(${(props) => (props.isOpen ? '180deg' : '0deg')});

  &:hover {
    filter: none;
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
  grid-row: span 2;
`;
