import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMnqDWWmQy28v43nMukFkpZh64zOYeFH8",
  authDomain: "hackintown-auth.firebaseapp.com",
  projectId: "hackintown-auth",
  storageBucket: "hackintown-auth.appspot.com",
  messagingSenderId: "966695200508",
  appId: "1:966695200508:web:1eef4ac7807c2c5c47d979",
  measurementId: "G-R44PWJW5CQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();