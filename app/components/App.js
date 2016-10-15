import React, { PropTypes } from 'react';
import { AuthGlobals } from 'redux-auth/bootstrap-theme';
import HeaderContainer from '../containers/HeaderContainer';
import TabContainer from '../containers/TabContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    const { children, location } = this.props;
    let tab = null;
    if (!location.pathname.includes('good') && location.pathname !== '/login') {
      tab = (<TabContainer location={location} />);
    }
    return (
      <div>
        <AuthGlobals />
        <HeaderContainer />
        {tab}
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