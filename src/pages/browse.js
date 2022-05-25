import React, { useContext } from 'react';
import { RefeshContext } from '../contexts/firebase';
import { getAuth, signOut } from 'firebase/auth';
import { useContent } from '../hooks';
import FilterContent from '../helpers/filter-content';
import BrowseContainer from '../containers/browse';
const Browse = () => {
   //! Sign Out
  //  const { refesh, setRefesh } = useContext(RefeshContext);
  //  const auth = getAuth();
  //  const handleSignOut = () => {
  //     signOut(auth)
  //        .then(() => {
  //           console.log('Success fully');
  //           localStorage.removeItem('authUser');
  //           setRefesh(!refesh);
  //        })
  //        .catch((error) => console.log(error.code));
  //  };
   // ! useContent
   //  Get data from firestore
   const { content } = useContent('film');
   // Filter each genre of data
   const film = content && FilterContent(content);
   console.log(film);
   return (
      <>
         {/* <button onClick={handleSignOut}>Sign Out</button> */}
         <BrowseContainer film={film}/>
      </>
   );
};

export default Browse;
