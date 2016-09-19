import React from 'react';
import { OAuthSignInButton } from 'redux-auth/bootstrap-theme';

const Login = () => {
  return (
    <div>
      <h1>Login page!</h1>
      <OAuthSignInButton provider="google" />
    </div>
  );
};

export default Login;
