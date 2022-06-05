import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { Header, Profiles } from '../components';
import { updateUserChild, deleteProfile } from '../helpers/firebase-database'
import { HOME, BROWSE } from '../constants';
const ManageProfiles = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { displayName, photoURL, id, uid } = location.state
    const [inputValue, setInputValue] = useState(displayName)
   const handleSave = (uid, id) => {
      updateUserChild(uid, id, inputValue)
      navigate(BROWSE)
   }
   const handleDelete = (uid, id) => {
      deleteProfile(uid, id)
      navigate(BROWSE)
   }
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
               <Profiles.Title second>Edit Profile</Profiles.Title>
               <Header.Line />
               <Profiles.Inner>
                   <Profiles.Picture src={photoURL}/>
                   <Profiles.Input value={inputValue} onChange={({target}) => setInputValue(target.value)}/>
               </Profiles.Inner>
               <Header.Line />
               <Profiles.Inner>
                   <Profiles.Button pd='5px 20px' size='20px' blurHover='1asd' hoverColor onClick={() => handleSave(uid, id)}>Save</Profiles.Button>
                   <Profiles.Button second pd='5px 20px' size='20px' blur='0.5' blurHover='1' onClick={() => navigate(BROWSE)} >Cancle</Profiles.Button>
                   <Profiles.Button second pd='5px 20px' size='20px' blur='0.5' blurHover='1' onClick={() => handleDelete(uid, id)}>Delete Profile</Profiles.Button>
               </Profiles.Inner>
            </Profiles.Frame>
         </Profiles>
      </Header>
   );
};

export default ManageProfiles;
