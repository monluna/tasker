import styled from 'styled-components';
import { ITheme } from '../../../theme/useTheme';

export const StyleButton = styled.button<{ theme: ITheme }>`
  background: linear-gradient(${({ theme }) => theme.colors.body}, ${({ theme }) => theme.colors.body}) padding-box,
    linear-gradient(to right, #fc5c7d, #6a82fb) border-box;
  padding: 0 50px;
  border: 2px solid transparent;
  border-radius: 50px;

  transition: all 275ms ease-out;
  transform: scale(100%);

  &:hover {
    background: linear-gradient(to right, #fc5c7d, #6a82fb) border-box;
    transform: scale(105%);
    color: #fff;
  & img {
    filter: brightness(0%) invert(1);
  }
  }
`;
