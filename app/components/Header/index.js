import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Header';
  }
  render() {
    return (
      <div styleName="castle-background">
        <div styleName="planet-logo"></div>
        <ul styleName="header scroll-header">
          <li><a href="">Flea Market</a></li>
          <li><a href=""><span>Logout</span><i className="fa fa-sign-out" /></a></li>
        </ul>
      </div>
    );
  }
}

export default CSSModules(Header, styles, { allowMultiple: true });