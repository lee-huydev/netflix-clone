import { async } from '@firebase/util';
import {
   getDatabase,
   ref,
   set,
   get,
   child,
   push,
   onValue
} from 'firebase/database';
import { useState, useEffect } from 'react';

// Function add film in database firestore
export const writeFilmName = (filmName, uidUser, personWatch) => {
   const db = getDatabase();
   const filmRef = ref(db, `users/${uidUser}/${personWatch}`);
   const newPost = push(filmRef);
   let boolean = true
   const handelFilter = async () => {
      // Get data and filter film already exist on system
      await get(child(ref(getDatabase()), `users/${uidUser}/${personWatch}`)).then(snapshot => {
         if(snapshot.exists()) {
            snapshot.forEach(childSnapshot => {
               if(childSnapshot.val().filmName === filmName) {
                  boolean = false
                  console.log('Value exits...')
               }
            })
         }
      })
      // After if film no exits on system will be set film in system
      await boolean && set(newPost, {filmName: filmName, timeCurrent: ''});
   }
   handelFilter()
};
// Funtion get database from store and render in browse
export const useGetFilmName = (uidUser, personWatch) => {
   const [allFilmName, setAllFilmName] = useState('');
   useEffect(() => {
      const dbRef = ref(getDatabase());
      const path = `users/${uidUser}/${personWatch}`;
      get(child(dbRef, path))
         .then((snapshot) => {
            if (snapshot.exists()) {
               snapshot.forEach((childkeySnap) => {
                  setAllFilmName((prev) => [...prev, childkeySnap.val().filmName]);
               });
            } else {
               console.log('No available value');
               return;
            }
         })
         .catch((error) => {
            console.error(error);
         });
   }, [personWatch]);
   return { allFilmName };
};
export const useGetTime = ( uidUser, personWatch, filmName ) => {
   const [timeCurrent, setTimeCurrent] = useState(null)
   useEffect(() => {
      const dbRef = ref(getDatabase());
      const path = `users/${uidUser}/${personWatch}`;
      get(child(dbRef, path))
         .then((snapshot) => {
            if (snapshot.exists()) {
               snapshot.forEach((childkeySnap) => {
                  if(childkeySnap.val().filmName === filmName) {
                     setTimeCurrent(childkeySnap.val().timeCurrent)
                  }
               });
            } else {
               console.log('No available value');
               return;
            }
         })
         .catch((error) => {
            console.error(error);
         });
   }, []);
   return timeCurrent
}

// Function add time current of video watched
export const updateTimeCurrentVideo = (uidUser, nameFilm, timeCurrent, personWatch) => {
   const db = getDatabase();
   const dbRef = ref(db, `users/${uidUser}/${personWatch}`);
   onValue(
      dbRef,
      (snapshot) => {
         snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childValue = childSnapshot.val();
            if(childValue.filmName === nameFilm) {
               set(ref(db, `users/${uidUser}/${personWatch}/${childKey}`), {
                  ...childValue,
                  timeCurrent: timeCurrent,
               })
            }
         });
      },
      {
         onlyOnce: true,
      }
   );
};
