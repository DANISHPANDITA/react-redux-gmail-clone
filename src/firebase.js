// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBqxjYH1ZZ266IiWlIEeHIXYKzCax50QM4",
  authDomain: "clone-8a9d2.firebaseapp.com",
  projectId: "clone-8a9d2",
  storageBucket: "clone-8a9d2.appspot.com",
  messagingSenderId: "237707627428",
  appId: "1:237707627428:web:14cf8de00dc86803980f31",
  measurementId: "G-V2L6T23M66",
});

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const auth = firebaseApp.auth();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export { storage, googleAuth, auth };
export default db;
