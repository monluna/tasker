import styled from 'styled-components';

export interface Props_col {
  colStart: number;
}

export interface Props_today {
  isToday: boolean;
  isMonth: boolean;
  isActiveDay: boolean;
}

export const StyleCalendar = styled.div`
  width: 200px;
  position: absolute;
  margin-top: 15px;
  left: 50%;
  transform: translate(-50%);
  padding: 4px;
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.body};
  z-index:1;
`;

export const StyleCalendarMonth = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyleCalendar__img = styled.img`
  width: 1.5rem;
  filter: ${({ theme }) => theme.colors.svg_color};
  transition: filter 275ms ease-out;

  &:hover {
    filter: none;
  }
`;

export const StyleCalendar_line = styled.hr`
  margin: 5px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.text};
`;
export const StyleCalendar_weekday = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 5px;
  place-items: center;
  margin-top: 5px;
`;

export const StyleCalendar_days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 5px;
  place-items: center;
  margin-top: 5px;
`;

export const StyleCalendar_day = styled.div<Props_col>`
  grid-column-start: ${({ colStart }) => (colStart != 0 ? colStart : '7')};
`;

export const StyleDay = styled.button<Props_today>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10px;
  width: 10px;
  padding: 10px;
  border-radius: 5px;
  ${({ isToday }) => isToday && 'color: #fc5c7d;'}
  ${({ isMonth }) => !isMonth && 'opacity: 60%;'}
  ${({ isActiveDay }) => isActiveDay && 'box-shadow: 0 0 2px 2px rgb(252, 92, 125);'}

  &:hover {
    box-shadow: 0 0 2px 1px ${({ theme }) => theme.colors.text} inset;
  }
`;
