import React from 'react';
import { ImSearch } from 'react-icons/im'
import Header from '../components/Header';
import { SIGN_IN, HOME } from '../constants';
import useAuthListener from '../hooks/use-auth-listener';
export default function HeaderContainer({
   bg,
   children,
   showSignin = false,
   sizeLogo,
   heightHeader = '100px',
   contentSigin = 'Sign in'
}) {
   const auth = useAuthListener() || {}
   return (
      <Header bg={bg} size="100px">
         <Header.Frame heightHeader={heightHeader}>
            <Header.Logo
               to={HOME}
               src="/images/logo.svg"
               alt="Netflix"
               sizeLogo={sizeLogo}
            />
            {showSignin && (
               <Header.ButtonLink to={SIGN_IN}>{contentSigin}</Header.ButtonLink>
            )}
         </Header.Frame>
         {children}
      </Header>
   );
}
