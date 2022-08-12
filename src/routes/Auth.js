import React from "react";
import { auth } from "../firebase";
import { firebaseInstance } from "../firebase";

const googleLogin = () => {
  const provider = new firebaseInstance.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

const Auth = () => {
  return (
    <div>
      <button className="login" onClick={googleLogin}>
        Google
      </button>
    </div>
  );
};

export default Auth;
