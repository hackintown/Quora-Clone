import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({});
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in!");
  } else {
    console.log("No user");
  }
});
