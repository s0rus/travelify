import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/config';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = async (email, password) => auth.createUserWithEmailAndPassword(email, password);

  const logIn = async (email, password) => auth.signInWithEmailAndPassword(email, password);

  const logOut = async () => auth.signOut();

  useEffect(() => {
    const userHandler = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => userHandler();
  }, []);

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
