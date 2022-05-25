import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../configuration/firebase-config";
export default function loginWithTestUser() {
  const email = "testuser@gmail.com";
  const password = "AmmaAppa";
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.replace("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
