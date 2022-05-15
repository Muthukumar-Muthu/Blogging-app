import { collection, deleteDoc, Timestamp } from "firebase/firestore";
import moment from "moment";
import { getDoc, doc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// import getMargin from "../../functions/margins";
import "./style.css";
import { db } from "../../firebase/configuration/firebase-config";
import fixBlogObj from "../../functions/formatHtml";
import { isUserSignedIn } from "../../firebase/authentication/userDetails";
const Blog = () => {
  const { blogId, userId } = useParams();
  console.log(useParams());

  const [blogObj, setBlogObj] = useState(null);
  const navigate = useNavigate();
  // const { leftMargin, rightMargin } = getMargin();
  async function getBlog() {
    try {
      const blog = await getDoc(doc(db, `users/${userId}/blogs/${blogId}`));
      setBlogObj(fixBlogObj(blog.data()));
    } catch (error) {
      console.warn(error);
    }
  }

  async function deleteBlog() {
    //TODO: FIX WARN
    if (isUserSignedIn()) {
      await deleteDoc(doc(db, `users/${userId}/blogs/${blogId}`));
      navigate("/");
    } else {
      console.warn("logging in first");
    }
  }
  async function updateBlog() {
    //TODO: FIX WARN
    if (isUserSignedIn()) {
      navigate(`/edit/${userId}/${blogId}`);
    } else {
      console.warn("logging in first");
    }
  }
  useEffect(() => {
    getBlog();
  }, []);

  if (!blogObj) return <></>; //TODO: warn user about unavaiablity of blog

  let { heading, blogContent, timeStamp, name } = blogObj;

  let date = "";
  if (timeStamp) {
    const time = new Timestamp(timeStamp.seconds, timeStamp.nanoseconds);
    const dateObj = time.toDate();
    date = moment(dateObj).format("LLL");
  } else {
    date = moment(new Date()).format("LLL");
  }

  return (
    <div
      className="blog-wrapper center-component"
      // style={{
      //   marginInline: `${leftMargin + 5}px ${rightMargin + 5}px`,
      // }}
    >
      <div
        className="blog"
        style={{
          marginTop: "1em",
        }}
      >
        <div className="buttons">
          <button style={{ marginInline: "auto" }} onClick={deleteBlog}>
            Delete
          </button>
          <button style={{ marginInline: "auto" }} onClick={updateBlog}>
            Update
          </button>
        </div>
        <h2 className="heading">{heading}</h2>
        <p className="summary">{blogContent}</p>
        <div className="flex">
          <h4 className="author">{name}</h4>
          <h6 className="time">{date}</h6>
        </div>
      </div>
    </div>
  );
};

export default Blog;
