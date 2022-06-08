import {
   getDatabase,
   ref,
   set,
   get,
   child,
   push,
   onValue,
   remove,
} from 'firebase/database';
import { useState, useEffect } from 'react';

// Function add film in database firestore users
export const writeFilmName = (filmName, uidUser, personWatch) => {
   const db = getDatabase();
   const filmRef = ref(db, `users/${uidUser}/${personWatch}`);
   const newPost = push(filmRef);
   let boolean = true;
   const handelFilter = async () => {
      // Get data and filter film already exist on system
      await get(
         child(ref(getDatabase()), `users/${uidUser}/${personWatch}`)
      ).then((snapshot) => {
         if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
               if (childSnapshot.val().filmName === filmName) {
                  boolean = false;
                  console.log('Value exits...');
               }
            });
         }
      });
      // After if film no exits on system will be set film in system
      (await boolean) && set(newPost, { filmName: filmName, timeCurrent: '' });
   };
   handelFilter();
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
                  setAllFilmName((prev) => [
                     ...prev,
                     childkeySnap.val().filmName,
                  ]);
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

// Function add time current of video watched
export const updateTimeCurrentVideo = (
   uidUser,
   nameFilm,
   timeCurrent,
   personWatch
) => {
   const db = getDatabase();
   const dbRef = ref(db, `users/${uidUser}/${personWatch}`);
   onValue(
      dbRef,
      (snapshot) => {
         snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childValue = childSnapshot.val();
            if (childValue.filmName === nameFilm) {
               set(ref(db, `users/${uidUser}/${personWatch}/${childKey}`), {
                  ...childValue,
                  timeCurrent: timeCurrent,
               });
            }
         });
      },
      {
         onlyOnce: true,
      }
   );
};
// Function get time old and play at position time current
export const useGetTime = (uidUser, personWatch, filmName) => {
   const [timeCurrent, setTimeCurrent] = useState(null);
   useEffect(() => {
      const dbRef = ref(getDatabase());
      const path = `users/${uidUser}/${personWatch}`;
      get(child(dbRef, path))
         .then((snapshot) => {
            if (snapshot.exists()) {
               snapshot.forEach((childkeySnap) => {
                  if (childkeySnap.val().filmName === filmName) {
                     setTimeCurrent(childkeySnap.val().timeCurrent);
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
   return timeCurrent;
};
// Function write user child (profile) of account
export const writeUserChild = (uidUser, displayName, id, photoURL) => {
   const db = getDatabase();
   const userChildRef = ref(db, `usersChild/${uidUser}`);
   const newPost = push(userChildRef);
   const post = { id, displayName, photoURL };
   let isFail = false;
   const handelFilter = async () => {
      // Get data and filter film already exist on system
      await get(child(ref(getDatabase()), `usersChild/${uidUser}`)).then(
         (snapshot) => {
            if (snapshot.exists()) {
               snapshot.forEach((childSnapshot) => {
                  if (childSnapshot.val().displayName === displayName) {
                     console.log('Value exits...');
                     return (isFail = true);
                  }
               });
            }
         }
      );
      // After if film no exits on system will be set film in system
      (await !isFail) && set(newPost, post);
      return await isFail;
   };
   return handelFilter();
};
// Function get userchild and render in page user
export const getUserChild = (uidUser) => {
   const data = [];
   // const dbRef = ref(getDatabase());
   const db = getDatabase();
   const dbRef = ref(db, `usersChild/${uidUser}`);
   onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
         const childKey = childSnapshot.key;
         const childValue = childSnapshot.val();
         if (childSnapshot.exists) {
            data.push(childValue);
         }
      });
   });
   return data;
};

// Funtion update display name userchild
export const updateUserChild = (uid, id, displayName) => {
   const db = getDatabase();
   const dbRef = ref(db, `usersChild/${uid}`);
   onValue(
      dbRef,
      (snapshot) => {
         snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childValue = childSnapshot.val();
            if (childValue.id === id) {
               console.log('Success');
               set(ref(db, `usersChild/${uid}/${childKey}`), {
                  ...childValue,
                  displayName: displayName,
               });
            }
         });
      },
      {
         onlyOnce: true,
      }
   );
};
// Function delete profile
export const deleteProfile = (uid, id) => {
   const db = getDatabase();
   const dbRef = ref(db, `usersChild/${uid}`);
   onValue(
      dbRef,
      (snapshot) => {
         snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childValue = childSnapshot.val();
            if (childValue.id === id) {
               console.log('Success');
               remove(ref(db, `usersChild/${uid}/${childKey}`));
            }
         });
      },
      {
         onlyOnce: true,
      }
   );
};

// Functon check user is admin
export const useGetAdmin = (uid) => {
   const [admin, setAdmin] = useState(false);
   const db = getDatabase();
   const dbRef = ref(db, 'admin');
   useEffect(() => {
      onValue(
         dbRef,
         (snapshot) => {
            snapshot.forEach((childSnapshot) => {
               if (childSnapshot.exists) {
                  if (childSnapshot.key === uid) {
                    setAdmin(childSnapshot.val().admin) 
                  }
               }
            });
         },
         {
            onlyOnce: true,
         }
      );
   });
   return admin;
};
