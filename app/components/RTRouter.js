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
import LoginContainer from '../containers/LoginContainer';
import Market from './Market';
import GoodDetail from './GoodDetail';
import UploadContainer from '../containers/UploadContainer';
import GoodsQueries from '../queries/GoodsQueries';
import GoodQueries from '../queries/GoodQueries';
import DevTools from '../containers/DevTools';

class RTRouter extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'RTRouter';
    this.requireAuth = this.requireAuth.bind(this);
    const { getState } = this.props;
    const user = getState().auth.getIn(['user', 'attributes']) || null;
    const isSignedIn = getState().auth.getIn(['user', 'isSignedIn']);
    this.routes = (
      <Route
        path="/"
        isSignedIn={isSignedIn}
        component={App}
      >
        <IndexRoute
          user={user}
          component={Market}
          queries={GoodsQueries}
        />
        <Route
          onEnter={this.requireAuth}
          path="upload"
          component={UploadContainer}
        />
        <Route path="login" component={LoginContainer} />
        <Route
          path="good/:id"
          component={GoodDetail}
          queries={GoodQueries}
        />
        <Route
          onEnter={this.requireAuth}
          path=":filter"
          user={user}
          component={Market}
          queries={GoodsQueries}
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
          render={applyRouterMiddleware(useRelay)}
          environment={Relay.Store}
        >
          {this.routes}
        </Router>
        {!window.devToolsExtension ? <DevTools /> : null}
      </div>
    );
  }
}

RTRouter.propTypes = {
  history: PropTypes.object.isRequired,
  getState: PropTypes.func.isRequired,
};

export default RTRouter;
