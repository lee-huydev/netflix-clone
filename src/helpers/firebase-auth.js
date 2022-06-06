import { getAuth, deleteUser, signOut } from 'firebase/auth';
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
import { useState } from 'react';
export const writeListUser = () => {
   const auth = getAuth();
   const email = auth.currentUser && auth.currentUser.email;
   const status = auth.currentUser && auth.currentUser.emailVerified;
   const today = new Date();
   const timeCreated = `${today.getDate()}/${
      today.getMonth() + 1
   }/${today.getFullYear()}`;
   today.setDate(today.getDate() + 30);
   const timeExpire = `${today.getDate()}/${
      today.getMonth() + 1
   }/${today.getFullYear()}`;
   const dataPost = {
      email: email,
      timeCreated: timeCreated,
      timeExpire: timeExpire,
      status: status,
   };
   const db = getDatabase();
   const filmRef = ref(db, `allUsers/`);
   const newPost = push(filmRef);
   set(newPost, dataPost);
};

export const getListUser = async () => {
   const data = [];
   const dbRef = ref(getDatabase());
   const path = `allUsers`;
   await get(child(dbRef, path))
      .then((snapshot) => {
         if (snapshot.exists()) {
            snapshot.forEach((childkeySnap) => {
               data.push(childkeySnap.val());
            });
         } else {
            console.log('No available value');
            return;
         }
      })
      .catch((error) => {
         console.error(error);
      });
   return await data;
};

export const updateStatus = (status, email) => {
   const db = getDatabase();
   const dbRef = ref(db, `allUsers`);
   onValue(
      dbRef,
      (snapshot) => {
         if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
               const childKey = childSnapshot.key;
               const childValue = childSnapshot.val();
               if (childValue.email === email) {
                  set(ref(db, `allUsers/${childKey}`), {
                     ...childValue,
                     status: status,
                  });
               }
            });
         }
      },
      {
         onlyOnce: true,
      }
   );
};

export const autoDeteteUser = (email, user) => {
   const today = new Date();
   const date = today.getDate();
   const month = today.getMonth() + 1;
   const year = today.getFullYear();
   const db = getDatabase();
   const dbRef = ref(db, `allUsers`);
   onValue(
      dbRef,
      (snapshot) => {
         if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
               const childKey = childSnapshot.key;
               const childValue = childSnapshot.val();
               if (childValue.email === email) {
                  const expireTime = childValue.timeExpire.split('/')
                  if(date === Number(expireTime[0]) && month === Number(expireTime[1]) && year === Number(expireTime[2])) {
                     remove(ref(db, `allUsers/${childKey}`));
                     deleteUser(user).then(() => {
                        localStorage.removeItem('authUser');
                        localStorage.removeItem('profile');
                     })
                     console.log('Success');
                  }
               }
            });
         }
      },
      {
         onlyOnce: true,
      }
   );
};

export const extendTimeExpire = (email, timeExtend) => {
   const db = getDatabase();
   const dbRef = ref(db, `allUsers`);
   onValue(
      dbRef,
      (snapshot) => {
         if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
               const childKey = childSnapshot.key;
               const childValue = childSnapshot.val();
               if (childValue.email === email) {
                  set(ref(db, `allUsers/${childKey}`), {
                     ...childValue,
                     timeExpire: timeExtend,
                  });
               }
            });
         }
      }
   );
}