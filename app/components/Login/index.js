import React from 'react';
import { OAuthSignInButton } from 'redux-auth/bootstrap-theme';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
const btnStyle = {
  marginLeft: 5,
};

const Login = () => {
  return (
    <div styleName="container">
      <h1>Login</h1>
      <hr />
      <p>Support Google Login.<OAuthSignInButton provider="google" style={btnStyle} /></p>
    </div>
  );
};

export default CSSModules(Login, styles);
