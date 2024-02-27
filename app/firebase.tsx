import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJ7vttQO-p-b2as-4NiGK7aB6T-DHdZws",
  authDomain: "quoraclone-315f7.firebaseapp.com",
  projectId: "quoraclone-315f7",
  storageBucket: "quoraclone-315f7.appspot.com",
  messagingSenderId: "341399450699",
  appId: "1:341399450699:web:051439753595d37c03c9ce",
  measurementId: "G-MBG48G19BW",
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new firebase.auth.GoogleAuthProvider();
const db = getFirestore(firebaseApp);

export { auth, provider };

export default db;
