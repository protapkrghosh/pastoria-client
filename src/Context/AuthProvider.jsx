import {
   createUserWithEmailAndPassword,
   GithubAuthProvider,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const signUpUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const googleSignIn = () => {
      return signInWithPopup(auth, googleProvider);
   };

   const gitHubSignIn = () => {
      return signInWithPopup(auth, gitHubProvider);
   }

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (currentUser) {
            setUser(currentUser);
         }
      });

      return () => {
         unSubscribe();
      };
   }, []);

   const authData = {
      user,
      signUpUser,
      signInUser,
      googleSignIn,
      gitHubSignIn,
   };

   return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
