import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_Ln-1T7SWWFw6HtBEOYhclxzOEo97sVY",
  authDomain: "notice-c3f39.firebaseapp.com",
  projectId: "notice-c3f39",
  storageBucket: "notice-c3f39.appspot.com",
  messagingSenderId: "582403722006",
  appId: "1:582403722006:web:c38409d93edea480e25e37",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const firebaseInstance = firebase;
