import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sendEmailVerification } from 'firebase/auth';
import HeaderContainer from '../containers/header';
import { Verify } from '../components';
import { HOME, SIGN_IN } from '../constants';
const Verified = ({ auth }) => {
   const navigate = useNavigate()
   const [contentSub, setContentSub] = useState({
      content: `You have registered an account but have not confirmed the email,
       please click the submit button below to confirm the user email.`,
      caution: '',
      status: false,
   });
   const [optSend, setOptSend] = useState({
      content: 'Send',
      status: true,
   });
   const [second, setSecond] = useState(120);
   const handelSend = (e) => {
      setSecond(120);
      setContentSub({
         ...contentSub,
         content: `
           Please check your email to confirm, if you don't see it, try again with the spam folder.`,
         caution: `Note: You only sent each request by way 120 seconds.`,
         status: true,
      });
      sendEmailVerification(auth).then(() => {
         console.log('Success');
      });
      setOptSend({
         ...optSend,
         status: false,
      });
      const time = setInterval(() => {
         setSecond((prev) => prev - 1);
         e.target.style.pointerEvents = 'none';
      }, 1000);
      setTimeout(() => {
         clearInterval(time);
         setOptSend({
            ...optSend,
            status: true,
         });
         e.target.style.pointerEvents = 'auto';
      }, 120000);
   };
   return (
      <HeaderContainer bg={false} sizeLogo="180px">
         <Verify>
            <Verify.Title>Confirm email: </Verify.Title>
            <Verify.SubTitle status={contentSub.status}>
               {contentSub.content} <br />
               <span>{contentSub.caution}</span>
            </Verify.SubTitle>
            <Verify.OptionGr>
               <Verify.Button hoverColor blurHover="1" onClick={handelSend}>
                  {optSend.status ? optSend.content : second}
               </Verify.Button>
               <Verify.Button second onClick={() => navigate(HOME)}>Cancle</Verify.Button>
               {contentSub.status && (
                  <Link to={SIGN_IN}>
                     {/* <Verify.Redirect></Verify.Redirect> */}
                     <Verify.Button second>Back to login page</Verify.Button>
                  </Link>
               )}
            </Verify.OptionGr>
         </Verify>
      </HeaderContainer>
   );
};

export default Verified;
