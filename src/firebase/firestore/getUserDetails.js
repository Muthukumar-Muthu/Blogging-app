import { doc, getDoc } from "firebase/firestore";

import { getUserId } from "../authentication/userDetails";
import { db } from "../configuration/firebase-config";
export async function getUserDetails(property = "") {
  try {
    const userDetailObj = await getDoc(doc(db, `users/${getUserId()}/`));
    const userDetails = userDetailObj.data();

    return userDetails[property];
  } catch (error) {
    console.error(error);
    return null;
  }
}
