import React from "react";
import ReactDOM from "react-dom";

import App from '@src/app';

import { createBrowserHistory as createHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';

// stiore
import store from '@src/store';

// middleware
import axios from '@src/middleware/axios';

// providers
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

// style
import darkTheme from '@src/asset/theme/darkTheme';
import '@resources/asset/scss/style.scss';

ReactDOM.render(
  <Router history={createHistory()}>
    <Provider store = { store }>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById('root')
)
