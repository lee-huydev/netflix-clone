import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiPlusCircle } from 'react-icons/hi';
import { BsPencil } from 'react-icons/bs';
import { MdDoNotDisturb } from 'react-icons/md';
import useAuthListener from '../hooks/use-auth-listener';
import { Profiles, Loading } from '../components';
import { ADD_PROFILE, MANAGE_PROFILE } from '../constants';
import { getUserChild } from '../helpers/firebase-database';
const SelectProfiles = ({ setProfile }) => {
   const [isLoading, setIsLoading] = useState(true);
   const [allUserChild, setAllUserChild] = useState(null);
   const [editProfile, setEditProfile] = useState(false);
   const navigate = useNavigate();
   // Listener user sign in
   const user = useAuthListener();
   useEffect(() => {
      const setTime = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(setTime);
   }, []);
   // Get userChild from database
   useEffect(() => {
      const userChild = getUserChild(user.uid);
      setAllUserChild(userChild);
   }, []);
   const handleSelect = (profile) => {
      const select = () => {
         setProfile({
            displayName: profile.displayName,
            photoURL: profile.photoURL,
            id: profile.id || null,
         });
      };
      !editProfile && select();
      if(profile.id && editProfile) {
         const payload = {
            id: profile.id,
            displayName: profile.displayName,
            photoURL: profile.photoURL,
            uid: user.uid
         }
         navigate(MANAGE_PROFILE, { state: payload })
      }
   };
   return (
      // <HeaderContainer>
      <Profiles>
         {isLoading ? (
            <Loading.Img src={'./images/misc/Netflix_LoadTime.gif'} />
         ) : (
            <>
               <Profiles.Title>
                  {editProfile ? 'Manage Profiles: ' : `Who's Watching`}
               </Profiles.Title>
               <Profiles.List>
                  {/* //Profile main */}
                  <Profiles.Item
                     notAllow={editProfile}
                     onClick={() => handleSelect(user)}
                  >
                     {editProfile && (
                        <Profiles.Edit>
                           <MdDoNotDisturb className="icon-edit" />
                        </Profiles.Edit>
                     )}
                     <Profiles.Picture src={user.photoURL} alt="user" />
                     <Profiles.Name>{user.displayName}</Profiles.Name>
                  </Profiles.Item>
                  {/* //Profile sub */}
                  {allUserChild &&
                     allUserChild.map((e) => (
                        <Profiles.Item
                           key={e.id}
                           onClick={() => handleSelect(e)}
                        >
                           {editProfile && (
                              <Profiles.Edit>
                                 <BsPencil className="icon-edit" />
                              </Profiles.Edit>
                           )}
                           <Profiles.Picture src={e.photoURL} alt="user" />
                           <Profiles.Name>{e.displayName}</Profiles.Name>
                        </Profiles.Item>
                     ))}
                  {/* // Session add Profile */}
                  {allUserChild && allUserChild.length >= 4 ? null : (
                     <Profiles.Item onClick={() => navigate(ADD_PROFILE)}>
                        <Profiles.IconAdd>
                           <HiPlusCircle className="icon-add" />
                        </Profiles.IconAdd>
                        <Profiles.Name>Add Profile</Profiles.Name>
                     </Profiles.Item>
                  )}
               </Profiles.List>
               {/* Button Manage Profile */}
               {editProfile ? (
                  <Profiles.Button
                     hoverColor
                     blurHover="1"
                     size="25px"
                     pd="5px 30px"
                     onClick={() => setEditProfile(false)}
                  >
                     Done
                  </Profiles.Button>
               ) : (
                  <Profiles.Button
                     second
                     size="25px"
                     blur="0.5"
                     blurHover="1"
                     pd="5px 30px"
                     onClick={() => setEditProfile(true)}
                  >
                     Manage Profile
                  </Profiles.Button>
               )}
            </>
         )}
      </Profiles>
      // </HeaderContainer>
   );
};

export default SelectProfiles;
