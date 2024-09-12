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
    /* box-shadow: 0 7px 7px -5px rgb(0, 0, 0, 0.5),
      0 14px 7px -7px rgb(106, 130, 251, 0.3),
      0 21px 10px -10px rgb(252, 92, 125, 0.1); */
    transform: scale(105%);
    color: #fff;

  }
`;
