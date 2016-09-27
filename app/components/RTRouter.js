import React, { PropTypes } from 'react';
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router';
import App from './App';
import Login from './Login';
import Logout from './Logout';
import Market from './Market';
import Upload from './Upload';
import DevTools from '../containers/DevTools';

class RTRouter extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'RTRouter';
    this.requireAuth = this.requireAuth.bind(this);
    this.routes = (
      <Route path="/" component={App}>
        <IndexRoute component={Market} />
        <Route path="my-selling" component={Market} />
        <Route path="my-bids" component={Market} />
        <Route path="upload" component={Upload} />
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
