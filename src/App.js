import LandingPage from "./landing-page/LandingPage";
import Home from "./home/Home";
import NewBlog from "./new-blog/NewBlog";
import "./App.css";
import Blog from "./blog/Blog";

import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebase-config";

function App() {
  const [userLogged, setUserLogged] = useState(false);
  const [userObj, setUserObj] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [localUserObj, setLocalUserObj] = useState({});

  const navigate = useNavigate();

  async function getUserDetail() {
    try {
      const docObj = await getDoc(doc(db, `users/${userObj.uid}/`));
      const { detail } = docObj.data();

      setLocalUserObj(detail);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    console.log("userLogged", userLogged);
    if (userLogged) {
    } else {
      setUserObj({});
      navigate("/");
    }
  }, [userLogged]);
  //console.log("userObj", userObj);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingPage setUserObj={setUserObj} setUserLogged={setUserLogged} />
        }
      />
      {userLogged && (
        <>
          <Route
            path="/home"
            element={
              <Home
                getUserDetail={getUserDetail}
                blogs={blogs}
                userObj={userObj}
                setUserLogged={setUserLogged}
                setBlogs={setBlogs}
                localUserObj={localUserObj}
              />
            }
          />
          <Route path={`/blog/new`} element={<NewBlog />} />
          <Route path={`/blog/:blogId`} element={<Blog />} />
        </>
      )}
    </Routes>
  );
}

export default App;
