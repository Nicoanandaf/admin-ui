// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-f0cd6.firebaseapp.com",
  projectId: "store-tutorial-f0cd6",
  storageBucket: "store-tutorial-f0cd6.appspot.com",
  messagingSenderId: "432568521554",
  appId: "1:432568521554:web:1787e8ebea4d064e79208b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();