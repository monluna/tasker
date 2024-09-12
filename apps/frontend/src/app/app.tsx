import { StyledApp } from './style';
import {GlobalStyles} from '../global';

import Header from '../components/header/Header';

import { ThemeProvider } from 'styled-components';
import { useTheme } from '../theme/useTheme';

export function App() {
  const {theme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp>
        <Header />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
