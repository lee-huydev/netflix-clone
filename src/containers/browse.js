import React, { useContext, useEffect, useRef, useState } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import { getAuth, signOut } from 'firebase/auth';
import { RefeshContext } from '../contexts/firebase';
import SelectProfiles from './profiles';
import { Loading, Media, Browse, Header, Modal } from '../components';
import { Link } from 'react-router-dom';
import { HOME } from '../constants';
import CardContainer from './card';
import { getVideo } from '../helpers/get-content-firestore';
import { useGetFilmName } from '../helpers/firebase-database';
const BrowseContainer = ({ film, userCurrent }) => {
   //    Log out account
   const { refesh, setRefesh } = useContext(RefeshContext);
   const auth = getAuth();
   const handleSignOut = () => {
      signOut(auth)
         .then(() => {
            console.log('Success fully');
            localStorage.removeItem('authUser');
            localStorage.removeItem('profile')
            setRefesh(!refesh);
         })
         .catch((error) => console.log(error.code));
   };
   //    Profile
   const [profile, setProfile] = useState(null);
   // Back from watch not choose profile
   profile !== null && localStorage.setItem('profile', JSON.stringify(profile));
   useEffect(() => {
      if (localStorage.getItem('profile')) {
         setProfile(JSON.parse(localStorage.getItem('profile')));
      }
   }, []);
   // Loading
   const [isLoading, setIsLoading] = useState(true);
   // Set time loading when choose profile and then to page browse
   useEffect(() => {
      const setTime = profile && setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(setTime);
   });
   // Firestore get video
   const [video, setVideo] = useState(null);
   useEffect(() => {
      getVideo('Violence', 'Dr', 'mp4').then((data) => setVideo(data));
   }, []);
   const videoRef = useRef(null);
   // Feature play or pause video intro when scroll
   useEffect(() => {
      const listener = window.addEventListener('scroll', () => {
         document.documentElement.scrollTop >= 500
            ? videoRef.current !== null && videoRef.current.pause()
            : videoRef.current !== null && videoRef.current.play();
      });
      return () => window.removeEventListener('scroll', listener);
   }, []);
   // Search
   const [searchTerm, setSearchTerm] = useState('');
   // Set data Modal in browse
   const [modal, setModal] = useState({
      display: false,
      data: null,
      img: null,
   });
   // Set video access recently
   const { allFilmName } =  useGetFilmName(userCurrent.uid, profile && profile.displayName); // Get from fire database
   const [dataTemp, setDataTemp] = useState(''); // Variable data temporary
   const [contentRender, setContentRender] = useState(null) // Data render after handle
   useEffect(() => {
      if (film && allFilmName) {
         const allFilm = film.film.map((e) => e.data).flat(Infinity) // Make flat array film
         allFilmName.forEach(e => {
            allFilm.forEach(d => d.title === e && setDataTemp(prev => [...prev, d]))
         })
      }
   }, [film, allFilmName]);
   useEffect(() => {
      if(dataTemp) {
         const newValue = new Set(dataTemp) // Filter elem exist when call useEffect 2 times when film changes
         setContentRender([{title: 'Continue Watching for', data: [...newValue]}])
      }
   },[dataTemp])
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
               {contentRender &&
                  contentRender.map((e) => (
                     <CardContainer
                        film={e}
                        profile={profile}
                        displayName={profile.displayName}
                        key={e.title}
                        modal={modal}
                        setModal={setModal}
                        userCurrent={userCurrent}
                     />
                  ))}
               {film &&
                  film.film.map((e) => (
                     <CardContainer
                        film={e}
                        key={e.title}
                        profile={profile}
                        modal={modal}
                        setModal={setModal}
                        userCurrent={userCurrent}
                     />
                  ))}
            </>
         )}
         {modal.display && (
            <Modal>
               <Modal.Content
                  dataModal={modal}
                  setDataModal={setModal}
                  profile={profile}
                  userCurrent={userCurrent}
               ></Modal.Content>
            </Modal>
         )}
      </Header>
   );
};

export default BrowseContainer;
