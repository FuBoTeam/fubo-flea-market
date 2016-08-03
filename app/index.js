import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './stores/configureStore';
import App from './components/App';
import DevTools from './containers/DevTools';
import './index.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);