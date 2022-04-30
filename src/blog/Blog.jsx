import { getDoc, Timestamp, doc } from "firebase/firestore";
import moment from "moment";
import { getAuth } from "firebase/auth";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
import "./style.css";
const Blog = ({ blogs }) => {
  const { blogId } = useParams();
  const blogObj = blogs.filter((blog) => blog.id === blogId)[0];

  // useEffect(() => {
  //   const getBlog = async () => {
  //     try {
  //       const docObj = await getDoc(
  //         doc(db, `users/${userObj.uid}/blogs/${blogId}`)
  //       );
  //       const blog = docObj.data();
  //       setBlogObj(blog);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   userObj = getAuth().currentUser;
  //   getBlog();
  // }, []);

  const { heading, summary, timeStamp, name } = blogObj;

  let date = "";
  if (timeStamp) {
    const time = new Timestamp(timeStamp.seconds, timeStamp.nanoseconds);
    const dateObj = time.toDate();
    date = moment(dateObj).format("LLL");
  } else {
    date = moment(new Date()).format("LLL");
  }

  return (
    <div className="blog-wrapper">
      <div className="blog">
        <h2 className="heading">{heading}</h2>
        <p className="summary">{summary}</p>
        <div className="flex">
          <h4 className="author">{name || "name"}</h4>
          <h6 className="time">{date}</h6>
        </div>
      </div>
    </div>
  );
};
export default Blog;
