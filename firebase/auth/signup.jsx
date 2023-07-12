//* Import firebase_app from config.js, signInWithEmailAndPassword, and getAuth from firebase/auth
import firebase_app from "../config";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

//* Initialize Firebase
const auth = getAuth(firebase_app);

//* Sign up (create user)
export default async function signUp(email, password) {
  let result = null,
    error = null;
  try {
    //* Create user with email and password (sign up)
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    //! Handle errors here
    error = e;
  }

  return { result, error };
}
