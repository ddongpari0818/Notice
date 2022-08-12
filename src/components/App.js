import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { firestore, auth } from "../firebase";
import "../styles/style.css";

function App() {
  const [notices, setNotices] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          photoUrl: user.photoURL,
          email: user.email,
        });
        setIsLoggedIn(true);
        console.log(userObj);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);
  useEffect(() => {
    firestore
      .collection("document")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        const noticeArray = snapshot.docs.map((doc, count) => ({
          count: count,
          id: doc.id,
          ...doc.data(),
        }));

        setNotices(noticeArray);
      });
  }, []);
  return (
    <AppRouter notices={notices} isLoggedIn={isLoggedIn} userObj={userObj} />
  );
}

export default App;
