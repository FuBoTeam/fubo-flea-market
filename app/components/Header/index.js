import React from 'react';
import { Link } from 'react-router';
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
        <ul styleName="header scroll-header">
          <Link to="/"><li>Flea Market</li></Link>
          <Link to="/logout"><li><span>Logout</span><i className="fa fa-sign-out" /></li></Link>
        </ul>
      </div>
    );
  }
}

export default CSSModules(Header, styles, { allowMultiple: true, errorWhenNotFound: false });