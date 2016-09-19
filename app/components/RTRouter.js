import React, { PropTypes } from 'react';
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Login from './Login';
import Logout from './Logout';
import DevTools from '../containers/DevTools';

class RTRouter extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'RTRouter';
    this.requireAuth = this.requireAuth.bind(this);
    this.routes = (
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="login" component={Login} />
        <Route
          onEnter={this.requireAuth}
          path="logout"
          component={Logout}
        />
      </Route>
    );
  }
  requireAuth(nextState, replace, next) {
    const { getState } = this.props;
    if (!getState().auth.getIn(['user', 'isSignedIn'])) {
      replace('/login');
    }
    next();
  }
  render() {
    const { history } = this.props;
    return (
      <div>
        <Router history={history}>
          {this.routes}
        </Router>
        <DevTools />
      </div>
    );
  }
}

RTRouter.propTypes = {
  history: PropTypes.object.isRequired,
  getState: PropTypes.func.isRequired,
};

export default RTRouter;
