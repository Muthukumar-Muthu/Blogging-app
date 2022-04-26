import { Logout, db, auth } from "../firebase/firebase-config";
import "./style.css";
import BlogList from "../blog-list/BlogList";
import NewBlog from "../new-blog/NewBlog";

import { getDoc, query, collection, getDocs } from "firebase/firestore";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export default function Home({ setBlogs, userObj, blogs }) {
  useEffect(() => {
    getBlogs();
    console.log("Home mounted");
    return () => {
      console.log("home unmounted");
    };
  }, []);
  async function getBlogs() {
    const blogsArray = [];

    try {
      const userId = userObj.uid;
      console.log(userId);

      const blogsQuery = query(collection(db, `users/${userId}/blogs`));

      const blogs = await getDocs(blogsQuery);
      blogs.forEach((blog) => {
        blogsArray.push({ ...blog.data(), id: blog.id });
      });
      if (blogsArray.length !== 0) {
        console.log("setting");
        setBlogs(blogsArray);
      } else console.log("not setting the state");
    } catch (error) {
      console.log(error);
    }
  }
  console.log(blogs);
  return (
    <div className="home">
      <section className="profile">Muthukumar</section>
      <BlogList blogs={blogs} />
      <div className="logout" onClick={Logout}>
        Logout
      </div>
    </div>
  );
}
