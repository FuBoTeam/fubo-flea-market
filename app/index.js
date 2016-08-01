import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  // IndexRoute,
  browserHistory,
} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './stores/configureStore';
import App from './components/App';
import DevTools from './containers/DevTools';
import './index.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);