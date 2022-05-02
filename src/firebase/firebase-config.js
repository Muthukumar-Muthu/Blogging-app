// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfMMKYB-9h0n3EMibkLiI_VVqt6zMANqY",
  authDomain: "blogging-app-8223c.firebaseapp.com",
  projectId: "blogging-app-8223c",
  storageBucket: "blogging-app-8223c.appspot.com",
  messagingSenderId: "872344923718",
  appId: "1:872344923718:web:a596cc3488e113ca54e447",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//authentication
const auth = getAuth(app);

//login
async function Login(fun = () => {}) {
  try {
    const provider = new GoogleAuthProvider();
    await setPersistence(getAuth(app), browserSessionPersistence);
    await signInWithPopup(getAuth(app), provider);
    console.log(fun);
    fun();
  } catch (error) {
    console.log(error);
  }
}

async function Logout(fun = () => {}) {
  console.log("logging out");

  try {
    console.log(await signOut(getAuth()));
    fun();
  } catch (error) {
    console.log(error);
  }
}
function isUserSignedIn() {
  return !!getAuth().currentUser;
}
function getUserId() {
  if (!isUserSignedIn()) return;
  return getAuth().currentUser.uid;
}
function getUserName() {
  if (!isUserSignedIn()) return;
  return getAuth().currentUser.displayName;
}
function getUserMail() {
  if (!isUserSignedIn()) return;
  return getAuth().currentUser.email;
}
function getUserPhoto() {
  if (!isUserSignedIn()) return;
  return getAuth().currentUser.photoURL || "assests/user-photo.png";
}
const userObj = getAuth().currentUser;
const db = getFirestore();

export {
  app,
  auth,
  Login,
  Logout,
  db,
  userObj,
  isUserSignedIn,
  getUserId,
  getUserName,
  getUserMail,
  getUserPhoto,
};
