import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9VWq9XxQmmoZgobDylGo5ezoTOuSzFGs",
  authDomain: "notice-73d86.firebaseapp.com",
  projectId: "notice-73d86",
  storageBucket: "notice-73d86.appspot.com",
  messagingSenderId: "609198472902",
  appId: "1:609198472902:web:8f9afeba807fc2f29361c7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const firebaseInstance = firebase;
