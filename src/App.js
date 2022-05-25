import { Routes, Route } from 'react-router-dom';
import { SignIn, SignUp, Browse } from './pages';
import { SIGN_UP, SIGN_IN, BROWSE } from './constants';
import { ProtectedRoute, IsUserRedirect } from './helpers/routes';
import { useAuthListener } from './hooks';
import { useState } from 'react';
import { RefeshContext } from './contexts/firebase'
function App() {
   const [refesh, setRefesh] = useState(false)
   // Hook custom listener user create, login, sign out
   const useAuth = useAuthListener()
   const user = () => { 
      return useAuth !== null ? useAuth : JSON.parse(localStorage.getItem('authUser'))
   }
   const userConfirm = user()
   // Check isUser
   const isUser = userConfirm !== null && userConfirm.emailVerified;
   return (
      <>
      <RefeshContext.Provider value={{refesh, setRefesh}}>
         <Routes>
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
         </Routes>
         </RefeshContext.Provider>
      </>
   );
}

export default App;
