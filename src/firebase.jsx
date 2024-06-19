import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-72d39.firebaseapp.com",
  projectId: "store-tutorial-72d39",
  storageBucket: "store-tutorial-72d39.appspot.com",
  messagingSenderId: "1005500472800",
  appId: "1:1005500472800:web:a8540c3ce36ecc18961f85"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);