import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAl42Ao8BeanqDrGCBx8Teoa4d1wjELd8c",
  authDomain: "quora-new.firebaseapp.com",
  projectId: "quora-new",
  storageBucket: "quora-new.appspot.com",
  messagingSenderId: "715628675206",
  appId: "1:715628675206:web:9d5402c8ac86585c0bd107",
  measurementId: "G-LJR30FXKQC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
