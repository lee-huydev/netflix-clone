import { Routes, Route } from 'react-router-dom';
import { SignIn, SignUp, Browse, Home, Watch, AddProfile, ManageProfiles, Verified, AdminManage } from './pages';
import { SIGN_UP, SIGN_IN, BROWSE, HOME, WATCH, ADD_PROFILE, MANAGE_PROFILE, VERIFIED, ADMIN } from './constants';
import { ProtectedRoute, IsUserRedirect } from './helpers/routes';
import { useAuthListener } from './hooks';
import { useEffect, useState } from 'react';
import {
   RefeshContext,
   DataVideoContext,
} from './contexts/firebase';
function App() {
   const [refesh, setRefesh] = useState(false);
   const [dataPlayVideo, setDataPlayVideo] = useState(null);
   // Hook custom listener user create, login, sign out
   const useAuth = useAuthListener();
   // Confirm user was confimed yet
   const isUser = () => {
     return localStorage.getItem('authUser') ? JSON.parse(localStorage.getItem('authUser')).emailVerified : false
   };
   // Delete profie in localstorage when load page or close page and then choose profile
   useEffect(() => {
      window.onbeforeunload = () => {
         localStorage.removeItem('profile');
      };
   }, []);
   // Allow user play video when is user login and was chosen video.
   const allowPlay = isUser() && dataPlayVideo !== null;
   return (
      <>
         <RefeshContext.Provider value={{ refesh, setRefesh }}>
            <DataVideoContext.Provider
               value={{ dataPlayVideo, setDataPlayVideo }}
            >
               <Routes >
                  <Route
                     path={HOME}
                     element={
                        <IsUserRedirect user={isUser()} path={BROWSE}>
                           <Home />
                        </IsUserRedirect>
                     }
                  />
                  <Route
                     path={SIGN_IN}
                     element={
                        <IsUserRedirect user={isUser()} path={BROWSE}>
                           <SignIn />
                        </IsUserRedirect>
                     }
                  />
                  <Route
                     path={VERIFIED}
                     element={
                        <IsUserRedirect user={useAuth && useAuth.emailVerified} path={BROWSE}>
                           <Verified auth={useAuth}/>
                        </IsUserRedirect>
                     }
                  />
                  <Route
                     path={SIGN_UP}
                     element={
                        <IsUserRedirect user={isUser()} path={BROWSE}>
                           <SignUp />
                        </IsUserRedirect>
                     }
                  />
                     <Route
                        path={BROWSE}
                        element={
                           <ProtectedRoute user={isUser()} path={SIGN_IN}>
                              <Browse userCurrent={useAuth} isUser={isUser()}/>
                           </ProtectedRoute>
                        }
                     />
                     <Route
                        path={ADD_PROFILE}
                        element={
                           <ProtectedRoute user={isUser()} path={SIGN_IN}>
                              <AddProfile userCurrent={useAuth}/>
                           </ProtectedRoute>
                        }
                     />
                     <Route
                        path={MANAGE_PROFILE}
                        element={
                           <ProtectedRoute user={isUser()} path={SIGN_IN}>
                              <ManageProfiles userCurrent={useAuth}/>
                           </ProtectedRoute>
                        }
                     />
                  <Route
                     path={WATCH}
                     element={
                        <ProtectedRoute user={allowPlay} path={HOME}>
                           <Watch dataPlay={dataPlayVideo} />
                        </ProtectedRoute>
                     }
                  />
                  <Route
                     path={ADMIN}
                     element={
                        <ProtectedRoute user={isUser()} path={HOME}>
                           <AdminManage />
                        </ProtectedRoute>
                     }
                  />
               </Routes>
            </DataVideoContext.Provider>
         </RefeshContext.Provider>
      </>
   );
}

export default App;
