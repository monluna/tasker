import styled from 'styled-components';
import { ITheme } from '../../../theme/useTheme';

export const StyleTask_top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const StyleTask_topRight = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  height: 2rem;
`;

export const StyleTask_textButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const StyleTask__img = styled.img<{ theme: ITheme }>`
  width: 1.5rem;
  filter: ${({ theme }) =>
    theme.name === 'light' ? 'brightness(100%)' : theme.colors.svg_color};
`;