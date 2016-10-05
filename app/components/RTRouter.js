import React, { PropTypes } from 'react';
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router';
import App from './App';
import LoginContainer from '../containers/LoginContainer';
import MarketContainer from '../containers/MarketContainer';
import GoodDetail from './GoodDetail';
import Upload from './Upload';
import DevTools from '../containers/DevTools';

class RTRouter extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'RTRouter';
    this.requireAuth = this.requireAuth.bind(this);
    const { getState } = this.props;
    const isSignedIn = getState().auth.getIn(['user', 'isSignedIn']);
    this.routes = (
      <Route
        path="/"
        isSignedIn={isSignedIn}
        component={App}
      >
        <IndexRoute
          component={MarketContainer}
        />
        <Route
          onEnter={this.requireAuth}
          path="upload"
          component={Upload}
        />
        <Route path="login" component={LoginContainer} />
        <Route
          path="good/:id"
          component={GoodDetail}
        />
        <Route
          onEnter={this.requireAuth}
          path=":filter"
          component={MarketContainer}
        />
      </Route>
    );
  }
  requireAuth(nextState, replace, next) {
    const { getState } = this.props;
    if (!getState().auth.getIn(['user', 'isSignedIn'])) {
      replace({
        pathname: '/login',
        query: {
          next: getState().routing.locationBeforeTransitions.pathname,
        },
      });
    }
    next();
  }
  render() {
    const { history } = this.props;
    return (
      <div>
        <Router
          history={history}
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
