import { StyledApp } from './style';
import {GlobalStyles} from '../global';

import Header from '../components/header/Header';

import { ThemeProvider } from 'styled-components';
import { useTheme } from '../theme/useTheme';

import TasksPage from '../pages/TasksPage/index';

export function App() {
  const {theme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp>
        <Header />
        <TasksPage />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
