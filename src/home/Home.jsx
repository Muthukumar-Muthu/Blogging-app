import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./style.css";
import BlogList from "../blog-list/BlogList";
import LeftSideBar from "../left-side-bar/LeftSideBar";
import RightSideBar from "../right-side-bar/RightSideBar";
import Blog from "../blog/Blog";

export default function Home({
  getUserDetail,
  localUserObj,
  setBlogs,
  setUserLogged,
  userObj,
  blogs,
}) {
  const [showToolTip, setshowToolTip] = useState(false);

  function closeProfileToolTip(e) {
    const elementName = e.target.className;
    if (elementName !== "user-photo") setshowToolTip(false);
    console.log(elementName);
  }

  return (
    <div className="home" onClick={closeProfileToolTip}>
      <LeftSideBar showToolTip={showToolTip} setshowToolTip={setshowToolTip} />
      <Routes>
        <Route path="/" element={<BlogList blogs={blogs} />} />
        <Route path={`/blog/:blogId`} element={<Blog blogs={blogs} />} />
      </Routes>
      <RightSideBar />
    </div>
  );
}
