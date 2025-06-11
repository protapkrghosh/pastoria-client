import React, { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const user = {
      name: "Protap Ghosh",
   };

   const authData = {
      user,
   };

   return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
