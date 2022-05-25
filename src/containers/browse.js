import React, { useContext } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { RefeshContext } from '../contexts/firebase';
import useAuthListener from '../hooks/use-auth-listener';
import SelectProfiles from './profiles';
const BrowseContainer = ({ film }) => {
   console.log(film);
   //    Log out
   const { refesh, setRefesh } = useContext(RefeshContext);
   const auth = getAuth();
   const handleSignOut = () => {
      signOut(auth)
         .then(() => {
            console.log('Success fully');
            localStorage.removeItem('authUser');
            setRefesh(!refesh);
         })
         .catch((error) => console.log(error.code));
   };
   //    Profile
   const user = useAuthListener();
   console.log(user)
   return (
      <>
         <button onClick={handleSignOut}>Sign Out</button>
         <SelectProfiles user={user} />
      </>
   );
};

export default BrowseContainer;
