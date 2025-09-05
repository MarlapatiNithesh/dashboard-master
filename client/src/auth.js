// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyANhgZF1wAAD24-JDZ780RDRs0i_0-sPz0",
  authDomain: "customerapp-f50ff.firebaseapp.com",
  projectId: "customerapp-f50ff",
  storageBucket: "customerapp-f50ff.firebasestorage.app",
  messagingSenderId: "681143401691",
  appId: "1:681143401691:web:10c411cde54e9c912c60fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Add this
const analytics = getAnalytics(app);

export { auth };
