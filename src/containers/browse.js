import React, { useContext, useEffect, useRef, useState } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import { getAuth, signOut } from 'firebase/auth';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { RefeshContext } from '../contexts/firebase';
import SelectProfiles from './profiles';
import { Loading, Media, Browse, Header, Modal } from '../components';
import { Link } from 'react-router-dom';
import { HOME } from '../constants';
import CardContainer from './card';
const BrowseContainer = ({ film }) => {
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
   const [profile, setProfile] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      const setTime = profile && setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(setTime);
   });
   // Firestore
   const [video, setVideo] = useState(null);
   const storage = getStorage();
   const startRef = ref(storage, 'Videos/Violence/Dr.mp4');
   useEffect(() => {
      const getVideos = async () => {
         const response = await getDownloadURL(startRef);
         return response;
      };
      getVideos().then((data) => setVideo(data));
   }, []);
   const videoRef = useRef(null);
   // useEffect(() => {
   //    const listener = window.addEventListener('scroll', () => {
   //       document.documentElement.scrollTop >= 500
   //          ? videoRef.current !== null && videoRef.current.pause()
   //          : videoRef.current !== null && videoRef.current.play();
   //    });
   //    return () => window.removeEventListener('scroll', listener);
   // }, []);
   // Search
   const [searchTerm, setSearchTerm] = useState('');
   // Modal
   const [modal, setModal] = useState({ display: false, data: null, img:null });
   console.log(modal);
   return (
      <Header bg={false}>
         <Header.Frame heightHeader="68px">
            <Header.Logo
               to={HOME}
               src="/images/logo.svg"
               alt="Netflix"
               sizeLogo="100px"
            />
            {profile && (
               <>
                  <Header.GroupFeature>
                     <Header.Search
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                     />
                     <Header.Profile>
                        <Header.Avatar>
                           <Header.Picture
                              src={`/images/users/${profile.photoURL}.png`}
                           />
                           <IoMdArrowDropdown className="icon-drop" />
                        </Header.Avatar>
                        <Header.Dropdown>
                           <IoMdArrowDropdown className="icon-drop" />
                           <Header.Li>
                              <Header.Picture
                                 src={`/images/users/${profile.photoURL}.png`}
                              />
                              <Header.ProfilesName>
                                 {profile.displayName}
                              </Header.ProfilesName>
                           </Header.Li>
                           <Header.Line />
                           <Header.Li>
                              <Link to={HOME}>
                                 <Header.SignOut onClick={handleSignOut}>
                                    Sign out of Netflix
                                 </Header.SignOut>
                              </Link>
                           </Header.Li>
                        </Header.Dropdown>
                     </Header.Profile>
                  </Header.GroupFeature>
               </>
            )}
         </Header.Frame>
         {!profile ? (
            <SelectProfiles setProfile={setProfile} />
         ) : isLoading ? (
            <Loading>
               <Loading.Picture src={`/images/users/${profile.photoURL}.png`} />
            </Loading>
         ) : (
            <>
               <Browse>
                  <Media
                     ref={videoRef}
                     autoPlay
                     loop
                     muted
                     poster="./images/misc/dr.jpg"
                     // src={video}
                  />
                  <Browse.MoreFrame>
                     <Browse.ImgTitle src={'./images/misc/drr.png'} />
                     <Browse.TextAbout>
                        While on a journey of physical and spiritual healing, a
                        brilliant neurosurgeon is drawn into the world of the
                        mystic arts.
                     </Browse.TextAbout>
                     <Browse.BtnGroup>
                        <Link to="">
                           <Browse.BtnPlay>
                              <BsPlayFill className="btn-icons" />
                              Play
                           </Browse.BtnPlay>
                        </Link>
                        <Browse.BtnInfor>
                           <AiOutlineInfoCircle className="btn-icons" />
                           More info
                        </Browse.BtnInfor>
                     </Browse.BtnGroup>
                  </Browse.MoreFrame>
               </Browse>
               {film &&
                  film.film.map((e) => (
                     <CardContainer
                        film={e}
                        key={e.title}
                        modal={modal}
                        setModal={setModal}
                     />
                  ))}
            </>
         )}
         {modal.display && (
            <Modal>
               <Modal.Content dataModal={modal} setDataModal={setModal}></Modal.Content>
            </Modal>
         )}
      </Header>
   );
};

export default BrowseContainer;
