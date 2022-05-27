import React, { useEffect, useState } from 'react';
import HeaderContainer from './header';
import useAuthListener from '../hooks/use-auth-listener';
import { Profiles ,Loading } from '../components'
const SelectProfiles = ({setProfile}) => {
   const [isLoading, setIsLoading] = useState(true);
   // Listener user sign in
   const user = useAuthListener();
   useEffect(() => {
      const setTime = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(setTime);
   }, []);
   return (
      // <HeaderContainer>
      <Profiles>
         {isLoading ? (
            <Loading.Img src={'./images/misc/Netflix_LoadTime.gif'}/>
         ) : (
            <>
               <Profiles.Title>Who's watching?</Profiles.Title>
               <Profiles.List>
                  <Profiles.Item onClick={() => setProfile({displayName: user.displayName, photoURL: user.photoURL})}>
                     <Profiles.Picture src={user.photoURL} alt="user" />
                     <Profiles.Name>{user.displayName}</Profiles.Name>
                  </Profiles.Item>
               </Profiles.List>
            </>
         )}
      </Profiles>
      // </HeaderContainer>
   );
};

export default SelectProfiles;
