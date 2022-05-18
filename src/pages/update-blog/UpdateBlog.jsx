import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getDoc, doc, setDoc, serverTimestamp } from "firebase/firestore";

import Header from "../../components/header/Header";
import Editor from "../../components/editor/Editor";
import { db } from "../../firebase/configuration/firebase-config";
import { context } from "../../context/ContextProvider";
import { getUserName } from "../../firebase/authentication/userDetails";
const UpdateBlog = () => {
  const { closeProfileToolTip } = useContext(context);
  const { blogId, userId } = useParams();
  const [formObj, setFormObj] = useState({});
  const [blogContent, setBlogContent] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getBlog();
  }, []);
  function changeHandler(e) {
    setFormObj((p) => {
      return {
        ...p,
        [e.target.name]: e.target.value,
      };
    });
  }
  async function getBlog() {
    try {
      const blog = await getDoc(doc(db, `users/${userId}/blogs/${blogId}`));
      const { heading, blogContent: summary } = blog.data();

      setFormObj({ heading });
      setBlogContent(summary);
    } catch (error) {
      console.warn(error);
    }
  }

  function submitHandler() {
    sumbitDoc({ ...formObj, blogContent: JSON.stringify(blogContent) });
  }
  async function sumbitDoc(obj) {
    const saveObj = {
      ...obj,
      heading: obj.heading.slice(0, 1).toUpperCase() + obj.heading.slice(1),
      name: getUserName(),
      timeStamp: serverTimestamp(),
    };
    try {
      await setDoc(doc(db, `users/${userId}/blogs/${blogId}`), saveObj);
      navigate(`/blog/${userId}/${blogId}`);
    } catch (error) {
      console.warn(error);
      navigate("/");
    }
  }

  return (
    <div>
      {blogContent && (
        <div className="form-wrapper" onClick={closeProfileToolTip}>
          <Header submitHandler={submitHandler} />
          <div
            style={{
              display: "flex",
              margin: "2em",
              justifyContent: "center",
              alignItems: "center",
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
          <h2 style={{ textAlign: "center", marginTop: "1em" }}>
            Blog's Content
          </h2>
          <Editor setBlogContent={setBlogContent} blogContent={blogContent} />
        </div>
      )}
    </div>
  );
};
export default UpdateBlog;
