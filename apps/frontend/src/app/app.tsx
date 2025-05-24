import { StyledApp } from './style';
import { GlobalStyles } from '../global';

import Header from '../components/header/Header';

import { ThemeProvider } from 'styled-components';
import { useTheme } from '../theme/useTheme';

import TasksPage from '../pages/TasksPage/index';
import NiceModal from '@ebay/nice-modal-react';
import "./modals/index";

export function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <NiceModal.Provider>
        <GlobalStyles />
        <StyledApp>
          <Header />
          <TasksPage />
        </StyledApp>
      </NiceModal.Provider>
    </ThemeProvider>
  );
}

export default App;
