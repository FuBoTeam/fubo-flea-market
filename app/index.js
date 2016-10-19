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

store.dispatch(configure({
  apiUrl: 'http://flea.fubotech.com.tw/',
}, {
  currentLocation: window.location.href,
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
