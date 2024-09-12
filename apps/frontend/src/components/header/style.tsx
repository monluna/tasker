import styled, { keyframes } from 'styled-components';
import { ITheme } from '../../theme/useTheme';

export const StyleHeader = styled.header`
  font-family: 'Playfair Display';
  font-weight: 400;
  font-size: 1rem;

  display: flex;
  justify-content: space-between;
  padding: 10px 32px;
`;

export const StyleHeader__logo = styled.a<{ theme: ITheme }>`
  font-family: 'Playfair Display';
  font-weight: 700;
  font-size: 2rem;
  background: linear-gradient(
    to right,
    #fc5c7d 0%,
    #6a82fb 30%,
    ${({ theme }) => theme.colors.text} 50%,
    ${({ theme }) => theme.colors.text} 100%
  );
  background-clip: text;
  /* -webkit-background-clip: text; */
  -webkit-text-fill-color: transparent;
  background-size: 300% 100%;
  background-position: 100%;
  transition: background-position 275ms ease-out;
  /* text-decoration: none; // text decorations are clipped in WebKit browsers */
  &:hover {
    background-position: 0 100%;
  }
`;

export const StyleHeader__logo_div = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
`;

export const StyleHeader__ul = styled.ul`
  display: flex;
  gap: 40px;
  padding: 10px;
`;

export const StyleHeader__img = styled.img`
  width: 1.5rem;
  filter: ${({ theme }) => theme.colors.svg_color};
  transition: filter 275ms ease-out;

  &:hover {
    filter: none;
  }
`;

export const StyleHeader__div = styled.div`
  display: flex;
  gap: 20px;
`;
