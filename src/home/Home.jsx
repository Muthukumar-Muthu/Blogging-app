import { Logout, db, auth } from "../firebase/firebase-config";
import "./style.css";
import BlogList from "../blog-list/BlogList";
import NewBlog from "../new-blog/NewBlog";

import { getDoc, query, collection, getDocs } from "firebase/firestore";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Home({ setBlogs, blogs }) {
  useEffect(() => {
    getBlogs();
  }, []);
  async function getBlogs() {
    const blogsArray = [];
    console.log("getting blogs");
    try {
      const userId = auth.currentUser.uid;
      const blogsQuery = query(collection(db, `users/${userId}/blogs`));
      const blogs = await getDocs(blogsQuery);
      blogs.forEach((blog) => {
        console.log("getting blog");
        blogsArray.push({ ...blog.data(), id: blog.id });
      });
      setBlogs(blogsArray);
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
