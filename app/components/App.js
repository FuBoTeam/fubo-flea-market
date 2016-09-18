import React, { PropTypes } from 'react';
import Header from './Header';
import { Button } from 'belle';
import {
  Link,
  browserHistory,
} from 'react-router';
import { AuthGlobals } from 'redux-auth/default-theme';

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
        <header>
          Links:
          {' '}
          <Link to="/">Home</Link>
          {' '}
          <Link to="/about">About</Link>
          {' '}
          <Link to="/login">Login/Register</Link>
        </header>
        <div>
          <Button primary onClick={() => { return browserHistory.push('/about'); }}>About us!</Button>
        </div>
        <div style={{ marginTop: '1.5em' }}>{children}</div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;