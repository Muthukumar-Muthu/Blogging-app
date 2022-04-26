// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
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
async function Login() {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  } catch (error) {
    console.log(error);
  }
}

async function Logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
}

const userObj = getAuth().currentUser;
const db = getFirestore();
export { app, auth, Login, Logout, db, userObj };
