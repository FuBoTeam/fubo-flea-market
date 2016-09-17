import React from 'react';
import { SignOutButton } from 'redux-auth/bootstrap-theme';

const Logout = () => {
  return (
    <div>
      Logout page!
      <SignOutButton />
    </div>
  );
};

export default Logout;