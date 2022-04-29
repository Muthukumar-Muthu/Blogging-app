import LandingPage from "./landing-page/LandingPage";
import Home from "./home/Home";
import NewBlog from "./new-blog/NewBlog";
import "./App.css";
import Blog from "./blog/Blog";

import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { app, auth, db } from "./firebase/firebase-config";
import { getAuth } from "firebase/auth";

function App() {
  const [userLogged, setUserLogged] = useState(false);
  const [userObj, setUserObj] = useState({});
  const [blogs, setBlogs] = useState([
    { heading: "Heading", summary: "Summary", id: "dfaf" },
  ]);
  const [localUserObj, setLocalUserObj] = useState({});

  async function getUserDetail() {
    try {
      const docObj = await getDoc(doc(db, `users/${userObj.uid}/`));
      const { detail } = docObj.data();

      setLocalUserObj(detail);
    } catch (error) {
      console.error(error);
    }
  }

  getAuth().onAuthStateChanged((user) => {
    if (user) {
      setUserLogged(true);
    } else {
      setUserLogged(false);
      setUserObj({});
    }
  });

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
            path="/home/*"
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
        </>
      )}
    </Routes>
  );
}

export default App;
