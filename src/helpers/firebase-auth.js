import { getAuth } from 'firebase/auth';
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
   const timeCreated = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
   today.setDate(today.getDate() + 30);
   const timeExpire = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
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
               const childKey = childSnapshot.key
               const childValue = childSnapshot.val();
               if(childValue.email === email) {
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
