// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYX-vGejK-tcLHH3z3Nlexv2ZtRXMGMMM",
  authDomain: "foodorderingwebapplication.firebaseapp.com",
  projectId: "foodorderingwebapplication",
  storageBucket: "foodorderingwebapplication.appspot.com",
  messagingSenderId: "995482310444",
  appId: "1:995482310444:web:07aa381b43fedd100afe89",
  measurementId: "G-0CVCF4FG88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;