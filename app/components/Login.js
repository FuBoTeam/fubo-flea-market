import React from 'react';
import { OAuthSignInButton } from 'redux-auth/bootstrap-theme';

const Login = () => {
  return (
    <div>
      Login page!
      <OAuthSignInButton provider="google" />
    </div>
  );
};

export default Login;