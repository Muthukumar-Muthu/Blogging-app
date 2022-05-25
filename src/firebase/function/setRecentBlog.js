import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../configuration/firebase-config";

const setRecentBlog = async (authorId, blogId) => {
  console.log(authorId, blogId);

  try {
    await addDoc(collection(db, "recentBlogs"), {
      url: `${(authorId + "").trim()}/${(blogId + "").trim()}`,
      timeStamp: serverTimestamp(),
    });
    return true;
  } catch (err) {
    console.warn(err);
    return false;
  }
};
export default setRecentBlog;
