//! Add `use client` to prevent this page from being server side rendered
"use client";

//* Import React, hooks, onAuthStateChanged, getAuth & firebase_app
import React, { useState, useEffect, useContext, createContext } from "react";

import { onAuthStateChanged, getAuth } from "firebase/auth";

import firebase_app from "@/firebase/config";

//* Initialize Firebase
const auth = getAuth(firebase_app);

//* Create AuthContext
const AuthContext = createContext();

//* Create useAuthContext hook
export const useAuthContext = () => useContext(AuthContext);

//* Create AuthContextProvider component to wrap around the app in layout.js
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  //* Listen for changes in the user's sign-in state
  useEffect(() => {
    //* onAuthStateChanged returns an unsubscribe function that can be called
    //* to unsubscribe the listener from the user's sign-in state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? (
        <div className="flex flex-col items-center py-10 font-bold text-5xl">
          Loading . . .
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
