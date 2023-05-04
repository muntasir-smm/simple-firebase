// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfjYMqjjepGsoBM-x3A9l3VS38V9Idp-I",
  authDomain: "simple-firebase-smm.firebaseapp.com",
  projectId: "simple-firebase-smm",
  storageBucket: "simple-firebase-smm.appspot.com",
  messagingSenderId: "906968524373",
  appId: "1:906968524373:web:8f03a185d2d0b9ebee96dc",
  measurementId: "G-BGGKDLS3TL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
