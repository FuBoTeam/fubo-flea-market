import React, { PropTypes } from 'react';
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router';
import App from './App';
import LoginContainer from '../containers/LoginContainer';
import MarketContainer from '../containers/MarketContainer';
import GoodDetailContainer from '../containers/GoodDetailContainer';
import UploadContainer from '../containers/UploadContainer';
// import DevTools from '../containers/DevTools';

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
          component={UploadContainer}
        />
        <Route path="login" component={LoginContainer} />
        <Route
          path="good/:id"
          component={GoodDetailContainer}
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
    let pathname = getState().routing.locationBeforeTransitions.pathname;
    const url = ['upload', 'my-selling', 'my-bids'];
    for (let i = 0; i < url.length; i++) {
      if (pathname.includes(url[i])) {
        pathname = `/${url[i]}`;
      }
    }
    if (!getState().auth.getIn(['user', 'isSignedIn'])) {
      if (pathname.includes('blank')) {
        replace({
          pathname: '/login',
        });
      } else {
        replace({
          pathname: '/login',
          query: {
            next: pathname,
          },
        });
      }
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
      </div>
    );
  }
}

RTRouter.propTypes = {
  history: PropTypes.object.isRequired,
  getState: PropTypes.func.isRequired,
};

export default RTRouter;
