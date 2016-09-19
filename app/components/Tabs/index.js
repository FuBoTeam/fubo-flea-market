import React, { PropTypes } from 'react';
import {
  Link,
} from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Tabs';
    this.tabNames = [
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
  }
  render() {
    const { location } = this.props;
    const tabs = this.tabNames.map((tab, index) => {
      const selected = (tab.link === location.pathname) ? 'active' : '';
      return (
        <li styleName={selected} key={index}>
          <Link to={tab.link}>{tab.name}</Link>
        </li>
      );
    });
    return (
      <ul styleName="tab-group">
        {tabs}
      </ul>
    );
  }
}

Tabs.propTypes = {
  location: PropTypes.object.isRequired,
};

export default CSSModules(Tabs, styles);
