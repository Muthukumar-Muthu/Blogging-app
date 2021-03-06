import { useState, useContext } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";

import "./style.css";

import {
  getUserId,
  getUserName,
} from "../../firebase/authentication/userDetails";
import { db } from "../../firebase/configuration/firebase-config";
import { context } from "../../context/ContextProvider";
import Header from "../../components/header/Header";
import Editor from "../../components/editor/Editor";
import { userContext } from "../../context/UserContext";
import setRecentBlog from "../../firebase/function/setRecentBlog";
const NewBlog = () => {
  const { closeProfileToolTip } = useContext(context);
  const { isCompleted } = useContext(userContext);
  const navigate = useNavigate();
  const [formObj, setFormObj] = useState({});
  const [blogContent, setBlogContent] = useState({});

  function submitHandler(e) {
    console.log("submitting blog");

    e.preventDefault();
    const blog = {
      ...formObj,
      blogContent: JSON.stringify(blogContent),
    };

    if (
      blog.heading &&
      blog.blogContent &&
      (blog.heading ? blog.heading + "" : "").trim !== ""
    ) {
      saveBlog({ ...formObj, blogContent: JSON.stringify(blogContent) });
      navigate("/");
    } else {
      alert(`empty blog can't submit`);
      console.error(`empty blog can't submit`);
    }
  }
  async function saveBlog(obj) {
    try {
      const userId = getUserId();
      const saveObj = {
        ...obj,
        heading: obj.heading.slice(0, 1).toUpperCase() + obj.heading.slice(1),
        name: getUserName(),
        timeStamp: serverTimestamp(),
      };

      const docRef = await addDoc(
        collection(db, `users/${userId}/blogs`),
        saveObj
      );
      setRecentBlog(getUserId(), docRef.id);
    } catch (error) {
      console.error(error);
    }
  }
  function changeHandler(e) {
    setFormObj((p) => {
      return {
        ...p,
        [e.target.name]: e.target.value,
      };
    });
  }

  return isCompleted ? (
    <div className="form-wrapper" onClick={closeProfileToolTip}>
      <Header submitHandler={submitHandler} />
      <div
        style={{
          display: "flex",
          margin: "2em",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <label htmlFor="heading">
          <h3>Blog Heading:</h3>
        </label>
        <input
          style={{
            marginInline: "2em",
            padding: "1em",
            minWidth: "300px",
            border: "thin solid lightgrey",
            width: "75%",
          }}
          onChange={changeHandler}
          type="text"
          name="heading"
          id="heading"
          value={formObj.heading || ""}
          placeholder="Blog's heading"
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      <hr />
      <h2 style={{ textAlign: "center", marginTop: "1em" }}>Blog's Content</h2>
      <Editor setBlogContent={setBlogContent} />
    </div>
  ) : (
    <Navigate to={"/profile"} />
  );
};
export default NewBlog;
