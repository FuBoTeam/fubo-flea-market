import React from 'react';
import { OAuthSignInButton } from 'redux-auth/bootstrap-theme';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
const btnStyle = {
  marginLeft: 5,
};

class Login extends React.Component {
  render() {
    const { changeLocationOnSignIn, getUser } = this.props;
    const { next } = this.props.location.query;
    return (
      <div styleName="container">
        <h1>Login</h1>
        <hr />
        <p>Support Google Login.
          <OAuthSignInButton
            provider="google"
            next={
              () => {
                getUser();
                changeLocationOnSignIn(next || '/');
                return;
              }
            }
            style={btnStyle}
          />
        </p>
      </div>
    );
  }
}

Login.propTypes = {
  location: React.PropTypes.object.isRequired,
  changeLocationOnSignIn: React.PropTypes.func.isRequired,
  getUser: React.PropTypes.func.isRequired,
};

export default CSSModules(Login, styles);