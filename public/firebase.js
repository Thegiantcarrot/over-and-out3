 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHy5XSdaGgTTN59R7fKEeOmFrLNeYtXLw",
  authDomain: "over-and-out-62760.firebaseapp.com",
  projectId: "over-and-out-62760",
  storageBucket: "over-and-out-62760.appspot.com",
  messagingSenderId: "501311650217",
  appId: "1:501311650217:web:23d69d947ba1e595902cb8",
  measurementId: "G-RXE1FNXCH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);