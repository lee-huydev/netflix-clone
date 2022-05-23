import { Routes, Route, Navigate } from 'react-router-dom';
import { SignIn, SignUp, Browse } from './pages';
import { SIGN_UP, SIGN_IN, BROWSE } from './constants';
import { ProtectedRoute, IsUserRedirect } from './helpers/routes';
import { useAuthListener } from './hooks';
function App() {
   const user = useAuthListener();
   // Check isUser 
   const isUser = user !== null && user.emailVerified;
   return (
      <>
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
                  <ProtectedRoute user={isUser} path={SIGN_UP}>
                     <Browse />
                  </ProtectedRoute>
               }
            />
         </Routes>
      </>
   );
}

export default App;
