import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

import { auth } from "../configuration/firebase-config";
//login
async function Login(fun = () => {}) {
  console.log("logging in");

  try {
    const provider = new GoogleAuthProvider();
    await setPersistence(auth, browserSessionPersistence);
    await signInWithPopup(auth, provider);
    console.log(fun);
    fun();
  } catch (error) {
    console.log(error);
  }
}

async function Logout(fun = () => {}) {
  console.log("logging out");

  try {
    console.log(await signOut(auth));
    fun();
  } catch (error) {
    console.log(error);
  }
}
function isUserSignedIn() {
  return !!auth.currentUser;
}
function getUserId() {
  return auth.currentUser?.uid;
}
function getUserName() {
  return auth.currentUser?.displayName;
}
function getUserMail() {
  return auth.currentUser?.email;
}
function getUserPhoto() {
  return auth.currentUser?.photoURL || "assests/user-photo.png";
}
export {
  getUserId,
  getUserMail,
  getUserName,
  getUserPhoto,
  isUserSignedIn,
  Login,
  Logout,
};
