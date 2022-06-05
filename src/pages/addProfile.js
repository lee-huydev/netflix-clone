import React, { useEffect, useState } from 'react';
import { v4 as UUID } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { Header, Profiles } from '../components';
import { HOME, BROWSE } from '../constants';
import { writeUserChild } from '../helpers/firebase-database';
const AddProfile = ({ userCurrent }) => {
   const navigate = useNavigate();
   const [valueInput, setValueInput] = useState('');
   const [picture, setPicture] = useState(null);
   const [error, setError] = useState({ content: '', status: false });
   useEffect(() => {
      setPicture(Math.floor(Math.random() * 5) + 1);
   }, []);
   const handleError = () => {
      const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if (valueInput.match(format)) {
         setError({
            ...error,
            content: 'Profile name cannot contain special characters.',
            status: true,
         });
         return;
      } else {
         setError({ ...error, content: '', status: false });
      }
   };
   const handleClick = () => {
      if (!error.status) {
         const success = writeUserChild(
            userCurrent.uid,
            valueInput,
            UUID(),
            picture
         );
         setValueInput('');
         success.then((e) => {
            if (e) {
               setError({
                  ...error,
                  content:
                     'Profile name already exist, please try again with other.',
                  status: true,
               });
               return;
            } else {
               setError({ ...error, content: '', status: false });
            }
            !e && navigate(BROWSE);
         });
      }
   };
   return (
      <Header bg={false}>
         <Header.Frame heightHeader="68px">
            <Header.Logo
               to={HOME}
               src="/images/logo.svg"
               alt="Netflix"
               sizeLogo="100px"
            />
         </Header.Frame>
         <Profiles>
            <Profiles.Frame>
               <Profiles.Title second>Add Profile</Profiles.Title>
               <Profiles.SubTitle>
                  Add a profile for another person watching Netflix
               </Profiles.SubTitle>
               <Header.Line />
               <Profiles.Inner>
                  <Profiles.Picture second src={picture ? picture : null} />
                  <Profiles.Input
                     placeholder="Name"
                     value={valueInput}
                     onChange={({ target }) => {
                        setValueInput(target.value);
                        handleError();
                     }}
                  />
               </Profiles.Inner>
               <Header.Line />
               <Profiles.Inner>
                  <Profiles.Button onClick={handleClick}>
                     CONTINUE
                  </Profiles.Button>
                  <Profiles.Button second onClick={() => navigate(BROWSE)}>
                     CANCLE
                  </Profiles.Button>
               </Profiles.Inner>
               {error.status && (
                  <Profiles.Error>{error.content}</Profiles.Error>
               )}
            </Profiles.Frame>
         </Profiles>
      </Header>
   );
};

export default AddProfile;
