import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
export default function AuthListener() {
   const auth = getAuth();
   const [user, setUser] = useState(
      JSON.parse(localStorage.getItem('authUser'))
   );
   useEffect(() => {
   const listener = onAuthStateChanged(auth, (userAuth) => {
         if (userAuth && userAuth.emailVerified) {
            localStorage.setItem('authUser', JSON.stringify(userAuth));
            setUser(userAuth);
         } else {
            localStorage.removeItem('userAuth');
            setUser(null);
         }
      });
      return () => listener()
   }, []);
   return user;
}
