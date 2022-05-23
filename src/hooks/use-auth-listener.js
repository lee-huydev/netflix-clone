import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
export default function useAuthListener() {
   const auth = getAuth();
   const [user, setUser] = useState(
      JSON.parse(localStorage.getItem('authUser'))
   );
   useEffect(() => {
      const listener = onAuthStateChanged(auth, (user) => {
         if (user) {
            localStorage.setItem('authUser', JSON.stringify(user));
            setUser(user);
         } else {
            localStorage.removeItem('userAuth');
            setUser(null);
         }
        });
        return () => listener();
   }, []);
   return user
}
