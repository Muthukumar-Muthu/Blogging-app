import { doc, getDoc } from "firebase/firestore";
import { db } from "../configuration/firebase-config";

async function getUserDetail(userId) {
  console.log(userId);

  const docRef = `users/${userId}/`;
  const docObj = await getDoc(doc(db, docRef));
  return docObj.data();
}
export default getUserDetail;
