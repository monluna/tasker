import styled from 'styled-components';

export interface Props {
  isToday: boolean;
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
  color: ${(props) =>
    props.isToday ? '#fc5c7d' : ''};
`;

export const StyleCalendar_btn = styled.button`
  grid-row: span 2;
`;

export const StyleCalendar__img = styled.img`
  width: 1.5rem;
  filter: ${({ theme }) => theme.colors.svg_color};
  transition: filter 275ms ease-out;
  
  &:hover {
    filter: none;
  }
`;
