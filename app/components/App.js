import React, { PropTypes } from 'react';
import Header from './header/header';
import { Button } from 'belle';
import {
  Link,
  browserHistory,
} from 'react-router';
import { AuthGlobals } from 'redux-auth/bootstrap-theme';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <AuthGlobals />
        <Header />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;