import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import { SignOutButton } from 'redux-auth/default-theme';
import {
  IndexLink,
  Link,
} from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Header';
  }
  render() {
    const { isSignedIn } = this.props;
    const LoginLogoutCmp = isSignedIn ? (
      <SignOutButton styleName="sign-out">Logout<i className="fa fa-sign-out" /></SignOutButton>
    ) : (
      <Link to="/login" styleName="sign-in"><span>Login</span><i className="fa fa-sign-in" /></Link>
    );
    return (
      <div styleName="castle-background">
        <div styleName="planet-logo"></div>
        <ul styleName="header scroll-header">
          <li><IndexLink to="/">Flea Market</IndexLink></li>
          <li>{LoginLogoutCmp}</li>
        </ul>
      </div>
    );
  }
}

Header.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
};

export default CSSModules(Header, styles, { allowMultiple: true });