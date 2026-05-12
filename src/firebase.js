// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqk5tpU642WnqOo0AbdJ2ECiKnpuaQZ6w",
  authDomain: "sundoo-off.firebaseapp.com",
  projectId: "sundoo-off",
  storageBucket: "sundoo-off.firebasestorage.app",
  messagingSenderId: "897062719374",
  appId: "1:897062719374:web:e1496bd27273d0e3e4dedf",
  measurementId: "G-F40WWLC98T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)