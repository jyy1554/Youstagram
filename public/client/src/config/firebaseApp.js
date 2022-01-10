import firebaseApp from 'firebase/compat'
import 'firebase/compat/app'
import 'firebase/compat/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYP1swPmdTBqnv0Cmc0OLkBD2ETGkzffs",
  authDomain: "youstagram-p1.firebaseapp.com",
  databaseURL: "https://youstagram-p1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "youstagram-p1",
  storageBucket: "youstagram-p1.appspot.com",
  messagingSenderId: "540044928797",
  appId: "1:540044928797:web:e7d8881750241a6319e3f4",
  measurementId: "G-T9V3HHMW05"
};

// Initialize Firebase
firebaseApp.initializeApp(firebaseConfig);


export default firebaseApp