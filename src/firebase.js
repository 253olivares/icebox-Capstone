// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoVUvgsG9ZbpA-LnjuGMeVgr1JrcyUI2A",
  authDomain: "capstone-sp22.firebaseapp.com",
  projectId: "capstone-sp22",
  storageBucket: "capstone-sp22.appspot.com",
  messagingSenderId: "1050121475702",
  appId: "1:1050121475702:web:bb16b98afc902ad0deb157",
  measurementId: "G-GSJM35V8KH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
