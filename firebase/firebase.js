// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMm6rwMXuCiC6EfuDiOKzTfSQLBQZ-stI",
  authDomain: "aerosystem-24b78.firebaseapp.com",
  projectId: "aerosystem-24b78",
  storageBucket: "aerosystem-24b78.firebasestorage.app",
  messagingSenderId: "540052723978",
  appId: "1:540052723978:web:c9f6e0f656570f8d2302f3",
  measurementId: "G-TDGMT3F4FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
