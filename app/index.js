import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configure } from 'redux-auth';
import configureStore from './stores/configureStore';
import RTRouter from './components/RTRouter';
import { Adrenaline } from 'adrenaline';
import './index.css';
import './styles/global.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(configure({
  apiUrl: 'http://flea.fubotech.com.tw/',
})).then(() => {
  const { getState } = store;
  render(
    <Adrenaline endpoint="http://flea.fubotech.com.tw/graphql">
      <Provider store={store} key="provider">
        <RTRouter history={history} getState={getState} />
      </Provider>
    </Adrenaline>,
    document.getElementById('app')
  );
});
