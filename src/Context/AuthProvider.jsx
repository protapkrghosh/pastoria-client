import {
   createUserWithEmailAndPassword,
   GithubAuthProvider,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const signUpUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   const gitHubSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, gitHubProvider);
   };

   const signOutUser = () => {
      return signOut(auth);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);

         // API for JWT
         if (currentUser?.email) {
            const userData = { email: currentUser.email };
            axios
               .post(`${import.meta.env.VITE_URL}/jwt`, userData, {
                  withCredentials: true,
               })
               .then((res) => {
                  // console.log(res.data);
               })
               .catch((error) => {
                  // console.log(error);
               });
         }
      });

      return () => {
         unSubscribe();
      };
   }, []);

   const authData = {
      user,
      loading,
      setLoading,
      signUpUser,
      signInUser,
      googleSignIn,
      gitHubSignIn,
      signOutUser,
   };

   return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
