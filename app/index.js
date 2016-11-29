import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configure } from 'redux-auth';
import configureStore from './stores/configureStore';
import RTRouter from './components/RTRouter';

import './index.css';
import './styles/global.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

if (typeof document !== 'undefined') {
  store.dispatch(configure({
    apiUrl: 'https://flea.fubotech.com.tw/',
  }, {
    clientOnly: true,
    cleanSession: false,
  })).then(() => {
    const { getState } = store;
    render(
      <Provider store={store} key="provider">
        <RTRouter history={history} getState={getState} />
      </Provider>,
      document.getElementById('app')
    );
  });
}

export default (locals, callback) => {
  callback(null,
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Flea Market</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="bundle.js"></script>
      </body>
    </html>`
  );
};