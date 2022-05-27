import React from 'react';
import SignUpContainer from '../containers/signup';
import HeaderContainer from '../containers/header';
const SignUp = () => {
   return (
      <HeaderContainer>
         <SignUpContainer />
      </HeaderContainer>
   );
};

export default SignUp;
