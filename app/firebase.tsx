import firebase from "firebase/compat/app";
const firebaseConfig = {
  apiKey: "AIzaSyAbdmtWtRPXlSLRLgtG8jdnpGM1_Ix_Wbo",
  authDomain: "quora-1a694.firebaseapp.com",
  projectId: "quora-1a694",
  storageBucket: "quora-1a694.appspot.com",
  messagingSenderId: "773793593015",
  appId: "1:773793593015:web:598621a429106c17497f32",
  measurementId: "G-KYFE60NRNK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();

export { auth, provider };
export default db;
