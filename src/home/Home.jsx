import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { generateHTML } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import parse from "html-react-parser";

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
        const obj = fixBlogObj(doc.data());
        blogsArray.push({ id: doc.id, ...obj });
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
function fixBlogObj(obj) {
  const { blogContent } = obj;
  const blogContentObj = JSON.parse(blogContent);
  const string = generateHTML(blogContentObj, [StarterKit]);
  const html = stringToHtml(string);
  obj.blogContent = html;
  return obj;
}
function stringToHtml(string) {
  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === "remove") {
        return <></>;
      }
    },
  };
  return parse(string, options);
}
