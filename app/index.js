import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configure } from 'redux-auth';
import configureStore from './stores/configureStore';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import DevTools from './containers/DevTools';
import './index.css';
import './styles/global.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(configure({
  apiUrl: 'http://flea-backend.dev/',
})).then(() => {
  render(
    <Provider store={store}>
      <div>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
            <Route path="login" component={Login} />
          </Route>
        </Router>
        <DevTools />
      </div>
    </Provider>,
    document.getElementById('app')
  );
});