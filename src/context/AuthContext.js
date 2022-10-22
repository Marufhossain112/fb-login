import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, signInWithPopup } from "firebase/auth";
const auth = getAuth(app);
export const MyContext = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const signInWithFb = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const authInfo = { user, signInWithFb };
  return <MyContext.Provider value={authInfo}>{children}</MyContext.Provider>;
};

export default AuthContext;
