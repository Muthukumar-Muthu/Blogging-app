import { Logout, db } from "../firebase/firebase-config";
import "./style.css";
import BlogList from "../blog-list/BlogList";
import Sidebar from "../side-bar/Sidebar";
import RightSideBar from "../right-side-bar/RightSideBar";
import { query, collection, getDocs } from "firebase/firestore";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import Profile from "../side-bar/profile/Profile";
import Blog from "../blog/Blog";
import { onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
export default function Home({
  getUserDetail,
  localUserObj,
  setBlogs,
  setUserLogged,
  userObj,
  blogs,
}) {
  const [showToolTip, setshowToolTip] = useState(false);

  // useEffect(() => {
  //   let unsub = 0;
  //   try {
  //     unsub = getBlogs();
  //   } catch (error) {
  //     console.warn(error);
  //   }
  //   return unsub;
  // }, []);
  function closeProfileToolTip(e) {
    const elementName = e.target.className;
    if (elementName !== "user-photo") setshowToolTip(false);
    console.log(elementName);
  }

  return (
    <div className="home" onClick={closeProfileToolTip}>
      <Sidebar showToolTip={showToolTip} setshowToolTip={setshowToolTip} />
      <Routes>
        <Route path="/" element={<BlogList blogs={blogs} />} />
        <Route path={`/blog/:blogId`} element={<Blog blogs={blogs} />} />
      </Routes>
      <RightSideBar />
    </div>
  );
}
