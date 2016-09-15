import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
  Link,
} from 'react-router';
import { AuthGlobals } from 'redux-auth/bootstrap-theme';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    const { children, location } = this.props;
    const tabNames = [
      {
        link: '/',
        name: 'Market',
      }, {
        link: '/my-goods',
        name: 'My Goods',
      }, {
        link: '/my-bids',
        name: 'My Bids',
      }, {
        link: '/upload',
        name: 'Upload',
      }];
    const tabs = tabNames.map((tab, index) => {
      const selected = tab.link === location.pathname ? 'active' : '';
      return (
        <li styleName={selected} key={index}>
          <Link to={tab.link}>{tab.name}</Link>
        </li>
      );
    }, this);
    return (
      <div>
        <AuthGlobals />
        <Header />
        <header>
          <ul styleName="tab-group">
            {tabs}
          </ul>
        </header>
        <div>{children}</div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default CSSModules(App, styles);