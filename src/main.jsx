import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBayFLkvJQZwMtkminSvr1JM9rfRhhhoSc",
    authDomain: "react-serra.firebaseapp.com",
    projectId: "react-serra",
    storageBucket: "react-serra.appspot.com",
    messagingSenderId: "338363417894",
    appId: "1:338363417894:web:f7960ecdfc5861fd7fade7"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
