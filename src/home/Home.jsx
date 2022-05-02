import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import "./style.css";
import BlogList from "../blog-list/BlogList";
import LeftSideBar from "../left-side-bar/LeftSideBar";
import RightSideBar from "../right-side-bar/RightSideBar";
import Blog from "../blog/Blog";
import { db } from "../firebase/firebase-config";
import { isUserSignedIn } from "../firebase/firebase-config";
export default function Home() {
  const [showToolTip, setshowToolTip] = useState(false);
  const location = useLocation();
  const [blogs, setBlogs] = useState([]);
  const userLogged = isUserSignedIn();
  console.log(location.pathname);

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

  if (!userLogged) return <Navigate to={"/"} />;

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

  function closeProfileToolTip(e) {
    const elementName = e.target.className;
    if (elementName !== "user-photo") setshowToolTip(false);
    console.log(elementName);
  }
  return (
    <div className="home" onClick={closeProfileToolTip}>
      <LeftSideBar showToolTip={showToolTip} setshowToolTip={setshowToolTip} />
      <Routes>
        <Route path={`/blog/:blogId`} element={<Blog blogs={blogs} />} />
        <Route path="/" element={<BlogList blogs={blogs} />} />
      </Routes>
      <RightSideBar />
    </div>
  );
}
