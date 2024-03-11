// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCZHMh8QRVPVD1zJBlfrwN9fUnxp11Yf4",
  authDomain: "metro-juegos.firebaseapp.com",
  projectId: "metro-juegos",
  storageBucket: "metro-juegos.appspot.com",
  messagingSenderId: "984399436114",
  appId: "1:984399436114:web:6f42201d90372039e6428b"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;