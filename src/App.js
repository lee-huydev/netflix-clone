import { Routes, Route } from 'react-router-dom';
import { SignIn, SignUp, Browse, Home, Watch } from './pages';
import { SIGN_UP, SIGN_IN, BROWSE, HOME, WATCH } from './constants';
import { ProtectedRoute, IsUserRedirect } from './helpers/routes';
import { useAuthListener, useWatch } from './hooks';
import { useEffect, useState } from 'react';
import { RefeshContext, DataVideoContext } from './contexts/firebase';
function App() {
   const [refesh, setRefesh] = useState(false);
   const [dataPlayVideo, setDataPlayVideo] = useState(null)
   // Hook custom listener user create, login, sign out
   const useAuth = useAuthListener();
   const user = () => {
      return useAuth !== null
         ? useAuth
         : JSON.parse(localStorage.getItem('authUser'));
   };
   // Delete profie in localstorage when load page or close page and then choose profile
   useEffect(() => {
      window.onbeforeunload = () => {
         localStorage.removeItem('profile');
       }
   }, [])
   // 
   const userConfirm = user();
   // Check isUser
   const isUser = userConfirm !== null && userConfirm.emailVerified;
   const allowPlay = isUser !== null && dataPlayVideo !== null
   return (
      <>
         <RefeshContext.Provider value={{ refesh, setRefesh }}>
            <DataVideoContext.Provider value={{dataPlayVideo, setDataPlayVideo}}>
            <Routes>
               <Route
                  path={HOME}
                  element={
                     <IsUserRedirect user={isUser} path={BROWSE}>
                        <Home />
                     </IsUserRedirect>
                  }
               />
               <Route
                  path={SIGN_IN}
                  element={
                     <IsUserRedirect user={isUser} path={BROWSE}>
                        <SignIn />
                     </IsUserRedirect>
                  }
               />
               <Route
                  path={SIGN_UP}
                  element={
                     <IsUserRedirect user={isUser} path={BROWSE}>
                        <SignUp />
                     </IsUserRedirect>
                  }
               />
               <Route
                  path={BROWSE}
                  element={
                     <ProtectedRoute user={isUser} path={SIGN_IN}>
                        <Browse />
                     </ProtectedRoute>
                  }
               />
               <Route
                  path={WATCH}
                  element={
                     <ProtectedRoute user={allowPlay} path={HOME}>
                        <Watch dataPlay={dataPlayVideo}/>
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
