import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
export default function useAuthListener() {
   const auth = getAuth();
   const [user, setUser] = useState(
      JSON.parse(localStorage.getItem('authUser'))
   );
   useEffect(() => {
      onAuthStateChanged(auth, (userAuth) => {
         if (userAuth && userAuth.emailVerified) {
            localStorage.setItem('authUser', JSON.stringify(userAuth));
            console.log(userAuth);
            setUser(userAuth);
         } else {
            localStorage.removeItem('userAuth');
            setUser(null);
         }
      });
   }, []);
   return user;
}
