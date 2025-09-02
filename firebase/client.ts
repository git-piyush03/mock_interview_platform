// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc33wY7Hmi9X61Kyzu9zflrr4XqIw_UiE",
  authDomain: "mock-d945c.firebaseapp.com",
  projectId: "mock-d945c",
  storageBucket: "mock-d945c.firebasestorage.app",
  messagingSenderId: "372313469824",
  appId: "1:372313469824:web:3ce56a5473be8b3ec2c765",
  measurementId: "G-ZYGFRHFLSN"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
