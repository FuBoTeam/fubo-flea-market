import React, { PropTypes } from 'react';
import {
  Router,
  Route,
  IndexRoute,
  applyRouterMiddleware,
} from 'react-router';
import Relay from 'react-relay';
import useRelay from 'react-router-relay';
import App from './App';
import Login from './Login';
import Logout from './Logout';
import Market from './Market';
import Upload from './Upload';
import GoodsQueries from '../queries/GoodsQueries';
import DevTools from '../containers/DevTools';

class RTRouter extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'RTRouter';
    this.requireAuth = this.requireAuth.bind(this);
    this.routes = (
      <Route
        path="/"
        component={App}
      >
        <IndexRoute
          component={Market}
          queries={GoodsQueries}
        />
        <Route
          path="my-selling"
          component={Market}
          queries={GoodsQueries}
        />
        <Route
          path="my-bids"
          component={Market}
          queries={GoodsQueries}
        />
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
        <Router
          history={history}
          render={applyRouterMiddleware(useRelay)}
          environment={Relay.Store}
        >
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
