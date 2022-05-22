import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import ProfilePage from "../profile-page/ProfilePage";
import {
  getUserId,
  getUserName,
  getUserPhoto,
} from "../../firebase/authentication/userDetails";
import { db } from "../../firebase/configuration/firebase-config";
import { useEffect } from "react/";
const UserProfileIncomplete = () => {
  useEffect(() => {
    setUserDetails();
  }, []);
  return (
    <div>
      <ProfilePage />
    </div>
  );
};
export default UserProfileIncomplete;
async function setUserDetails() {
  try {
    await setDoc(doc(db, `users/${getUserId()}/`), {
      bio: "",
      lastLogin: serverTimestamp(),
      name: getUserName(),
      photoUrl: getUserPhoto(),
      userId: getUserId(),
      userProfileCompleted: false,
    });
  } catch (error) {
    console.warn(error);
  }
}
