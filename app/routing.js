import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  createMemoryHistory,
  browserHistory,
} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configure } from 'redux-auth';

import configureStore from './stores/configureStore';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import './index.css';

class AuthRoute extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'AuthRoute';
    this.requireAuth = this.requireAuth.bind(this);
  }
  requireAuth(nextState, replace, next) {
    const { getState } = this.props;
    if (!getState().auth.getIn(['user', 'isSignedIn'])) {
      replace('/login');
    }
    next();
  }
  render() {
    const { ...props } = this.props;
    return <Route onEnter={this.requireAuth} {...props} />;
  }
}

AuthRoute.propTypes = {
  getState: PropTypes.func.isRequired,
};

// a single function can be used for both client and server-side rendering.
// when run from the server, this function will need to know the cookies and
// url of the current request. also be sure to set `isServer` to true.
export function initialize({ apiUrl, cookies, isServer, currentLocation, userAgent } = {}) {
  const store = configureStore();
  let history = (isServer)
    ? createMemoryHistory(currentLocation)
    : browserHistory;

  history = syncHistoryWithStore(history, store);

  const { getState } = store;
  const routes = (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <AuthRoute
          getState={getState}
          path="/goods"
          component={Dashboard}
        />
        <Route path="/goods/:guid" />
        <Route path="*" />
      </Route>
    </Router>
  );

  return store.dispatch(configure(
    { apiUrl },
    { isServer, cookies, currentLocation }
  )).then(({ redirectPath, blank } = {}) => {
    if (userAgent) {
      global.navigator = { userAgent };
    }
    return ({
      blank,
      store,
      redirectPath,
      routes,
      history,
      provider: (
        <Provider store={store} key="provider" children={routes} />
      ),
    });
  });
}