// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {  getDatabase} from "firebase/database"




const firebaseConfig = {
  apiKey: "AIzaSyA82-y_eNnf59hVJeK2Zr-z-2blIMjYmbo",
  authDomain: "gleefee-ce510.firebaseapp.com",
  projectId: "gleefee-ce510",
  databaseURL: "https://gleefee-ce510-default-rtdb.firebaseio.com/",
  storageBucket: "gleefee-ce510.firebasestorage.app",
  messagingSenderId: "957560780932",
  appId: "1:957560780932:web:ea15556c886b9a5516aad1",
  measurementId: "G-XTZC5QWEGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database};