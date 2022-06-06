import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { firebaseApp } from './lib/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import { GlobalStyles } from './styleGlobal';
import { BrowserRouter } from 'react-router-dom';
import { BROWSE } from './constants';
// import { FirebaseContext } from './contexts/firebase';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <GlobalStyles />
      {/* <FirebaseContext.Provider value={{ firebaseApp }}> */}
      <BrowserRouter basename={BROWSE}>
         <App />
      </BrowserRouter>
      {/* </FirebaseContext.Provider> */}
   </React.StrictMode>
);
