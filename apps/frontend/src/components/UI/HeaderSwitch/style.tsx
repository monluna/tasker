import styled from 'styled-components';
import { ITheme } from '../../../theme/useTheme';

export const StyleHeader_switch = styled.button<{ theme: ITheme }>`
  width: 1.5rem;
  /* height: 1.5rem; */
  /* svg:hover {
    fill: url('Gradient2');
  } */

  #center,
  #mask-rays,
  #mask-center {
    transform-origin: center;
    transition: transform 250ms ease-out;
  }

  #center {
    fill: ${(props) => props.theme.colors.switch};
    &:hover {
      fill: url(#Gradient2);
    }
    transform: ${(props) =>
      props.theme.name === 'light'
        ? 'rotate(-35deg)'
        : 'rotate(-35deg) scale(2)'};
  }
  #rays {
    stroke: ${(props) => props.theme.colors.switch};
    &:hover {
      fill: url(#Gradient2);
    }
    stroke-width: 2px;
  }

  #mask-rays {
    transform: ${(props) =>
      props.theme.name === 'light' ? 'none' : 'scale(0.5)'};
  }

  #mask-center {
    transform: ${(props) =>
      props.theme.name === 'light' ? 'none' : 'translateX(-18px)'};
  }
`;
