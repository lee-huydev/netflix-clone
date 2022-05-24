import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { firebaseApp } from './lib/firebase';
import 'normalize.css';
import { GlobalStyles } from './styleGlobal';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <GlobalStyles />
      {/* <UserContext.Provider value={{ AuthListener }}> */}
         <BrowserRouter>
            <App />
         </BrowserRouter>
      {/* </UserContext.Provider> */}
    </React.StrictMode>
);
