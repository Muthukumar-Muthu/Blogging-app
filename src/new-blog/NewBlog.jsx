import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase-config";

const NewBlog = () => {
  const navigate = useNavigate();
  const [formObj, setFormObj] = useState({});

  function submitHandler(e) {
    e.preventDefault();
    saveBlog(formObj);
    navigate("/home");
  }
  async function saveBlog(obj) {
    const captilizedHeading =
      obj.heading.slice(0, 1).toUpperCase() + obj.heading.slice(1);
    try {
      const userId = getAuth().currentUser.uid;
      await addDoc(collection(db, `users/${userId}/blogs`), {
        ...obj,
        heading: captilizedHeading,
        timeStamp: serverTimestamp(),
        name: getAuth().currentUser.displayName,
      });
    } catch (error) {
      console.log(error);
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
  function goBack() {
    navigate(-1);
  }
  return (
    <div className="form-wrapper">
      <form className="new-blog" onSubmit={submitHandler}>
        <label htmlFor="heading">
          <h3>Your Blog:</h3>
        </label>
        <input
          onChange={changeHandler}
          type="text"
          name="heading"
          id="heading"
          value={formObj.heading || ""}
          placeholder="Blog's heading"
          autoComplete="false"
          spellCheck="false"
        />
        <textarea
          onChange={changeHandler}
          name="summary"
          value={formObj.summary || ""}
          id="summary"
          cols="30"
          rows="10"
          placeholder="Blog's summary"
          autoComplete="false"
          spellCheck="false"
        ></textarea>
        <div className="buttons">
          <button type="submit" onClick={submitHandler}>
            Submit Blog
          </button>
        </div>
      </form>
      <button className="cancel" onClick={goBack}>
        Go back
      </button>
    </div>
  );
};
export default NewBlog;
