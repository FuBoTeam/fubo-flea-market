import React, { PropTypes } from 'react';
import { AuthGlobals } from 'redux-auth/bootstrap-theme';
import Header from './Header';
import Tabs from './Tabs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    const { children, location } = this.props;
    return (
      <div>
        <AuthGlobals />
        <Header />
        <Tabs location={location} />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default App;