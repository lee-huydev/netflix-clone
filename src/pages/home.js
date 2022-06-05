import React from 'react';
import FaqsContainer from '../containers/faqs';
import StoryContainer from '../containers/story';
import HeaderContainer from '../containers/header';
import { Feature } from '../components';

const Home = () => {
   return (
      <>
         <HeaderContainer showSignin={true} sizeLogo='180px'>
            <Feature>
               <Feature.Title>
                  Unlimited films, TV programmes and more.
               </Feature.Title>
               <Feature.SubTitle>
                  Watch anywhere. Cancel at any time.
               </Feature.SubTitle>
            </Feature>
         </HeaderContainer>
         <StoryContainer />
         <FaqsContainer />
      </>
   );
};

export default Home;
