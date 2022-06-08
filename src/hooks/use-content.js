import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../lib/firebase';
export default function useContent(collect) {
   const [content, setContent] = useState(null);
   const db = getFirestore(firebaseApp);
   useEffect(() => {
      const querySnapshot = async () => {
         await getDocs(collection(db, collect)) // return 1 object has key docs, it is 1 array
            .then(({ docs }) => {
               // each array is object and has method data()
               const allContent = docs.map((contentObj) => ({
                  ...contentObj.data()
               }));
               setContent(allContent);
            })
            .catch((error) => {
               console.log(error.message);
            });
      };
      querySnapshot(); 
   }, []);
   return { content };
}
