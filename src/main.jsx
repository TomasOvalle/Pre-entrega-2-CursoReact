import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIdcWeZlQniGXV-Hkg3G02VOqNDkk9bgs",
  authDomain: "curso-react-profi.firebaseapp.com",
  projectId: "curso-react-profi",
  storageBucket: "curso-react-profi.appspot.com",
  messagingSenderId: "826457057818",
  appId: "1:826457057818:web:2c9e4e52d7f4bc8989ffa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
)
