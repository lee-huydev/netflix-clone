import React from 'react';
import { useContent } from '../hooks';
import FilterContent from '../helpers/filter-content';
import BrowseContainer from '../containers/browse';
const Browse = () => {
   const { content } = useContent('film');
   // Filter each genre of data
   const film = content && FilterContent(content);
   return (
      <>
         {/* <button onClick={handleSignOut}>Sign Out</button> */}
         <BrowseContainer film={film}/>
      </>
   );
};

export default Browse;
