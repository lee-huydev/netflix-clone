import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'
// import 'firebase/auth'
// import { getStorage, ref, getDownloadURL } from 'firebase/storage';
// import { seedDataBase } from '../seedData'
const config = {
    apiKey: 'AIzaSyADoD1P_f0DlS8FRSXjKbx8y8S7TYn3gbA',
    authDomain: 'netflix-clone-62cef.firebaseapp.com',
    databaseURL: 'https://netflix-clone-62cef-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'netflix-clone-62cef',
    storageBucket: 'netflix-clone-62cef.appspot.com',
    messagingSenderId: '971456130200',
    appId: '1:971456130200:web:4fb52fd1ec412be06334ed',
 };
 export const firebaseApp = initializeApp(config);
//  const db = getFirestore(firebaseApp)
// seedDataBase(db) (Add data in firestore cloud)
//  
//  const storage = getStorage();
//  const startRef = ref(storage, 'Videos/Violence/6 Underground.mkv');
//  export const getVideos = async () => {
//     try {
//        const response = await getDownloadURL(startRef);
//        if (response) {
//           return response;
//        }
//     } catch (error) {
//        switch (error.code) {
//           case 'storage/object-not-found':
//              console.warn(error.code);
//              break;
//           case 'storage/unauthorized':
//              console.warn(error.code);
//              break;
//           case 'storage/canceled':
//              console.warn(error.code);
//              break;
//           case 'storage/unknown':
//              console.warn(error.code);
//              break;
//        }
//     }
//  };
