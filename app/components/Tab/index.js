import React, { PropTypes } from 'react';
import {
  Link,
} from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Updating from '../Updating';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Tab';
    this.tabNames = [
      {
        link: '/',
        name: 'Market',
      }, {
        link: '/my-selling',
        name: 'My Selling',
      }, {
        link: '/my-bids',
        name: 'My Bids',
      }, {
        link: '/upload',
        name: 'Upload',
      }];
  }
  render() {
    const { location, isUpdating } = this.props;
    const tabs = this.tabNames.map((tab, index) => {
      const selected = (tab.link === location.pathname) ? 'active' : '';
      return (
        <Link to={tab.link} key={index}>
          <li styleName={selected}>{tab.name}</li>
        </Link>
      );
    });
    return (
      <div>
        {(isUpdating) ? (<Updating />) : null}
        <ul styleName="tab-group">
          {tabs}
        </ul>
      </div>
    );
  }
}

Tab.propTypes = {
  location: PropTypes.object.isRequired,
  isUpdating: PropTypes.boolean,
};

export default CSSModules(Tab, styles);
