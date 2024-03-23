// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'; */
import { getAuth } from "firebase/auth";
/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzq9JH2XSN6h-XbtNt0yFEYq3QPYVLAps",
  authDomain: "event-management-system-7894e.firebaseapp.com",
  projectId: "event-management-system-7894e",
  storageBucket: "event-management-system-7894e.appspot.com",
  messagingSenderId: "543058102008",
  appId: "1:543058102008:web:f5b95dc138553dc402dd0d",
  measurementId: "G-C3TX4GB707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
/* const db = getFirestore(app); */
/* const analytics = getAnalytics(app); */

export {app, auth, firebaseConfig}