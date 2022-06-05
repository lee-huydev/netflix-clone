import React from 'react';
import { useContent } from '../hooks';
import FilterContent from '../helpers/filter-content';
import BrowseContainer from '../containers/browse';
const Browse = ({ userCurrent, isUser }) => {
   const { content } = useContent('film');
   // Filter each genre of data
   const film = content && FilterContent(content);
   return (
      <>
         <BrowseContainer film={film} userCurrent={userCurrent} isUser={isUser}/>
      </>
   );
};

export default Browse;
