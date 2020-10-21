import React from 'react';

import Cover from "./cover";

const AuthPage = ({onSignIn, onLogIn}) => {
  return (
    <div>
      <Cover logInAction={onLogIn} signInAction={onSignIn}/>
    </div>
  );
};

export default AuthPage;
