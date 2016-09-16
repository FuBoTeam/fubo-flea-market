import React from 'react';
import CSSModules from 'react-css-modules';
// import styles from './header.css';
import { Link } from 'react-router';

// <div styleName="castle-background">
//   <ul styleName="header">
//     <Link to="/"><li styleName="header-btn">Flea Market</li></Link>
//     <Link to="/logout"><li styleName="header-btn"><span>Logout</span><i className="fa fa-sign-out" /></li></Link>
//   </ul>
// </div>

class Header extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <Link to="/"><li>Flea Market</li></Link>
          <Link to="/logout"><li><span>Logout</span><i className="fa fa-sign-out" /></li></Link>
        </ul>
      </div>
    );
  }
}

// export default CSSModules(Header, styles);
export default CSSModules(Header, null);