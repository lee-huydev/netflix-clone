import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { firebaseApp } from './lib/firebase';
import 'normalize.css';
import { FirebaseContext } from './contexts/firebase';
import { GlobalStyles } from './styleGlobal';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <GlobalStyles />
      <FirebaseContext.Provider value={{ firebaseApp }}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </FirebaseContext.Provider>
   </React.StrictMode>
);
