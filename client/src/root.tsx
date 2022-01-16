import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle
} from 'styled-components';
import {
  CssBaseline,
  createTheme,
  ThemeProvider as MaterialThemeProvider
} from '@material-ui/core';

import App from './App';
import { AuthProvider } from './contexts/auth';

const theme = createTheme({
  overrides: {
    MuiListItem: {
      root: {
        '&$selected': {
          backgroundColor: 'white'
        }
      }
    }
  }
});

function Root() {
  return (
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <GlobalStyle />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}`;

export default Root;
