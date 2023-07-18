/* eslint-disable no-use-before-define */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { mainTheme } from './styles/theme';

import App from './App';
import { UserProviders } from './providers/UserContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <UserProviders>
          <App />
        </UserProviders>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
