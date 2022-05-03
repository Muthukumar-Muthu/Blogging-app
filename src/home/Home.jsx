import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useContext } from "react";

import "./style.css";
import BlogList from "../blog-list/BlogList";
import LeftSideBar from "../left-side-bar/LeftSideBar";
import RightSideBar from "../right-side-bar/RightSideBar";
import Blog from "../blog/Blog";
import { db } from "../firebase/firebase-config";
import { isUserSignedIn } from "../firebase/firebase-config";
import { context } from "../context/ContextProvider";
export default function Home() {
  const [blogs, setBlogs] = useState([]);

  const userLogged = isUserSignedIn();
  const { closeProfileToolTip } = useContext(context);
  console.log(closeProfileToolTip);

  useEffect(() => {
    console.log(userLogged);
    if (userLogged) {
      let unsub = 0;
      try {
        unsub = getBlogs();
      } catch (error) {
        console.warn(error);
      }
      return unsub;
    }
  }, []);

  function getBlogs() {
    console.log("Getting Blogs");
    const blogsQuery = query(
      collection(db, `users/${getAuth().currentUser.uid}/blogs`),
      orderBy("timeStamp", "desc")
    );
    const q = onSnapshot(blogsQuery, function (snapshot) {
      let blogsArray = [];
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
        blogsArray.push({ id: doc.id, ...doc.data() });
      });
      setBlogs(blogsArray);
    });
    return q;
  }

  return (
    <div className="home" onClick={closeProfileToolTip}>
      <LeftSideBar />
      <Routes>
        <Route path={`/blog/:blogId`} element={<Blog blogs={blogs} />} />
        <Route path="/" element={<BlogList blogs={blogs} />} />
      </Routes>
      <RightSideBar />
    </div>
  );
}
