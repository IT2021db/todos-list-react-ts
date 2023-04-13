import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import { Provider } from 'react-redux';
import { GlobalStyle } from "./GlobalStyle";
import App from './App';
import { theme } from "./theme";
import store from './store';




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



