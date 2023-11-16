// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf91YUFzhQ0p23o0sYZYfB3_GAP6kEejE",
  authDomain: "chatflix-c6159.firebaseapp.com",
  projectId: "chatflix-c6159",
  storageBucket: "chatflix-c6159.appspot.com",
  messagingSenderId: "84154946645",
  appId: "1:84154946645:web:c0b99d47e480fa0ba470dc",
  measurementId: "G-M699T44JCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(); //this line will be used in every API of firebase hence defining it centrally VVIP 