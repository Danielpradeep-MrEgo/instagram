import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlhfDUT83jtnAKUhbPkiOuAG2bgQmrpgc",
  authDomain: "jarvis-ce909.firebaseapp.com",
  databaseURL: "https://jarvis-ce909-default-rtdb.firebaseio.com",
  projectId: "jarvis-ce909",
  storageBucket: "jarvis-ce909.appspot.com",
  messagingSenderId: "981868896682",
  appId: "1:981868896682:web:2002b43b0e60cc83818bd3",
  measurementId: "G-MLG4Y6X40B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
