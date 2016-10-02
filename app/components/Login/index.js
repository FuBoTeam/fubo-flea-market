import React from 'react';
import { browserHistory } from 'react-router';
import { OAuthSignInButton } from 'redux-auth/bootstrap-theme';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
const btnStyle = {
  marginLeft: 5,
};

class Login extends React.Component {
  render() {
    const { next } = this.props.location.query;
    return (
      <div styleName="container">
        <h1>Login</h1>
        <hr />
        <p>Support Google Login.
          <OAuthSignInButton
            provider="google"
            next={() => { return browserHistory.push(next || '/'); }}
            style={btnStyle}
          />
        </p>
      </div>
    );
  }
}

Login.propTypes = {
  location: React.PropTypes.object.isRequired,
};

export default CSSModules(Login, styles);