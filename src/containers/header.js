import React from 'react';
import Header from '../components/Header';
import { SIGN_IN, HOME } from '../constants';
export default function HeaderContainer({ children }) {
   return (
      <Header>
         <Header.Frame>
            <Header.Logo to={HOME} src='' alt="Netflix" />
            <Header.ButtonLink to={SIGN_IN}>Sign In</Header.ButtonLink>
         </Header.Frame>
         {children}
      </Header>
   );
}
