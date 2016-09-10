import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './header.scss';
import '../style/general.scss';
import '../style/global.scss';

class Header extends React.Component {
  render() {
    console.log(styles);
    return (
      <div className="layout-row vertical-top" styleName="castle-background">
        <ul className="layout-row align-between">
          <li><a href="">Flea Market</a></li>
          <li><a href=""><span>Logout</span><i className="fa fa-sign-out" /></a></li>
        </ul>
      </div>
    );
  }
}

export default CSSModules(Header, styles);