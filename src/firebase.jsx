import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-7e7eb.firebaseapp.com",
  projectId: "store-tutorial-7e7eb",
  storageBucket: "store-tutorial-7e7eb.appspot.com",
  messagingSenderId: "1052278189190",
  appId: "1:1052278189190:web:c4f71445e02469149db507"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);